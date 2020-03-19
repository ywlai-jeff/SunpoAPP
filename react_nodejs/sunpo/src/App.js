import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Content';
import Try from './Try';
import TableList from './Table';
import Menu from './Menu';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      username: '',
      password: '',
      login_fail: 'WELCOME!',
      user_type: '',
      active_function: '',
      position: '',
      tableinfo: [{'tableNumber': '1','seatTaken': false}, {'tableNumber': '2','seatTaken': false},
      {'tableNumber': '3','seatTaken': false}, {'tableNumber': '4','seatTaken': false}, {'tableNumber': '5','seatTaken': false},
      {'tableNumber': '6','seatTaken': false}, {'tableNumber': '7','seatTaken': false}, {'tableNumber': '8','seatTaken': false},
      {'tableNumber': '9','seatTaken': false}, {'tableNumber': '10','seatTaken': false}],
    };
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.LoginClick = this.LoginClick.bind(this);
    this.LogoutClick = this.LogoutClick.bind(this);
    this.OrderClick = this.OrderClick.bind(this);
    this.TableClick = this.TableClick.bind(this);
    this.PaybillsClick = this.PaybillsClick.bind(this);
    this.ForecastClick = this.ForecastClick.bind(this);
  }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let current_page, login_page, menu_page, tablelist, nav;

    if (isLoggedIn) {
      nav = <div class="nav_bar">
              {/* <Try /> */}
              <div>Hello, {this.state.username}!</div>
              <Content
              OrderClick = {this.OrderClick}
              PaybillsClick = {this.PaybillsClick}
              ForecastClick = {this.ForecastClick}
              />
              <button onClick={this.LogoutClick}>Log out</button>
            </div>
      // menu_page = <Menu/>
        tablelist = <div>{this.state.active_function}</div>
    }
    else{
      login_page = <Login
      username={this.state.username}
      password={this.state.password}
      // position={this.state.position}
      onUsernameChange={this.usernameChange}
      onPasswordChange={this.passwordChange}
      LoginClick={this.LoginClick}
      login_fail={this.state.login_fail}
      />;

    }

    return (
     <div className="App">
      <div id="logo_title">SUN PO</div>
        {nav}
        {login_page}
        {tablelist}
        {/* {menu_page} */}
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
      });
    }
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

            this.setState({
              isLoggedIn: true,
              login_fail: 'WELCOME!',
              position: data.position,
            });
          } else{
            this.setState({
              username: '',
              password: '',
              isLoggedIn: false,
              login_fail: "LOGIN FAILURE"
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
        active_function: <TableList active_function={this.state.active_Function}
                                    // tableinfo={this.state.tableinfo}
                                    TableClick = {this.TableClick}
                          />,
      })
  }

  TableClick(e, data){

    this.setState({
        active_function: <Menu/>,
      })
      // alert(data);
  }

  PaybillsClick(e){
    this.setState({
        active_function: <TableList/>,
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
