var funbook_app = angular.module('funbooks', []);

funbook_app.controller('funbookController', function($scope, $http){
    //initialize the variables
	$scope.booklist = null;
    $scope.detail_book = {coverImage:"",title:"",authorList:"",price:"",publisher:"",date:"",description:""};
    $scope.current_page = 1;    
    $scope.cart = null;
    $scope.user = {'name':'','password':'','totalnum':'','totalprice':''};
    $scope.maxpage = 0;
    $scope.categorylist = [];
	
    $scope.username = undefined;
    $scope.password = undefined;
    $scope.item = "item";
    $scope.no_item = false;
    $scope.mainPage = true;
    $scope.detailPage = false;
    $scope.loginPage = false;
    $scope.cartPage = false;
    $scope.sign_in = true;
    $scope.sign_out = false;
    $scope.add_cart_success=false;
    $scope.check_signout = false;
	$scope.paySuccess = false;

	var mark_addtocart = false;
    var showLimit = 3;
    var totalNumInCategory = null;
    var currentView = "";
    var currentCategory = "";
	
    //get the books and categories from db
    $scope.getbooks = function(category){
		$scope.current_page = 1;
		
        $http.get("/loadpage?category="+category+"&page="+1).then(function(response){
            $scope.booklist = response.data.data;
            //get categories if "nil"
			if(response.data.category!=null){
                $scope.categorylist = response.data.category;
            }
            //calculate the page number
			totalNumInCategory = response.data.totalNumInCategory;
            if(totalNumInCategory % showLimit!=0){
                $scope.maxpage = parseInt(totalNumInCategory / showLimit) + 1;
            }else{
                $scope.maxpage = parseInt(totalNumInCategory / showLimit);
            }
            
			currentCategory = category;
        }, function(response){
            alert("Error loading page:"+response.statusText);
        });
    };
	
    //change page of the books
    $scope.page = function(page){
		if (page == 0)
        	$scope.current_page = 1;
		else{
			if (page > $scope.maxpage)   
				$scope.current_page = $scope.maxpage;
			else{
					$scope.current_page = page;
        			$http.get('/loadpage?' + 'category='+currentCategory+'&page=' + $scope.current_page).then(function(response){
            			$scope.booklist = response.data.data;
        			},function(response){
            			alert("Error retrieving page:"+response.statusText);
        			});
				}
		}
    }
	
    //show the detail info of book
    $scope.showDetail = function(book){
        //display page change
        $scope.mainPage = false;
        $scope.detailPage =true;
        $scope.detail_book = book;
		$scope.selectedNum = 1;
		
        $http.get('/loadbook/' + book._id).then(function(response){
            $scope.detail_book.publisher = response.data.publisher;
            $scope.detail_book.date = response.data.date;
            $scope.detail_book.description = response.data.description;
                
        }, function(response){
            alert("Error loading book info:"+response.statusText);
        });        
    }

    //go back to previous page
    $scope.previousPage = function(){
        $scope.detailPage = false;
        $scope.mainPage = true;
        
		if($scope.add_cart_success){
            $scope.add_cart_success = !$scope.add_cart_success;
        }
    }
	
	//display the sign-in window
    $scope.signinWindow = function(){
        if($scope.mainPage == true){
            currentView = "mainPage";
            $scope.mainPage = false;
        }else if($scope.detailPage == true){
            currentView = "detailPage";
            $scope.detailPage = false;
        }
		
        $scope.loginPage = true;
        $scope.cartPage = false;
        $scope.sign_in = false;

    }
	
	//handle sign-in 
    $scope.signin = function(){
        var username = $scope.username;
        var password = $scope.password;
        if(username===undefined||password===undefined){
            alert("You must enter username and password");
            return;
        }
        //send sign-in request
        $http.post('/signin',{'username':username,'password':password}).then(function(response){
            //if login fails
            if(response.data==="Login failure!"){
                $scope.login_fail = true;
                
            }else{ // login success
                $scope.login_fail = false;
                $scope.user.name = username;
                $scope.user.totalnum = response.data.totalnum;
                //change the plural of "item"
                if($scope.user.totalnum>1)
					$scope.item="items";
				else $scope.item="item";
                //display page change
                $scope.loginPage = false;
                $scope.sign_out = true; 
				//go back to the previous page
                if(mark_addtocart == false){
					if (currentView == "mainPage"){	                    
	                    $scope.mainPage = true;                 
					} else if (currentView == "detailPage"){                    
                    	$scope.detailPage = true;                    	                  
					}
                }else{
                    $scope.addtoCart();
                    mark_addtocart = false;                                                      
                }
            }
        })
    }

    //display the sign-out window
    $scope.signoutWindow = function(){
        if($scope.mainPage == true){
            currentView = "mainPage";
            $scope.mainPage = false;
        }else if($scope.detailPage == true){
            currentView = "detailPage";
            $scope.detailPage = false;
        }else if($scope.cartPage == true){
            currentView = "cartPage";
            $scope.cartPage = false;
        }else if($scope.paySuccess == true){
            currentView = "paySuccess";
            $scope.paySuccess = false;
        }
        $scope.check_signout = true;
    }
	
	//if sign-out is canceled, go bact to the previous page
    $scope.cancel_signout = function(){
        $scope.check_signout = false;
        if(currentView == "mainPage"){
            $scope.mainPage = true;
        }else if(currentView == "detailPage"){
            $scope.detailPage = true;
        }else if(currentView == "cartPage"){
            $scope.cartPage = true;
        }else if(currentView == "paySuccess"){
            $scope.paySuccess = true;
        }
    }

    //handle sign-out
    $scope.confirm_signout = function(){        
        $http.get('/signout').then(function(response){
            $scope.user = {'name':'','password':'','totalnum':'','totalprice':''};
            $scope.sign_out = false;
            $scope.sign_in = true;
            $scope.cart = null;
			
	        $scope.check_signout = false;
		       
	        if(currentView == "mainPage"){
	            $scope.mainPage = true;
	        }else if(currentView == "detailPage"){
	            $scope.detailPage = true;
				
	            if($scope.add_cart_success){
	                $scope.add_cart_success = !$scope.add_cart_success;
	            }         
				                    
	        }else if(currentView == "cartPage"){
	            $scope.mainPage = true;
				$scope.getbooks('nil');
	        }else if(currentView == "paySuccess"){
	            $scope.mainPage = true;
				$scope.getbooks('nil');
	        }
			     
        },function(response){
            alert('Sign out error:'+response.statusText);
        })		
        
    }    

    //add book to cart 
    $scope.addtoCart_request = function(){
        //if not signed in, display sign-in window
        if($scope.user.name == ""){
            $scope.signinWindow();
            mark_addtocart = true; 
        } else $scope.addtoCart();//if signed in, call addtoCart() 
    }

    //send addtocart request
    $scope.addtoCart = function(){
        var bookid = $scope.detail_book._id;
        var quantity = parseInt($scope.selectedNum);
        var data = {"bookid":bookid,"quantity":quantity};
        
		$http.put('/addtocart',data).then(function(response){
            if(response.data.totalnum == null){
                alert(response);
            }else{
                $scope.user.totalnum = response.data.totalnum;
                if($scope.user.totalnum>1)
					$scope.item="items";
				else $scope.item="item";
                
				$scope.user.totalprice = response.data.totalprice;
				
                $scope.detailPage = true;
                $scope.add_cart_success = true;
            }
        })
    }

    //load cart 
    $scope.loadCart = function(){
		$http.get('/loadcart').then(function(response){
            if(response.data == "load_error"){
                alert(response.data);
            }else{
				$scope.cart = response.data.cart;			
                //display page change
				$scope.detailPage = false;
                $scope.mainPage = false;
                $scope.cartPage = true;
                $scope.paySuccess = false;
                $scope.add_cart_success = false;
				$scope.check_signout = false;
				$scope.user.totalprice = 0;
                //calculate the total price
                for (i=0; i<$scope.cart.length; i++)
                    $scope.user.totalprice += $scope.cart[i].quantity*$scope.cart[i].price;
                //if no item in the cart, show no_item page
                if($scope.cart.length == 0){
                    $scope.no_item = true;
                }else{
                    $scope.no_item = false;
                }
            }
        })
    }

    //update cart 
    $scope.updateCart = function(id){
        //get the index of book being updated
        var index = $scope.cart.map(function(objectItem){return objectItem._id}).indexOf(id);
        //if the quantity of this book is 0 after updated
		if($scope.cart[index].quantity == 0){
			//delete book from cart
	        $http.delete('/deletefromcart/'+id).then(function(response){
	            if(response.data.totalnum != undefined){
		            $scope.user.totalnum = response.data.totalnum;  
	                if($scope.user.totalnum>1)
						$scope.item="items";
					else $scope.item="item";
					         
		            $scope.user.totalprice += (-1) * $scope.cart[index].price;
	                $scope.cart.splice(index,1);
                    //if there is no book in the cart after deletion, show no_item page
                    if($scope.cart.length == 0){
                        $scope.no_item = true;
                    }					
	            }else alert(response);
	        });
                     
        }else{
			//update book quantity in the cart
            var data = {"quantity":$scope.cart[index].quantity, "bookid":id};
	        $http.put('/updatecart',data).then(function(response){
	            if(response.data.totalnum != undefined){
	                $scope.user.totalnum = response.data.totalnum;  
	                if($scope.user.totalnum>1)
						$scope.item="items";
					else $scope.item="item";
					
					$scope.user.totalprice = 0;
					for (i=0; i<$scope.cart.length; i++)
						$scope.user.totalprice += $scope.cart[i].quantity*$scope.cart[i].price;
					
	            }else{
	                alert(response);
	            }
	        })
		}
    }

    //handle checkout 
    $scope.checkout = function(){
        if($scope.cart.length > 0 ){
            $http.get('/checkout').then(function(response){
                if(response.data === ""){
                    $scope.user_totalnum = $scope.user.totalnum;
                    $scope.user_totalprice = $scope.user.totalprice;
					
                    $scope.user.totalnum = 0;
                    $scope.user.totalprice = 0;
                    $scope.cartPage = false;
                    $scope.paySuccess = true;
					$scope.cart = null;
                }else alert(response);
            });
        }
    }
    //display page change
    $scope.continueBrowsing = function(){
        $scope.paySuccess = false;
        $scope.cartPage = false;
		$scope.detailPage = false;
        $scope.mainPage = true;
        $scope.add_cart_success = false;
        $scope.getbooks('nil');
    }

});

