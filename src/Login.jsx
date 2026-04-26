import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "https://netflix-backend-6foh.vercel.app/login",
      {
        email,
        password,
      }
    );

    if (res.data.success) {
      navigate("/home");
    } else {
      setError(res.data.message || "Invalid credentials");
    }
  } catch (err) {
    setError("Server error. Try again.");
  }
};

  return (
    <div className="login">
      <div className="bg"></div>

      <h1 className="logo">NETFLIX</h1>

      <div className="login-box">
        <h2>Sign In</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign In</button>
        </form>

        <p className="demo">
          Demo: admin@gmail.com / 123
        </p>
      </div>
    </div>
  );
}

export default Login;