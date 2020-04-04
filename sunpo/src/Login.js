import React from 'react';

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

  export default Login;