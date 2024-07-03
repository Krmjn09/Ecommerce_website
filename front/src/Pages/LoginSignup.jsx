import React, { useState } from "react"
import "./CSS/LoginSignup.css"

const LoginSignup = () => {
  const [state, setState] = useState("Login")
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })
  const [agree, setAgree] = useState(false)
  const [error, setError] = useState(null)

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const login = async () => {
    console.log("Login data:", formData)
    let responseData
    await fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: {
        accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        responseData = data
      })
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token)
      window.location.href = "/"
    } else {
      setError("Signup failed")
    }
  }

  const signup = async () => {
    console.log("Signup data:", formData)
    let responseData
    await fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: {
        accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        responseData = data
      })
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token)
      window.location.href = "/"
    } else {
      setError("Signup failed")
    }
  }

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        {error && <p className="error">{error}</p>}
        <div className="loginsignup-fields">
          {state === "Sign up" && (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Name"
            />
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          onClick={() => {
            state === "Sign up" ? signup() : login()
          }}
        >
          Continue
        </button>
        {state === "Sign up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login")
                setError(null) // Clear error when switching forms
              }}
            >
              Log in here
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?{" "}
            <span
              onClick={() => {
                setState("Sign up")
                setError(null) // Clear error when switching forms
              }}
            >
              Click here
            </span>
          </p>
        )}
        <div className="loginsignup-agree">
          <input
            type="checkbox"
            id="agree"
            checked={agree}
            onChange={() => setAgree(!agree)}
          />
          <label htmlFor="agree">
            I agree to the <span>Terms</span> and <span>Privacy Policy</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
