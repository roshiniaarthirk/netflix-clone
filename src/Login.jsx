import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import "./Login.css"

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()

    if (email === "admin@gmail.com" && password === "123") {
      navigate("/home")
    } else {
      setError("Invalid credentials")
    }
  }

  return (
    <div className="login">

      {/* BACKGROUND */}
      <div className="bg"></div>

      {/* NAV */}
      <h1 className="logo">NETFLIX</h1>

      {/* LOGIN BOX */}
      <div className="login-box">
        <h2>Sign In</h2>

        <p className="demo">
          Email: admin@gmail.com <br />
          Password: 123
        </p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign In</button>
        </form>
      </div>

    </div>
  )
}

export default Login