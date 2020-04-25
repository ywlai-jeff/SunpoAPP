import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import TableList from './Table';
import Menu from './Menu';
import Bills from './Bills';
import Home from './Home';
import Forecast from './Forecast';
// import sale from './sale';
// import axios from 'axios';
// import { withRouter } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import { Redirect } from 'react-router-dom'
// import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      userId: '',
      username: '',
      password: '',
      login_fail: 'WELCOME!',
      user_type: '',
      active_function: <Home/>,
      position: '',
      transinfo: [],
        tableinfo: [{'tableNumber': '1','seatTaken': 0, 'maxCap': 4, 'isFull': false, 'tableColor': '', 'transaction':[]}, 
      {'tableNumber': '2','seatTaken': 0, 'maxCap': 4, 'isFull': false, 'tableColor': '', 'transaction': []},
      {'tableNumber': '3','seatTaken': 0, 'maxCap': 4, 'isFull': false, 'tableColor': '', 'transaction': []}, 
      {'tableNumber': '4','seatTaken': 0, 'maxCap': 6, 'isFull': false, 'tableColor': '', 'transaction': []}, 
      {'tableNumber': '5','seatTaken': 0, 'maxCap': 6, 'isFull': false, 'tableColor': '', 'transaction': []},
      {'tableNumber': '6','seatTaken': 0, 'maxCap': 6, 'isFull': false, 'tableColor': '', 'transaction': []}, 
      {'tableNumber': '7','seatTaken': 0, 'maxCap': 4, 'isFull': false, 'tableColor': '', 'transaction': []}, 
      {'tableNumber': '8','seatTaken': 0, 'maxCap': 4, 'isFull': false, 'tableColor': '', 'transaction': []},
      {'tableNumber': '9','seatTaken': 0, 'maxCap': 4, 'isFull': false, 'tableColor': '', 'transaction': []}, 
      {'tableNumber': '10','seatTaken': 0, 'maxCap': 4, 'isFull': false, 'tableColor': '', 'transaction':[]},
      {'tableNumber': '11','seatTaken': 0, 'maxCap': 10, 'isFull': false, 'tableColor': '', 'transaction':[]}],
      chosen_tran: [],
      // users: 'hi',
      checkDate: false,
      yesterday_sales: 0,
      yesterday_itemKg: [],
    };
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.LoginClick = this.LoginClick.bind(this);
    this.LogoutClick = this.LogoutClick.bind(this);
    this.HomeClick = this.HomeClick.bind(this);
    this.OrderClick = this.OrderClick.bind(this);
    this.OrderTableClick = this.OrderTableClick.bind(this);
    this.AddNewOrder = this.AddNewOrder.bind(this);
    this.EditCurrOrder = this.EditCurrOrder.bind(this);
    this.PaybillsClick = this.PaybillsClick.bind(this);
    this.ForecastClick = this.ForecastClick.bind(this);
    this.BackTableClick = this.BackTableClick.bind(this);
    this.PlaceOrderClick = this.PlaceOrderClick.bind(this);
    this.PayClick = this.PayClick.bind(this);
  }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let title, current_page, login_page, menu_page, tablelist, nav, bills, sales;
    // let routes = '';

    if (isLoggedIn) {
      title = '';
      nav = <div className="nav_bar">
              <h4 className="fas fa-home"> SUN PO</h4>
              <ul>
    <li onClick={this.HomeClick}><div className="fas fa-user">歡迎 {this.state.username}!</div></li>
                {/* <li tabindex="1"></li> */}
                <li onClick={this.OrderClick}><a className="function_btn fas fa-shopping-bag"> 點餐</a></li>
                {/* <Link to="/order"><li onClick={this.OrderClick}><a class="function_btn fas fa-shopping-bag">點餐</a></li></Link> */}
                <li onClick={this.PaybillsClick}><a className="function_btn fas fa-money-bill-wave"> 查閱/結賬</a></li>
                <li onClick={this.ForecastClick}><a className="function_btn fas fa-atom"> 銷量預測</a></li>
                <li onClick={this.LogoutClick}><a className="function_btn fas fa-power-off"> 登出</a></li>
              </ul>
            </div>
      menu_page = <Menu/>
      bills = <Bills/>
        tablelist = <div>{this.state.active_function}</div>
    }
    else{
      title = <div id="logo_title">SUN PO</div>
      login_page = <Login
      username={this.state.username}
      password={this.state.password}
      // position={this.state.position}
      onUsernameChange={this.usernameChange}
      onPasswordChange={this.passwordChange}
      LoginClick={this.LoginClick}
      login_fail={this.state.login_fail}
      />
      sales = <div>{this.state.users}</div>

    }

    return (
      
        /* <Link to="/login">login</Link>
       <Link to="/logout">logout</Link> 
      <Link to="/order">order</Link>
      <Link to="/paybills">paybills</Link>
      <Link to="/forecast">forecast</Link>
    <Link exact to="/">Home</Link>   */
     <div className="App">
        {title}
        {nav}
        {login_page}
        {/* {routes} */}
        {tablelist}
        {/* {menu_page} */}
        {/* {bills} */}
        {sales}
      </div>
        
    );
  }
  // requireAuth(nextState, replace)
  // {
  // if(!this.state.isLoggedIn) // pseudocode - SYNCHRONOUS function (cannot be async without extra callback parameter to this function)
  // replace('/login');
  // }

  usernameChange(name) {
    this.setState({
      username: name
    })
  }

  passwordChange(pass) {
    this.setState({
      password: pass
    })
  }

  componentDidMount(){
    if(localStorage.loggin === 'true'){
      this.setState({
        isLoggedIn: true,
        username: localStorage.usrname,
        position: localStorage.position,
        userId: localStorage.userId,
      });
      this.pageRefresh(localStorage.usrname, localStorage.password);
    }

    // alert(new Date("2020-04-19").toLocaleString());
    var months = 0;
    var datess;
    var day;
    if (new Date().getDate() == 1){
      if((new Date().getMonth()) < 10)
        months = "0" + (new Date().getMonth());
      else
        months = "" + (new Date().getMonth());
      if(new Date().getMonth() == 1 || new Date().getMonth() == 3 || new Date().getMonth() == 5 || new Date().getMonth() == 7 || 
      new Date().getMonth() == 8 || new Date().getMonth() == 10 || new Date().getMonth() == 12) day = 31;
      else if (new Date().getMonth() == 2) if(new Date().getFullYear%4 == 0) day = 29; else day = 28;
      else if (new Date().getMonth() == 4 || new Date().getMonth() == 6 || new Date().getMonth() == 9 || new Date().getMonth() == 11) day = 30;
      datess = day.toString() + months.toString() + new Date().getFullYear().toString();
    } else{
      if((new Date().getMonth()+1) < 10)
        months = "0" + (new Date().getMonth()+1);
      else
        months = "" + (new Date().getMonth()+1);
      datess = (new Date().getDate()-1).toString() + months.toString() + new Date().getFullYear().toString();
      // datess = "22" + months.toString() + new Date().getFullYear().toString();
    }
    
    // get yesterday's sale and yesterday's item quantity
    // $.ajax({
    //   url:"http://localhost:3001/getyesterday/"+ datess,
    //   method:"GET",
    //   xhrFields: {
    //     withCredentials: true
    //   },
    //   success: function(datas){
    //     this.setState({
    //       yesterday_sales: datas.dailysales,
    //       yesterday_itemKg: this.state.yesterday_itemKg.concat({"ngaolam": datas.itemkg.ngaolam, "suigao": datas.itemkg.suigao, "wuntun": datas.itemkg.wuntun, 
    //       "ngoyun": datas.itemkg.ngoyun, "yupeigao": datas.itemkg.yupeigao, "yudan": datas.itemkg.yudan, "yupin": datas.itemkg.yupin, 
    //       "yupei": datas.itemkg.yupei, "yugok": datas.itemkg.yugok, "yujak": datas.itemkg.yujak, "yuyun": datas.itemkg.yuyun, "yukyun": datas.itemkg.yukyun,
    //       "magun": datas.itemkg.magun, "jusao": datas.itemkg.jusao, "jajueng": datas.itemkg.jajueng, "ngaogenyun": datas.itemkg.ngaogenyun, 
    //       "ngaotou": datas.itemkg.ngaotou, "ngauzharp": datas.itemkg.ngauzharp,}),
    //     });
    //     // alert(datas.itemkg.yudan + ' ' + datas.itemkg.ngaolam + ' ' + datas.itemkg.ngauzharp);
    //     // alert(this.state.yesterday_itemKg[0].yudan + ' ' + this.state.yesterday_itemKg[0].ngaolam + ' ' + this.state.yesterday_itemKg[0].ngauzharp);
    //   }.bind(this),
    //   error: function (xhr, ajaxOptions, thrownError) {
    //     alert(xhr.status);
    //     alert(thrownError);
    //   }
    // });
    // get daily item quantity
    // $.ajax({
    //   url:"http://localhost:3001/getitemquantity",
    //   method:"GET",
    //   xhrFields: {
    //     withCredentials: true
    //   },
    //   success: function(datas){
    //     // alert(datas.latest_date);

    //     if( (new Date(datas.latest_date).getDate() < (new Date().getDate()-1)) || new Date(datas.latest_date).getMonth() < (new Date().getMonth())){
    //       //insert item quantity
    //       var month = 0;
    //       var date;
    //       var day;
    //       if (new Date().getDate() == 1){
    //         if((new Date().getMonth()) < 10)
    //           month = "0" + (new Date().getMonth());
    //         else
    //           month = "" + (new Date().getMonth());
    //         if(new Date().getMonth() == 1 || new Date().getMonth() == 3 || new Date().getMonth() == 5 || new Date().getMonth() == 7 || 
    //         new Date().getMonth() == 8 || new Date().getMonth() == 10 || new Date().getMonth() == 12) day = 31;
    //         else if (new Date().getMonth() == 2) if(new Date().getFullYear%4 == 0) day = 29; else day = 28;
    //         else if (new Date().getMonth() == 4 || new Date().getMonth() == 6 || new Date().getMonth() == 9 || new Date().getMonth() == 11) day = 30;
    //         date = new Date().getFullYear() + "-" + month + "-" + day;
    //       } else{
    //         if((new Date().getMonth()+1) < 10)
    //           month = "0" + (new Date().getMonth()+1);
    //         else
    //           month = "" + (new Date().getMonth()+1);
    //         date = new Date().getFullYear() + "-" + month + "-" + (new Date().getDate()-1);
    //         // date = new Date().getFullYear() + "-" + month + "-" + 22;
    //       }
    //       var url = "http://localhost:3001/insertitemquantity";
    //       var itemkg = this.state.yesterday_itemKg;
    //       var userinfo;
    //       itemkg.map((it, i) => {
    //       userinfo = {'dates': date, "ngaolam": it.ngaolam, "suigao": it.suigao, "wuntun": it.wuntun, 
    //       "ngoyun": it.ngoyun, "yupeigao": it.yupeigao, "yudan": it.yudan, "yupin": it.yupin, 
    //       "yupei": it.yupei, "yugok": it.yugok, "yujak": it.yujak, "yuyun": it.yuyun, "yukyun": it.yukyun,
    //       "magun": it.magun, "jusao": it.jusao, "jajueng": it.jajueng, "ngaogenyun": it.ngaogenyun, "ngaotou": it.ngaotou, "ngauzharp": it.ngauzharp} 
    //     });
    //       // alert(itemkg[0].yudan);
    //       // alert(this.state.yesterday_itemKg[0].yudan);
    //       $.ajax({
    //         url: url,
    //         method: "POST",
    //         data: userinfo,
    //         xhrFields: {
    //           withCredentials: true
    //         },
    //         success:function(data){
    //           // alert(data.status + " inserting item quantity");
    //           // alert(data.item);
    //         }.bind(this),
    //         error:function (xhr, ajaxOptions, thrownError) {
    //           alert(xhr.status);
    //           alert(thrownError);
    //         }
    //       });
    //     }
    //   }.bind(this),
    //   error: function (xhr, ajaxOptions, thrownError) {
    //     alert(xhr.status);
    //     alert(thrownError);
    //   }
    // });
    
    //get dailysales
    // $.ajax({
    //   url:"http://localhost:3001/getdailysales",
    //   method:"GET",
    //   xhrFields: {
    //     withCredentials: true
    //   },
    //   success: function(datas){
    //       // alert(datas.dataGet[1].id + " " +datas.dataGet[1].Date + " " +datas.dataGet[1].Sales);
    //       // alert(new Date(datas.latest_date).toLocaleString() + " " + new Date().toLocaleString());
    //       // alert(new Date(datas.latest_date).getFullYear() + " " + (new Date(datas.latest_date).getMonth()+1) + " " + new Date(datas.latest_date).getDate());
    //       if( new Date(datas.latest_date).getDate() < (new Date().getDate()-1) || new Date(datas.latest_date).getMonth() < (new Date().getMonth())){
    //         //insert sale
    //         var month = 0;
    //         var date;
    //         var day;
    //         if (new Date().getDate() == 1){
    //           if((new Date().getMonth()) < 10)
    //             month = "0" + (new Date().getMonth());
    //           else
    //             month = "" + (new Date().getMonth());
    //           if(new Date().getMonth() == 1 || new Date().getMonth() == 3 || new Date().getMonth() == 5 || new Date().getMonth() == 7 || 
    //           new Date().getMonth() == 8 || new Date().getMonth() == 10 || new Date().getMonth() == 12) day = 31;
    //           else if (new Date().getMonth() == 2) if(new Date().getFullYear%4 == 0) day = 29; else day = 28;
    //           else if (new Date().getMonth() == 4 || new Date().getMonth() == 6 || new Date().getMonth() == 9 || new Date().getMonth() == 11) day = 30;
    //           date = new Date().getFullYear() + "-" + month + "-" + day;
    //         } else{
    //           if((new Date().getMonth()+1) < 10)
    //             month = "0" + (new Date().getMonth()+1);
    //           else
    //             month = "" + (new Date().getMonth()+1);
    //           date = new Date().getFullYear() + "-" + month + "-" + (new Date().getDate()-1);
    //           // date = new Date().getFullYear() + "-" + month + "-" + 22;
    //         }
    //         var url = "http://localhost:3001/insertsale";
    //         var userinfo = {'dates': date, 'sales': this.state.yesterday_sales};
    //         $.ajax({
    //           url: url,
    //           method: "POST",
    //           data: userinfo,
    //           xhrFields: {
    //             withCredentials: true
    //           },
    //           success:function(data){
    //             // alert(data.status + " inserting");
    //           }.bind(this),
    //           error:function (xhr, ajaxOptions, thrownError) {
    //             alert(xhr.status);
    //             alert(thrownError);
    //           }
    //         });
    //       } else if (new Date(datas.latest_date).getDate() == new Date().getDate()){
    //         // update sales
    //         // var month = 0;
    //         // if((new Date().getMonth()+1) < 10)
    //         //   month = "0" + (new Date().getMonth()+1);
    //         // var date = new Date().getFullYear() + "-" + month + "-" + new Date().getDate();
    //         // var url = "http://localhost:3001/updatesale";
    //         // var userinfo = {'dates': date, 'sales': "25000"};
    //         // $.ajax({
    //         //   url: url,
    //         //   method: "PUT",
    //         //   data: userinfo,
    //         //   xhrFields: {
    //         //     withCredentials: true
    //         //   },
    //         //   success:function(data){
    //         //     alert(data.status +" updating");
    //         //   }.bind(this),
    //         //   error:function (xhr, ajaxOptions, thrownError) {
    //         //     alert(xhr.status);
    //         //     alert(thrownError);
    //         //   }
    //         // });
    //       }
    //   }.bind(this),
    //   error: function (xhr, ajaxOptions, thrownError) {
    //     alert(xhr.status);
    //     alert(thrownError);
    //   }
    // });

     //get transaction
     $.ajax({
      url:"http://localhost:3001/gettransaction",
      method:"GET",
      xhrFields: {
        withCredentials: true
      },
      success: function(datas){
          if (datas.message === "Login Success!"){
              alert("success");
          }
          // alert(datas.tran[0].products[0].name+" "+datas.tran[0].products[0].price+" "+datas.tran[0].products[0].originalPrice+" "+
          // datas.tran[0].products[0].quantity+" "+datas.tran[0].products[0].custom[0]+" "+datas.tran[0].totalPrice+' '+
          // datas.tran[0].tranId+" "+datas.tran[0].tableNumber+" "+datas.tran[0].transTime+" "+datas.tran[0].orderStatus+" "+datas.tran[0].seatTaken);
          for (var i in datas.tran){
              if(datas.tran[i].orderStatus == "proceeding"){
              this.setState({
                  transinfo: this.state.transinfo.concat({"tranId": datas.tran[i].tranId, "userId": datas.tran[i].userId, "products": datas.tran[i].products, 
                  "totalPrice": datas.tran[i].totalPrice, "tableNumber": datas.tran[i].tableNumber, 
                  "orderStatus": datas.tran[i].orderStatus, "transTime": datas.tran[i].transTime, "seatTaken": datas.tran[i].seatTaken,}),
                });
              }
          }
      }.bind(this),
      error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
      }
    });
  
  setTimeout(function() { 
      this.state.tableinfo.map((table, index) => {
          this.state.transinfo.map((tran, i) => {
              if(tran.tableNumber === table.tableNumber){
                  let items = [...this.state.tableinfo];
                  let item = {...items[index]};
                  item.seatTaken = item.seatTaken + tran.seatTaken;
                  item.transaction = item.transaction.concat(tran.tranId);
                  items[index] = item;
                  this.setState({tableinfo: items});
              }
          })
      })

      this.state.tableinfo.map((table, index) => {

          if(table.maxCap <= table.seatTaken){
              let items = [...this.state.tableinfo];
              let item = {...items[index]};
              item.isFull = true;
              items[index] = item;
              this.setState({tableinfo: items});
          }
      })
      
      this.state.tableinfo.map((table, index) => {
          let items = [...this.state.tableinfo];
          let item = {...items[index]};
          if(table.isFull === true){
              item.tableColor = '#d43b3b';
          }
          else if(table.isFull !== true && table.seatTaken > 0){
              item.tableColor = '#ebae3b';
          }
          else{
              item.tableColor = "#88D969";
          }
          if(table.tableNumber === "11"){
            item.tableColor = 'lightgrey';
          }
          items[index] = item;
          this.setState({tableinfo: items});

          if(table.transaction && table.transaction.length > 0){
              // alert("Table "+table.tableNumber + " has transaction");
              // alert(table.transaction[0]);
          }
      }
          
      )
  }.bind(this), 100)
  }

  pageRefresh(usrname, password){
    var url = "http://localhost:3001/login";
    var userinfo = {'username': usrname, 'password': password};
    $.ajax({
      url: url,
      method: "POST",
      data: userinfo,
      xhrFields: {
        withCredentials: true
      },
      success:function(data){
        if (data.message === "Login Success!"){
          this.setState({
            
          })
        } else{
          this.setState({
            userId: '',
            username: '',
            password: '',
            isLoggedIn: false,
            login_fail: "LOGIN FAILURE"
          })
        }
      }.bind(this),
      error:function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
      }
    });
  }

  LoginClick(e) {
    if (this.state.username === '' || this.state.password === '') {
      // alert('Please fill in all fields');
      this.setState({
        login_fail: 'PLEASE FILL IN ALL FIELDS!',
      });
    }
    else{
      localStorage.setItem('usrname', this.state.username);
      localStorage.setItem('password', this.state.password);

      var loginInfo = {
        "username" : this.state.username,
        "password" : this.state.password,
      }

      $.ajax({
        url: "http://localhost:3001/login",
        type: 'POST',
        data: loginInfo,
        xhrFields: { withCredentials: true },
        // dataType: 'JSON',
        success: function(data) {
          if (data.message === "Login Success!"){
            localStorage.setItem('loggin','true');
            localStorage.setItem('position',data.position);
            localStorage.setItem('userId',data.id);
            // alert(data.id);

            this.setState({
              isLoggedIn: true,
              login_fail: 'WELCOME!',
              position: data.position,
              userId: localStorage.userId,
            });
          } else{
            this.setState({
              username: '',
              password: '',
              isLoggedIn: false,
              login_fail: "LOGIN FAILURE",
              userId: '',
            });
          }
        }.bind(this),
          error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
          }
      });

  }

  e.preventDefault(e);
  }

  LogoutClick(){
    $.ajax({
      url:"http://localhost:3001/logout",
      method:"GET",
      xhrFields: {
        withCredentials: true
      },
      success: function(data){
        // clear stored user state after logout
        localStorage.setItem('loggin','false');
        localStorage.setItem('usrname','');
        localStorage.setItem('password','');
        // clear timer
        // clearInterval(this.timerID);
        this.setState({
          username: '',
          password: '',
          isLoggedIn: false,
          login_fail: "SUCCESSFULLY LOGOUT!",
        });
      }.bind(this),
      error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
      }
    });
  }

  HomeClick(e){
    this.setState({
        active_function: <Home/>
      })
      // window.print();
  }

  OrderClick(e){
    this.setState({
        // payBills: false,
        active_function: <TableList 
                                    AddNewOrder = {this.AddNewOrder}
                                    OrderTableClick ={this.OrderTableClick}
                                    EditCurrOrder ={this.EditCurrOrder}
                                    payBills = {'點餐'}
                                    tableinfo={this.state.tableinfo}
                                    transinfo={this.state.transinfo}
                                    // edit_or_delete={this.edit_or_delete}
                          />,
      })
  }

  AddNewOrder(e, data){
    let tableNumber = '';
    if(data[2] == '0')
      tableNumber = '10';
    else if(data[2] == '1')
      tableNumber = '11';
    else
      tableNumber = data[1];
    if(data[0] == 1 && this.state.tableinfo[parseInt(tableNumber)-1].isFull == false){
      this.setState({
        active_function: <Menu BackTableClick = {this.BackTableClick}
                              PlaceOrderClick = {this.PlaceOrderClick}
                              tableNumber = {tableNumber}
                              userId={this.state.userId}
                              chosen_tran={''}
        />,
      })
    }
    else if (data[0] == 2){
      // this.setState({
      //   active_function: <Bills BackTableClick = {this.BackTableClick}
      //                           PayClick = {this.PayClick}
      //                           chosen_tran={this.state.chosen_tran}
      //                     />,
      // })
      // alert(data[0]);
    }
    
  }

  OrderTableClick(e, data){
    // alert(data[0]+data[1]+data[2]);
    var chosen_tran = [];
    var data_tranId = data.slice(1);
    this.state.transinfo.map(tran => {
      if(tran.tranId === data_tranId){
        chosen_tran = chosen_tran.concat(tran);
      }
    })

    if (data[0] == 2){
      this.setState({
        active_function: <Bills BackTableClick = {this.BackTableClick}
                                PayClick = {this.PayClick}
                                chosen_tran={chosen_tran}
                          />,
      })
    }
  }

  EditCurrOrder(e, data){
    // alert(data);
    var chosen_tran = [];
    var data_tranId = data;
    this.state.transinfo.map(tran => {
      if(tran.tranId === data_tranId){
        chosen_tran = chosen_tran.concat(tran);
      }
    })

     this.setState({
          active_function: <Menu BackTableClick = {this.BackTableClick}
                                PlaceOrderClick = {this.PlaceOrderClick}
                                // tableNumber = {tbnum}
                                userId={this.state.userId}
                                chosen_tran={chosen_tran}
                                data_tranId={data_tranId}
                                // num_of_people={}
          />,
    })
    // this.setState({
    //   active_function: <Home/>
    // })
  }

  DeleteCurrOrder(e, data){
    // delete current order
  }

  PaybillsClick(e){
    this.setState({
        // payBills: true,
        active_function: <TableList 
                                    AddNewOrder = {this.AddNewOrder}
                                    OrderTableClick ={this.OrderTableClick}
                                    EditCurrOrder ={this.EditCurrOrder}
                                    payBills = {'結賬'}
                                    tableinfo={this.state.tableinfo}
                                    transinfo={this.state.transinfo}
                                    // edit_or_delete={this.edit_or_delete}
        />,
        // active_function: <Menu/>,
      })
  }

  ForecastClick(e){
    if(this.state.position == "manager"){
      this.setState({
        active_function: <Forecast/>,
      })
    }
    else{
      alert("Permitted Action!");
      // this.props.history.push('/home/');
      // return(
    //   <Redirect to={{
    //     pathname: '/home',
    //     // state: { id: '123' }
    // }} />
    //   <Route>
    // return <Redirect to='/home' />
      // <Redirect path="/home" />
    // </Route>
    
    
      // )
    
  }
  }

  BackTableClick(e, data){
    // alert(data[0]);
    if(data[0] == 1)
      this.setState({
        active_function: <TableList 
        AddNewOrder = {this.AddNewOrder}
        OrderTableClick ={this.OrderTableClick}
        EditCurrOrder ={this.EditCurrOrder}
        payBills = {'結賬'}
        tableinfo={this.state.tableinfo}
        transinfo={this.state.transinfo}
        // edit_or_delete={this.edit_or_delete}
        />,
      })
    else
    this.setState({
      active_function: <TableList 
      AddNewOrder = {this.AddNewOrder}
      OrderTableClick ={this.OrderTableClick}
      EditCurrOrder ={this.EditCurrOrder}
      payBills = {'結賬'}
      tableinfo={this.state.tableinfo}
      transinfo={this.state.transinfo}
      // edit_or_delete={this.edit_or_delete}
      />,
    })
  }

  PlaceOrderClick(e, data){
      this.setState({
        active_function: <Home/>,
      })
  }

  PayClick(e, datass){
    var confirmation = window.confirm('你是否要結賬？');
      if(confirmation === true){
        // alert(data);
        this.setState({
          active_function: <Home/>,
        })

        // update transation orderStatus
        var url = "http://localhost:3001/orderfinished";
        var datas = {
          "tranId": datass,
        };
        $.ajax({
          url: url,
          method: "PUT",
          data: datas,
          xhrFields: {
            withCredentials: true
          },
          success:function(data){
            alert("成功結賬，交易編號："+datass);
          }.bind(this),
          error:function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
          }
        });
      }
    }
  }

export default App;
