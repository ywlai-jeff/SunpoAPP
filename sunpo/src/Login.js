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
          <div class="loginpage">
            <form className="login_form">
                <h3>SUN PO 員工登入</h3>
                {/* <h3>登入</h3> */}
  
                <p id="error_message"> {this.props.login_fail} </p>
  
                <div className="form-group">
                    <label>員工賬戶號碼</label>
                    <input type="text" className="form-control" placeholder="請輸入" value={this.props.username}
                    onChange={this.usernameChange}/>
                </div>
  
                <div className="form-group">
                    <label>員工密碼</label>
                    <input type="password" className="form-control" placeholder="請輸入" value={this.props.password}
                    onChange={this.passwordChange}/>
                </div>
  
                <button type="button" className="btn btn-primary btn-block" onClick={this.LoginClick}>提交</button>
              </form>
            </div>
        );
    }
  }

  export default Login;