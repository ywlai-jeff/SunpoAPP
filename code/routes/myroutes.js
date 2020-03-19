var express = require('express'); 
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;


router.get('/loadpage', function(req, res) { 
	var db = req.db;	
	var category = req.query.category;
	var collection = db.get('bookCollection'); 
	var page = parseInt(req.query.page)-1;//make index of page start from 0
	var limit = 3;
	var offset = page * limit;
	var totalNumInCategory = 0;
	var filter = {"category":category};
	var options = {
		"limit":limit,
		"skip":offset,
		"sort":"title"
	}
	
	if(category!="nil"){
		
		//retrieve books on the given page of the given category
		collection.find(filter,options,function(err,docs){
		    if(err === null){
		    	//create an array to store response data
		    	var send_data=[];
		    	for(var i=0;i<docs.length;i++){
		    		var book_info = {'_id':docs[i]._id,'title':docs[i].title,'authorList':docs[i].authorList,'price':docs[i].price,'coverImage':docs[i].coverImage};
		    		send_data.push(book_info);
		    	}
				
		    	//return the total number of the books
				collection.count({category:category},{},function(err,number){
					if(err===null){
						totalNumInCategory = number;
						if(req.session.userId!=null){
							//find user name and the total number in user's cart if the user has signed in
							var usercollection=db.get('userCollection');
							usercollection.find({_id:req.session.userId},{'name':1,'totalnum':1},function(err,user){
								if(err===null){
									var json={"category":null, "totalNumInCategory":totalNumInCategory,"data":send_data,'user':user}
									res.json(json);
								}else res.send({msg:err});
							})
						}else{
							var json={"category":null, "totalNumInCategory":totalNumInCategory,"data":send_data, 'user':null};
							res.json(json);							
						}
					} else res.send({msg:err});
				});	    	
		    }else res.send({ msg: err });
	  	});  
	}else{//for 'nil' category
		
		//only find the categories
		collection.distinct("category",function(err,result){
			if(err===null){
				result = result.sort();
				//find the books of the first category
				collection.find({category:result[0]},options,function(err,docs){
					if(err === null){
				    	var send_data=[];
				    	for(var i=0;i<docs.length;i++){
				    		var book_info = {'_id':docs[i]._id,'title':docs[i].title,'authorList':docs[i].authorList,'price':docs[i].price,'coverImage':docs[i].coverImage};
				    		send_data.push(book_info);
				    	}
				    	//find the total number of books in the first category
						collection.count({category:result[0]},{},function(err,number){
							if(err===null){
								totalNumInCategory = number;
								if(req.session.userId!=null){
									var usercollection=db.get('userCollection');
									usercollection.find({_id:req.session.userId},{'name':1,'totalnum':1},function(err,user){
										if(err===null){
											var json={"category":result,"totalNumInCategory":totalNumInCategory,"data":send_data,'user':user}
											res.json(json);
										}else res.send({msg:err});
									})
								}else{
									var json={"category":result,"totalNumInCategory":totalNumInCategory,"data":send_data, 'user':null};
									res.json(json);									
								}
							} else res.send({msg:err});
						});	    	
				    }else res.send({ msg: err });
				});
			}else res.send({msg:err});
		});
	}
});


router.get('/loadbook/:id',function(req,res){
	var db = req.db;
	var bookid = req.params.id;
	var collection = db.get('bookCollection');

	//find the book according to the bookid
	collection.find({_id:bookid},function(err,docs) {
		if(err === null){
		  var send_data = {"publisher":docs[0].publisher,"date":docs[0].date,"description":docs[0].description};
	      res.json(send_data);
	    }else res.send({ msg: err });
	});

});


router.post('/signin', function (req, res) {
	var db = req.db;
	var collection = db.get('userCollection');
	var username = req.body.username;
	var password = req.body.password;
	var filter = {'name':username, 'password':password};
	
	//find the user according to the username
	collection.find({'name':username},{},function(err,login_user){
		if(err===null){
			//if the password is correct, set the session of userId
			if((login_user.length>0)&&(login_user[0].password===password)){
				var id=login_user[0]._id;
				req.session.userId=id;
				login_user[0].status="Online";
		        collection.update({'_id':id}, {$set:{status:"Online"}}, function(error2, result){
		          if(error2 != null)
		            res.send(error2);
		        });		
		        res.json({'totalnum':login_user[0].totalnum});
			}else res.send("Login failure!");
		}else res.send(err);
	});
});


router.get('/signout', function(req, res) { 	
	var db = req.db;
	var collection = db.get('userCollection');
	var id=req.session.userId;

	collection.update({_id:id},{$set:{status:"Offline"}},function(err,docs){
	    if(err === null){
		    req.session.userId = null;
		    res.send("");
	    }
	    else{
	      res.send(err);
	    }
	});
});


router.put('/addtocart',function(req,res){
	var db = req.db;
	var usercollection = db.get('userCollection');
	var bookcollection = db.get('bookCollection');
	var id=req.session.userId;
	var bookid = req.body.bookid;
	var quantity = req.body.quantity;
	var cart;
	var quantity_total = quantity;

	//first retrieve the user's cart
	usercollection.find({_id:id},{},function(err,docs){
		if(docs.length==0)
			res.send("no this user.");
		
		var totalnum = docs[0].totalnum;
		//if there is no record in the cart
		if(docs[0].cart.length==0){
			//add the book to the cart
			usercollection.update({_id:id},{$set:{cart:[{"bookId":bookid,"quantity":quantity}]},$inc:{totalnum:quantity}},function(err,docs){
				if(err)
					res.send(err);
				else{
					//caculate the total price
					bookcollection.find({_id:bookid},{},function(err,docs){
						if(err===null){
							var price = docs[0].price;
							totalprice = quantity_total * price;
							res.json({"totalprice":totalprice,"totalnum":quantity_total});
						}else res.send(err);	
					})		
				}
			});
		}else{//there are some items in the cart
			//find this book's index in user's cart array
			var cart = docs[0].cart;
			var index = cart.map(function(objectItem){return objectItem.bookId;}).indexOf(bookid);
			
			//if this book is not in the cart
			if(index==-1){
				cart.push({bookId:bookid,quantity:quantity});
				
				var update = {$push:{cart:{bookId:bookid,quantity:quantity}},$inc:{totalnum:quantity}};
				totalnum += quantity;
				
				//add it to the cart
				usercollection.update({_id:id},update,function(err,update){
					if(err === null){
						var bookId = [];
						for(var j=0;j<cart.length;j++){
							bookId.push(cart[j].bookId);							
						}

						//calculate the total price
						bookcollection.find({_id:{$in:bookId}},{},function(err,docs){
							if(err===null){
								var totalprice = 0;
								for(var i =0;i<cart.length;i++){
									var index = docs.map(function(objectItem){return objectItem._id.toString();}).indexOf(cart[i].bookId);
									var price = docs[index].price;
									totalprice += cart[i].quantity * price;
								}
								res.json({"totalprice":totalprice,"totalnum":totalnum});
							}else res.send(err);	
						})	
					}else{
						res.send(err);
					}
				});				
			}else{//if this book is already in the cart
				cart[index].quantity +=quantity;
				totalnum += quantity;
				usercollection.update({_id:id},{$set:{cart:cart},$inc:{totalnum:quantity}},function(err,update){
					if(err===null){
						var bookId = [];
						for(var j=0;j<cart.length;j++){
							bookId.push(cart[j].bookId);
						}						
						
						bookcollection.find({_id:{$in:bookId}},{},function(err,docs){
							if(err===null){
								var totalprice = 0;
								for(var i =0;i<cart.length;i++){
									var index = docs.map(function(objectItem){return objectItem._id.toString();}).indexOf(cart[i].bookId);
									var price = docs[index].price;
									totalprice += cart[i].quantity * price;
								}
								res.json({"totalprice":totalprice, "totalnum":totalnum});
							}else res.send(err);	
						})							
					}else res.send(err);
				});				
			}
		}
	});
});


router.get('/loadcart', function(req, res) { 	
	var db = req.db;
	var bookcollection = db.get('bookCollection');
	var usercollection = db.get('userCollection');
	var userid=req.session.userId;
	var cart;
	
	//find the user's data
	usercollection.find({_id:userid},{},function(err,docs){
		if(err===null){
			//get the cart
			cart = docs[0].cart;
			var totalnum = docs[0].totalnum;
			var bookId = [];
			for(var j=0;j<cart.length;j++){
				bookId.push(cart[j].bookId);
			}			

			//find the books according to the user's cart
			bookcollection.find({_id:{$in:bookId}},{'title':1,'authorList':1,'price':1,'coverImage':1},function(err,docs){
				if(err===null){					
					var books = [];
					for(var i =0;i<cart.length;i++){
						var index = docs.map(function(objectItem){return objectItem._id.toString();}).indexOf(cart[i].bookId);
						var book_detail = null;
						book_detail = docs[index];
						book_detail.quantity = cart[i].quantity;
						books.push(book_detail);
					}
					var Json = {'cart':books,'totalnum':totalnum};
					res.send(Json);
				}else res.send("load_error");
			});
		}else res.send("load_error");
	});
});
	
	
router.put('/updatecart', function(req, res) { 
	
	var db = req.db;
	var usercollection = db.get('userCollection');
	var userid = req.session.userId;
	var bookid = req.body.bookid;
	var quantity = req.body.quantity;
	var cart;
	var totalnum;

	//find the user's data
	usercollection.find({_id:userid},{},function(err,docs){
		if(err===null){
			cart = docs[0].cart;
			var index = cart.map(function(objectItem){return objectItem.bookId;}).indexOf(bookid);
			var totalnum = docs[0].totalnum - cart[index].quantity + quantity;
			cart[index].quantity = quantity;
			
			//update the cart
			usercollection.update({_id:userid},{$set:{cart:cart,totalnum:totalnum}},function(err,docs){
				if(err===null){
					res.json({totalnum:totalnum});
				}else res.send(err);
			});				
		}else res.send(err);
	});
});


router.delete('/deletefromcart/:bookid', function(req, res) { 
	
	var db = req.db;
	var usercollection = db.get('userCollection');
	var userid=req.session.userId;
	var bookid = req.params.bookid;
	var cart;
	var totalnum;

	//find the user's data
	usercollection.find({'_id':userid},{},function(err,docs){
		if(err===null){
			cart = docs[0].cart;
			var index = cart.map(function(objectItem){return objectItem.bookId;}).indexOf(bookid);
			
			totalnum = docs[0].totalnum - cart[index].quantity;
			cart.splice(index,1);
			
			//update the cart, in which the book of bookid has been deleted
			usercollection.update({_id:userid},{$set:{cart:cart,totalnum:totalnum}},function(err,docs){
				if(err===null){
					res.json({"totalnum":totalnum});
				}else res.send(err);
			});				
		}else res.send(err);
	});
});


router.get('/checkout',function(req,res){
	var db = req.db;
	var usercollection = db.get('userCollection');
	var userid = req.session.userId;
	
	//set the cart as []
	usercollection.update({'_id':userid},{$set:{cart:[],totalnum:0}},function(err,docs){
		if(err ===null){
			res.send("");
		}else res.send(err);
	})

})

module.exports = router;