var express = require('express'); 
var router = express.Router();
var ObjectId = require('mongodb').ObjectId;

// handle Login
router.post('/login', function (req, res) {
	var db = req.db;
    var user_collection = db.get('userList');
	var username = req.body.username;
	var password = String(req.body.password);
    res.set({
        "Access-Control-Allow-Origin": "http://localhost:3000",
        'Access-Control-Allow-Credentials': 'true'
    });  
	
	// find the user according to the username
	user_collection.find({'username':username},{},function(err,login_user){
		if(err===null){
            // if the password is correct, set the cookie of userId
			if((login_user.length>0)&&(login_user[0].password===password)){
                var id=login_user[0]._id;
                res.cookie('userId', id);

                //  // send the response back to user
                res.json({'message':'Login Success!', 'id':''+id, 'username':login_user[0].username, 'position':login_user[0].position});
			}else res.send("Login failure! Wrong Password!");
		}else res.send("Login failure! Not found user!");
	});
});

// handle logout
router.get('/logout',function(req,res){
    var db = req.db;
    var collection = db.get('userList'); 
    res.set({
        "Access-Control-Allow-Origin": "http://localhost:3000",
        'Access-Control-Allow-Credentials': 'true'
    });  
    // clear the "lastCommentRetrievalTime" of the user
    collection.update({'_id':req.cookies.userId}, {}, function(error, result){
        if(error === null){
            // clear cookie and send empty string back
            res.clearCookie('userId');
            res.send("");
        }
        else{
            console.log("error");
            res.send(error);
        }
      });
});

// handle insert transaction
router.post('/inserttransaction',function(req,res){
    var db = req.db;
    var trans_collection = db.get('transactionList');
    var id = req.cookies.userId;
    res.set({
        "Access-Control-Allow-Origin": "http://localhost:3000",
        'Access-Control-Allow-Credentials': 'true'
    });
    var product_size = parseInt(req.body.product_size);
    var userId = req.body.userId;
    var name = req.body.name.split(",");
    var price = req.body.price.split(",");
    var originalPrice = req.body.originalPrice.split(",");
    var quantity = req.body.quantity.split(",");
    var custom = req.body.custom.split(".");
    var totalPrice = req.body.totalPrice;
    var tableNumber = req.body.tableNumber;
    var orderStatus = req.body.orderStatus;
    var transTime = req.body.transTime;
    var seatTaken = req.body.seatTaken;

    var c = [];
    var p = [];  
    for(var i = 0; i < product_size; i++){
        c = custom[i].split(",");
        p = p.concat({'name': name[i], 'price': price[i], 'originalPrice': originalPrice[i], 'quantity': quantity[i], 'custom': c});
    }

    addedList = {
        'userId': userId,
        'products': p,
        // 'name': name[0],
        // 'price': price,
        // 'originalPrice': originalPrice,
        // 'quantity': quantity,
        // 'custom': p,
        // 'custom_size': custom_size,
        'totalPrice': totalPrice,
        'tableNumber': tableNumber,
        'orderStatus': orderStatus,
        'transTime': transTime,
        'seatTaken': parseInt(seatTaken),
    }
        trans_collection.insert(addedList, function(error,docs){
        if(error === null){
            res.json({'message':'成功加入訂單！'});
        } else res.send({"message":"錯誤！請再試一次！"});
    })

});



// handle get transaction
router.get('/gettransaction',function(req,res){
    var db = req.db;
    var trans_collection = db.get('transactionList');
    var id = req.cookies.userId;
    res.set({
        "Access-Control-Allow-Origin": "http://localhost:3000",
        'Access-Control-Allow-Credentials': 'true'
    });
    // retrieve the information of the user
	trans_collection.find({},{},function(error, trans){
        if(error === null){
            // res.json({'message':'Login Success!'});
            // send transaction back to user
            var tranId;
            var list = [];

            for(var i in trans){
                tranId = trans[i]._id;
                
                list.push({"tranId": tranId, "userId": id, "products": trans[i].products, "totalPrice": trans[i].totalPrice, "tableNumber": trans[i].tableNumber, 
                    "orderStatus": trans[i].orderStatus, "transTime": trans[i].transTime, "seatTaken": trans[i].seatTaken});
            }
            res.json({"tran": list});
        } else{
            res.send(error);
        }
    })
});

// handle update finished order
router.put('/orderfinished',function(req,res){
    var db = req.db;
    var trans_collection = db.get('transactionList');
    // var id = req.cookies.userId;
    var tranId = req.body.tranId;
    var orderStatus = "finished";
    res.set({
        "Access-Control-Allow-Origin": "http://localhost:3000",
        'Access-Control-Allow-Credentials': 'true'
    });
    // update the information of the user
	trans_collection.update({'_id':tranId},{$set:{"orderStatus": orderStatus}},function(error, user){
        if(error === null){
            res.send("");
        } else{
            res.send(error);
        }
    })
});





/*
 * Handle preflighted request
 */
router.options("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    // res.header('Access-Control-Allow-Origin', 'http://localhost:3002');
    // res.header('Access-Control-Allow-Origin: *');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header('Access-Control-Allow-Credentials', 'true');
    // res.header('Access-Control-Allow-Origin:https://domainA');
    // res.header('Access-Control-Allow-Headers:*');
    // res.header('Access-Control-Allow-Methods:*');
    // res.setHeader("Access-Control-Expose-Headers", "..."); 
    // res.header('Access-Control-Allow-Headers: Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version, X-File-Name ');
    res.send(200);
});


module.exports = router;
