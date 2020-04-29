var express = require('express'); 
var router = express.Router();
var ObjectId = require('mongodb').ObjectId;

// //phpmyadmin
// /* GET item quantity. */
// router.get('/getitemquantity', function(req, res) {
// 	var db = req.con;
//     var data = "";
//     res.set({
//         "Access-Control-Allow-Origin": "http://localhost:3000",
//         'Access-Control-Allow-Credentials': 'true'
//     });
// 	db.query('SELECT * FROM SUNPO2 ORDER BY Date ASC',function(err,rows){
// 		if(err) throw err;
		
// 		console.log('Data received from Db:\n');
// 		console.log(rows);
//         var data = rows;
//         var latest = new Date('2020-01-01');
//         var item_count = 0;;

//         data.map(d => {
//             item_count++;
//             if(d.Date > latest)
//                 latest = new Date(d.Date.valueOf());
//         })
//         res.json({'dataGet': data, 'latest_date': latest + " ", "item_count": item_count});

// 	});
// });

// /* GET dailysales. */
// router.get('/getdailysales', function(req, res) {
// 	var db = req.con;
//     var data = "";
//     res.set({
//         "Access-Control-Allow-Origin": "http://localhost:3000",
//         'Access-Control-Allow-Credentials': 'true'
//     });
// 	db.query('SELECT * FROM Sunposales ORDER BY Date ASC',function(err,rows){
// 		if(err) throw err;
		
// 		console.log('Data received from Db:\n');
// 		console.log(rows);
//         var data = rows;
//         var latest = new Date('2020-01-01');
//         // var aa = new Date(data[30].Date.valueOf()+ 1000*60*60*8);
//         // var b = data[30].Date;
//         // var a = new Date(data[30].Date).toLocaleDateString('zh-TW', {timeZone: 'Asia/Taipei'});
//         data.map(d => {
//             if(d.Date > latest)
//                 latest = new Date(d.Date.valueOf());
//         })
//         res.json({'dataGet': data, 'latest_date': latest + " "});
// 		// console.log("Outside--"+data.id);
//         // res.render('userIndex', { title: 'User Information', dataGet: data });
//         // res.json({'status': 1});
//         // res.send(JSON.stringify({'status': 1}));
// 	});
// });

// //insert item quantity
// router.post('/insertitemquantity', function (req, res) {
//     var db = req.con;
//     var dates = req.body.dates;
//     var itemlist = ["ngaolam", "suigao", "wuntun", "ngoyun", "yupeigao", "yudan", "yupin", 
//     "yupei", "yugok", "yujak", "yuyun", "yukyun", "magun", "jusao", "jajueng", "ngaogenyun", "ngaotou", "ngauzharp"]; 
//     var itemlist2 = [req.body.ngaolam, req.body.suigao, req.body.wuntun, req.body.ngoyun, req.body.yupeigao, req.body.yudan, 
//         req.body.yupin, req.body.yupei, req.body.yugok, req.body.yujak, req.body.yuyun, req.body.yukyun, req.body.magun, 
//         req.body.jusao, req.body.jajueng, req.body.ngaogenyun, req.body.ngaotou, req.body.ngauzharp];
//     res.set({
//         "Access-Control-Allow-Origin": "http://localhost:3000",
//         'Access-Control-Allow-Credentials': 'true'
//     });  
//     for(i=0; i<18;i++)
// 	db.query('INSERT INTO SUNPO2 (Date, food, quantity) VALUES ("'+dates+'", "'+itemlist[i]+'", "'+itemlist2[i]+'")',function(err,rows){
//         if(err) throw err;
//         // res.json({'status': "success"});
//     });
//     res.json({'status': "success"});
// });

// //insert sales
// router.post('/insertsale', function (req, res) {
//     var db = req.con;
//     var dates = req.body.dates;
//     var sale = req.body.sales;
//     res.set({
//         "Access-Control-Allow-Origin": "http://localhost:3000",
//         'Access-Control-Allow-Credentials': 'true'
//     });  
// 	db.query('INSERT INTO Sunposales (id, Date, Sales) VALUES (NULL, "'+dates+'", '+sale+')',function(err,rows){
//         if(err) throw err;
//         res.json({'status': "success"});
// 	});
// });

//update sales
// router.put('/updatesale', function (req, res) {
// 	var db = req.con;
//     var dates = req.body.dates;
//     var sale = req.body.sales.parseInt(); 
//     res.set({
//         "Access-Control-Allow-Origin": "http://localhost:3000",
//         'Access-Control-Allow-Credentials': 'true'
//     });  
// 	// db.query('UPDATE Sunposales SET Sales = '+sale+' WHERE Date = "'+dates+'"',function(err,rows){
//     db.query('UPDATE Sunposales SET Sales = '+25000+' WHERE Date = "2020-04-19"',function(err,rows){
//         if(err) throw err;
//         res.json({'status': "success"});
// 	});
// });


// mongodb
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

//update transaction
router.put('/updatetran',function(req,res){
    var db = req.db;
    var trans_collection = db.get('transactionList');
    // var id = req.cookies.userId;
    var tranId = req.body.tranId;
    res.set({
        "Access-Control-Allow-Origin": "http://localhost:3000",
        'Access-Control-Allow-Credentials': 'true'
    });
    // update the information of the user
	trans_collection.update({'_id':tranId},{$set:{"orderStatus": "outdated"}},function(error, user){
        if(error === null){
            res.send("");
        } else{
            res.send(error);
        }
    })
});


//delete transaction
router.delete('/deletetran/:tranId',function(req,res){
    var db = req.db;
	var trans_collection = db.get('transactionList');
	var tranId = req.params.tranId;
    res.set({
        "Access-Control-Allow-Origin": "http://localhost:3000",
        'Access-Control-Allow-Credentials': 'true'
    });
    trans_collection.remove({'_id':tranId},{},function(error, docs){
        if(error === null){
            res.send("");
        } else{
            res.send(error2);
        }
    });
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

// handle get yesterday
router.get('/getyesterday/:date',function(req,res){
    var db = req.db;
    var trans_collection = db.get('transactionList');
    var id = req.cookies.userId;
    var date = req.params.date.toString();
    var day = date.substr(0,2);
    var month = date.substr(2,2);
    var year = date.substr(4,4);
    date = day + "/" + month + "/" + year;
    // trans[0].transTime.toString().substr(0,10)
    res.set({
        "Access-Control-Allow-Origin": "http://localhost:3000",
        'Access-Control-Allow-Credentials': 'true'
    });
    // retrieve the information of the user
	trans_collection.find({'orderStatus': "finished"},{},function(error, trans){
        if(error === null){
            // new Date().toLocaleString().valueOf().toString().substr(0,10)
            var dailysales = 0;
            var itemlist = {"ngaolam": 0, "suigao": 0, "wuntun": 0, "ngoyun": 0, "yupeigao": 0,
            "yudan": 0, "yupin": 0, "yupei": 0, "yugok": 0, "yujak": 0, "yuyun": 0, "yukyun": 0,
            "magun": 0, "jusao": 0, "jajueng": 0, "ngaogenyun": 0, "ngaotou": 0, "ngauzharp": 0};

            for(var i in trans){
                if(trans[i].transTime.toString().substr(0,10) == date){
                    dailysales += parseInt(trans[i].totalPrice);
                    trans[i].products.map((item, index) => {
                        switch(item.name){
                            case '招牌牛三寶粉麵': itemlist.ngaotou += 1 * item.quantity; itemlist.magun += 1 * item.quantity; itemlist.ngaolam += 1 * item.quantity;
                            // case '四寶粉麵': itemlist.yupin += 1 * item.quantity;
                            // case '八寶粉麵': itemlist.yugok += 1 * item.quantity;
                            case '魚皮': itemlist.yupei += 1 * item.quantity;
                            case '大魚皮': itemlist.yupei += 1 * item.quantity;
                            case '自製魚蛋(每斤)': itemlist.yudan += 1 * item.quantity;
                            case '雙滑魚片(每斤)': itemlist.yupin += 1 * item.quantity;
                            case '黃金魚角(每斤)': itemlist.yugok += 1 * item.quantity;
                            case '手打牛丸(每斤)': itemlist.ngoyun += 1 * item.quantity;
                            case '鮮豬肉丸(每斤)': itemlist.yukyun += 1 * item.quantity;
                            case '鮮墨魚丸(每斤)': itemlist.yuyun += 1 * item.quantity;
                            case '鮮魚皮餃(每斤)': itemlist.yupeigao += 1 * item.quantity;
                            case '鮮制魚扎(每斤)': itemlist.yujak += 1 * item.quantity;
                            case '鮮蝦雲吞(每打)': itemlist.wuntun += 1 * item.quantity;
                            case '自製水餃(每打)': itemlist.suigao += 1 * item.quantity;
                            case '淨南乳豬手': itemlist.jusao += 1 * item.quantity;
                            case '原汁淨牛腩(小)': itemlist.ngaolam += 1 * item.quantity;
                            case '五香淨牛什(小)': itemlist.ngauzharp += 1 * item.quantity;
                            case '淨金錢肚(小)': itemlist.ngaotou += 1 * item.quantity;
                            case '淨袐製孖筋(小)': itemlist.magun += 1 * item.quantity;
                            case '原汁淨牛腩(大)': itemlist.ngaolam += 1 * item.quantity;
                            case '五香淨牛什(大)': itemlist.ngauzharp += 1 * item.quantity;
                            case '淨金錢肚(大)': itemlist.ngaotou += 1 * item.quantity;
                            case '淨袐製孖筋(大)': itemlist.magun += 1 * item.quantity;
                            case '牛腩牛什': itemlist.ngaolam += 1 * item.quantity; itemlist.ngauzharp += 1 * item.quantity;
                            case '牛腩牛肚': itemlist.ngaolam += 1 * item.quantity; itemlist.ngaotou += 1 * item.quantity;
                            case '牛腩牛筋': itemlist.ngaolam += 1 * item.quantity; itemlist.magun += 1 * item.quantity;
                            case '牛什牛肚': itemlist.ngauzharp += 1 * item.quantity; itemlist.ngaotou += 1 * item.quantity;
                            case '牛什牛筋': itemlist.ngauzharp += 1 * item.quantity; itemlist.magun += 1 * item.quantity;
                            case '牛肚牛筋': itemlist.ngaotou += 1 * item.quantity; itemlist.magun += 1 * item.quantity;
                        }

                        if(item.custom.includes('鮮味魚扎'))itemlist.yujak += 1 * item.quantity;
                        if(item.custom.includes('鮮墨魚丸'))itemlist.yuyun += 1 * item.quantity;
                        if(item.custom.includes('鮮豬肉丸'))itemlist.yukyun += 1 * item.quantity;
                        if(item.custom.includes('鮮蝦雲吞'))itemlist.wuntun += 1 * item.quantity;
                        if(item.custom.includes('自製水餃'))itemlist.suigao += 1 * item.quantity;
                        if(item.custom.includes('南乳豬手'))itemlist.jusao += 1 * item.quantity;
                        if(item.custom.includes('秘製炸醬'))itemlist.jajueng += 1 * item.quantity;
                        if(item.custom.includes('鮮炸魚皮'))itemlist.yupei += 1 * item.quantity;
                        if(item.custom.includes('鮮魚皮餃'))itemlist.yupeigao += 1 * item.quantity;
                        if(item.custom.includes('原汁牛腩'))itemlist.ngaolam += 1 * item.quantity;
                        if(item.custom.includes('五香牛什'))itemlist.ngauzharp += 1 * item.quantity;
                        if(item.custom.includes('金錢牛肚'))itemlist.ngaotou += 1 * item.quantity;
                        if(item.custom.includes('秘製孖筋'))itemlist.magun += 1 * item.quantity;
                        if(item.custom.includes('自製魚蛋'))itemlist.yudan += 1 * item.quantity;
                        if(item.custom.includes('雙滑魚片'))itemlist.yupin += 1 * item.quantity;
                        if(item.custom.includes('黃金魚角'))itemlist.yugok += 1 * item.quantity;
                        if(item.custom.includes('手打牛丸'))itemlist.ngoyun += 1 * item.quantity;
                        if(item.custom.includes('牛筋丸'))itemlist.ngaogenyun += 1 * item.quantity;
                    })
                }
            }
    
            res.json({"dailysales": dailysales, "itemkg": itemlist});
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
    // res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Origin', 'https://i.cs.hku.hk');
    // res.header('Access-Control-Allow-Origin', 'http://localhost:3002');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // res.header('Access-Control-Allow-Headers: accept, origin, authorization, content-type');
    res.header('Access-Control-Allow-Credentials', 'true');
    // res.header('Access-Control-Allow-Origin:https://domainA');
    // res.header('Access-Control-Allow-Headers:*');
    // res.header('Access-Control-Allow-Methods:*');
    // res.setHeader("Access-Control-Expose-Headers", "..."); 
    // res.header('Access-Control-Allow-Headers: Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version, X-File-Name ');
    res.sendStatus(200);
});


module.exports = router;
