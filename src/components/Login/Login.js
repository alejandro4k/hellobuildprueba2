import React, { Component } from "react";
import "./Login.css";
let formContent;
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      register: 0,
      userloged: false,
      
    };
  }

  componentDidMount() {

  }
  /*
  componentWillMount(){
      if(localStorage.getItem("user") != null && localStorage.getItem("password") != null){
          this.setState({
              userloged: true
          })
          this.props.userloged(1);
      }
  }
  */
  onBack(e){
      e.preventDefault();
      
      this.setState({
          register: 0
      })
      var name = document.getElementById("username");
      name.value = "";
      var psw = document.getElementById("password");
      psw.value = "";
  }
  logInStorage(e) {
    e.preventDefault();
    var name = document.getElementById("username");
    var psw = document.getElementById("password");
    var storedName = localStorage.getItem("user");
    var storedPass = localStorage.getItem("password");
    var formLogin = document.getElementById("formlogin");
    if(formLogin.checkValidity()){

        if (name.value == storedName && psw.value == storedPass) {
          
          this.setState({
            userloged: true
          });
          this.props.userloged(1);
        } else {
          alert("incorrect username or password");
        }
    }else{
        formLogin.reportValidity();
    }

  }

  saveDataLocalStorage(e) {
    e.preventDefault();
    var formLogin = document.getElementById("formlogin");
    if(formLogin.checkValidity()){

        var name = document.getElementById("username");
        var psw = document.getElementById("password");
        var repeatpassword = document.getElementById("repeatpassword");
        if(localStorage.getItem('user') == name.value){
            alert("user not available");

        }else{

            if(psw.value === repeatpassword.value){
        
                localStorage.setItem("user", name.value);
                localStorage.setItem("password", psw.value);
                this.props.userloged(1);
            }else{
                alert("the password does not match")
            }
        }
    }else{
        formLogin.reportValidity();
    }

  }
  showFormRegister(e){
    e.preventDefault();
    this.setState({
        register:1
    })
    
    var name = document.getElementById("username");
    name.value = "";
    var psw = document.getElementById("password");
    psw.value = "";

  }

  render() {
    formContent = <div>
         <img
                src="https://media.licdn.com/dms/image/C4E0BAQEilOKrebYwSA/company-logo_200_200/0?e=1585180800&v=beta&t=-hDsbFmedQet2SBBc1yram7JmmRCkuqNUYGkva709NU"
                alt="..."
                width="65"
                class="mr-3 rounded-circle img-thumbnail shadow-sm"
              />
        <h1>Please sign in</h1>
          <input
            type="text"
            className="form-control mrgInputLogin"
            id="username"
            placeholder="Username"
            required
          />
          <input
            type="password"
            className="form-control mrgInputLogin"
            id="password"
            placeholder="Password"
            required
          />
          <button
            id="btnSigIn"
            className="btn btn-lg btn-primary btn-block"
            required
            onClick={e => this.logInStorage(e)}
          >
            Sign in
          </button>

          <a className="link" onClick={(e)=> this.showFormRegister(e)}>Register</a>
    </div>
    if(this.state.register == 1){
        formContent = <div>
             <img
                src="https://media.licdn.com/dms/image/C4E0BAQEilOKrebYwSA/company-logo_200_200/0?e=1585180800&v=beta&t=-hDsbFmedQet2SBBc1yram7JmmRCkuqNUYGkva709NU"
                alt="..."
                width="65"
                class="mr-3 rounded-circle img-thumbnail shadow-sm"
              />
        <h1>REGISTER</h1>
          <input
            type="text"
            className="form-control mrgInputLogin"
            id="username"
            placeholder="Username"
            required
          />
          <input
            type="password"
            className="form-control mrgInputLogin"
            id="password"
            placeholder="Password"
            required
          />
           <input
            type="password"
            className="form-control mrgInputLogin"
            id="repeatpassword"
            placeholder="Confirm Password"
            required
          />
          <button
            id="btnSigIn"
            className="btn btn-lg btn-primary btn-block"
            onClick={e => this.saveDataLocalStorage(e)}
          >
            Save
          </button>
          <button
            id="btnSigIn"
            className="btn btn-lg btn-primary btn-block"
            onClick={(e)=> this.onBack(e)}
          >
            Back
          </button>

          
    </div>

    }
    return (
      <div className="logincontainer">
        <form className="centerVertical" id="formlogin">
          {formContent}
        </form>
      </div>
    );
  }
}
export default Login;
