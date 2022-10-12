import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import loginImage from "./assets/login.jpg"
import facebookicon from "./assets/facebook.png"
import tweetericon from "./assets/tweeter.png"


function LoginPage() {
  return (
    <div className="main">

      <div className="left" >
        <img src={loginImage} alt="login" ></img>
      </div>
      <div className="right">
        <h1 className="mainheading">Login to continue</h1>
        <input type="text" name="email" id="email" placeholder="Email" />
        <input type="password" name="password" id="password" placeholder="Password" />

        <div className="remember">
          <label id="rememberme" htmlFor="remember">
            <input type="checkbox" name="remember" id="remember" className="chk-rem" />
            Remember me
          </label>
          <label id="fgpassword"><a id="linkfgp" href=" ">Forgot Password&#63;</a></label>
        </div>

        <button>Login</button>
        <label id="signupusing">or sign up using</label>

        <div>
          <a href=" ">
            <img id="facebook" className="social" src={facebookicon} alt="facebook"></img>
            <img className="social" src={tweetericon} alt="tweeter"></img>
          </a>
        </div>

      </div>

    </div>
  );
}

ReactDOM.render(<LoginPage />, document.querySelector("#root"));