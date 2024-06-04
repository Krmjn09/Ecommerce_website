import React from "react";
import "./CSS/LoginSignup.css";
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Log in here</span>
        </p>
        <div className="loginsignupagree">
          <input type="checkbox" name="" id="" />
          <p>
            I agree to the <span>Terms</span> and <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
