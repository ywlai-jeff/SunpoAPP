import React from 'react';
import logo from './logo.svg';
import './App.css';
import TableList from './Table';
import Menu from './Menu';
import Bills from './Bills';
 

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
      active_function: '',
      position: '',
      tableinfo: [{'tableNumber': '1','seatTaken': 0, 'maxCap': 4, 'isFull': false, 'tableColor': 'palegreen', 'transaction':[{}]}, 
      {'tableNumber': '2','seatTaken': 0, 'maxCap': 4, 'isFull': false, 'tableColor': 'palegreen'},
      {'tableNumber': '3','seatTaken': 0, 'maxCap': 4, 'isFull': false, 'tableColor': 'palegreen'}, 
      {'tableNumber': '4','seatTaken': 0, 'maxCap': 6, 'isFull': false, 'tableColor': 'palegreen'}, 
      {'tableNumber': '5','seatTaken': 0, 'maxCap': 6, 'isFull': false,  'tableColor': 'palegreen'},
      {'tableNumber': '6','seatTaken': 0, 'maxCap': 6, 'isFull': false, 'tableColor': 'palegreen'}, 
      {'tableNumber': '7','seatTaken': 0, 'maxCap': 4, 'isFull': false,  'tableColor': 'palegreen'}, 
      {'tableNumber': '8','seatTaken': 0, 'maxCap': 4, 'isFull': false,  'tableColor': 'palegreen'},
      {'tableNumber': '9','seatTaken': 0, 'maxCap': 4, 'isFull': false,  'tableColor': 'palegreen'}, 
      {'tableNumber': '10','seatTaken': 0, 'maxCap': 4, 'isFull': false,  'tableColor': 'palegreen'}],
      transactionList: [],
    };
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.LoginClick = this.LoginClick.bind(this);
    this.LogoutClick = this.LogoutClick.bind(this);
    this.OrderClick = this.OrderClick.bind(this);
    this.TableClick = this.TableClick.bind(this);
    this.PaybillsClick = this.PaybillsClick.bind(this);
    this.ForecastClick = this.ForecastClick.bind(this);
    this.BackTableClick = this.BackTableClick.bind(this);
    this.PlaceOrderClick = this.PlaceOrderClick.bind(this);
    this.PayClick = this.PayClick.bind(this);
  }



  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let title, current_page, login_page, menu_page, tablelist, nav, bills;

    if (isLoggedIn) {
      title = '';
      nav = <div class="nav_bar">
              <h3 class="fas fa-home"> SUN PO</h3>
              <ul>
                <li><div class="fas fa-user"> {this.state.username}</div></li>
                {/* <li tabindex="1"></li> */}
                <li onClick={this.OrderClick}><a class="function_btn fas fa-shopping-bag"> 點餐</a></li>
                <li onClick={this.PaybillsClick}><a class="function_btn fas fa-money-bill-wave"> 查閱/結賬</a></li>
                <li onClick={this.ForecastClick}><a class="function_btn fas fa-atom"> 銷量預測</a></li>
                <li onClick={this.LogoutClick}><a class="function_btn fas fa-power-off"> 登出</a></li>
              </ul>
            </div>
      menu_page = <Menu/>
      bills = <Bills/>
        // tablelist = <TableList
        // TableClick = {this.TableClick}
        //                             payBills = {false}
        //                             tableinfo={this.state.tableinfo}/>
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

    }

    return (
     <div className="App">
        {title}
        {nav}
        {login_page}
        {tablelist}
        {/* {menu_page} */}
        {/* {bills} */}
      </div>

    );
  }

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

  OrderClick(e){
    this.setState({
        // payBills: false,
        active_function: <TableList 
                                    // active_function={this.state.active_Function}
                                    TableClick = {this.TableClick}
                                    payBills = {false}
                                    tableinfo={this.state.tableinfo}
                          />,
      })
  }

  TableClick(e, data){
    let tableNumber = '';
    if(data[2] == '0')
      tableNumber = '10';
    else
      tableNumber = data[1];
    if(data[0] == 1){
      this.setState({
        active_function: <Menu BackTableClick = {this.BackTableClick}
                              PlaceOrderClick = {this.PlaceOrderClick}
                              // addedList={this.state.addedList}
                              tableNumber = {tableNumber}
        />,
      })
    }
    else if (data[0] == 2){
      this.setState({
        active_function: <Bills BackTableClick = {this.BackTableClick}
                                PayClick = {this.PayClick}
                          />,
      })
    }
    
  }

  PaybillsClick(e){
    this.setState({
        // payBills: true,
        active_function: <TableList 
                                    TableClick = {this.TableClick}
                                    payBills = {true}
                                    tableinfo={this.state.tableinfo}
        
        />,
        // active_function: <Menu/>,
      })
  }

  ForecastClick(e){
    if(this.state.position == "manager"){
      this.setState({
        active_function: '',
      })
    }
    else{
      alert("Permitted Action!");
    }
  }

  BackTableClick(e, data){
    // alert(data[0]);
    if(data[0] == 1)
      this.setState({
        active_function: <TableList 
                                    TableClick = {this.TableClick}
                                    payBills = {false}
                                    tableinfo={this.state.tableinfo}

        />,
      })
    else
    this.setState({
      active_function: <TableList 
                                  TableClick = {this.TableClick}
                                  payBills = {true}
                                  tableinfo={this.state.tableinfo}

      />,
    })
  }

  PlaceOrderClick(e, data){
    var confirmation = window.confirm('你確定要落單?');
    if(confirmation === true){
      this.setState({
        active_function: '',
      })
      // var a = e.target.id;
      // alert(a);
      // alert("place: " +data);
      data.map(item => {
        // alert(item.name + ": $"+item.price+" quantity: "+item.quantity+" totalPrice: "+item.totalPrice+
        // " tableNumber: "+item.tableNumber+" transTime: "+item.transTime+" custom: ")
        item.custom.map(items => {
          // alert(item.name + ": $"+item.price+" quantity: "+item.quantity+"custom: "+items)
        })
      })

      // send orderList to database
    
    }
  }

  PayClick(e){
    this.setState({
        active_function: '',
      })
  }

}

class Login extends React.Component {
  constructor(props) {
    super(props);

   this.usernameChange = this.usernameChange.bind(this);
   this.passwordChange = this.passwordChange.bind(this);
   this.LoginClick = this.LoginClick.bind(this);
 }

  usernameChange(e) {
    e.preventDefault(e);
    this.props.onUsernameChange(e.target.value);
  }

  passwordChange(e) {
    e.preventDefault(e);
    this.props.onPasswordChange(e.target.value);
  }

  LoginClick(e) {
    e.preventDefault(e);
    this.props.LoginClick(e);
  }

  render() {
      return (
        <div >
          <form class="login_form">
              <h3>Login</h3>

              <p id="error_message"> {this.props.login_fail} </p>

              <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" placeholder="Enter username" value={this.props.username}
                  onChange={this.usernameChange}/>
              </div>

              <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Enter password" value={this.props.password}
                  onChange={this.passwordChange}/>
              </div>

              <button type="button" className="btn btn-primary btn-block" onClick={this.LoginClick}>Submit</button>
            </form>
          </div>
      );
  }
}


export default App;
