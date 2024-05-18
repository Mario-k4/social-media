import React from "react";
import "./register.css"

function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">socialnetwork</h3>
                    <span className="loginDesc">Connect with friends and the world around you on socialnetwork</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input Placeholder="Username" className="loginInput" />
                        <input Placeholder="Email" className="loginInput" />
                        <input Placeholder="Password" className="loginInput" />
                        <input Placeholder="Password Again" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="registerButton">Log In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;