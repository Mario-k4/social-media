import React from "react";
import "./login.css"

function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">socialnetwork</h3>
                    <span className="loginDesc">Connect with friends and the world around you on socialnetwork</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input Placeholder="Email" className="loginInput" />
                        <input Placeholder="Password" className="loginInput" />
                        <button className="loginButton">Log in</button>
                        <span className="loginForgot">Forgot password?</span>
                        <button className="registerButton">Create a new account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;