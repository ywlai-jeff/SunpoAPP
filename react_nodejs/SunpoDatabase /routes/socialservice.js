var express = require('express'); 
var router = express.Router();
var ObjectId = require('mongodb').ObjectId;

// handle Login
router.post('/login', function (req, res) {
	var db = req.db;
    var user_collection = db.get('userList');
    // var comment_collection = db.get('commentList'); 
    // var post_collection = db.get('postList');
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
                res.json({'message':'Login Success!', 'username':login_user[0].username, 'position':login_user[0].position});
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



/*
 * Handle preflighted request
 */
router.options("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.send(200);
});


module.exports = router;
