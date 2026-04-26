import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "https://netflix-backend-6foh.vercel.app/login",
        { email, password }
      );

      if (res.data.success) {
        navigate("/home");
      } else {
        setError(res.data.message || "Invalid credentials");
      }
    } catch (err) {
      setError("Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">

      {/* 🎬 Moving Background Posters */}
      <div className="poster-bg">
        {/* 🎬 FULL MOVIE POSTER BACKGROUND */}
<div className="poster-bg">
  <div className="poster-grid">

    <img src="https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg" />
    <img src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg" />
    <img src="https://image.tmdb.org/t/p/w500/6EdKBYkB1ssgGjc249ud1L55o8d.jpg" />
    <img src="https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg" />
    <img src="https://image.tmdb.org/t/p/w500/5hNcsnMkwU2LknLoru73c76el3z.jpg" />
    <img src="https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg" />
    <img src="https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" />
    <img src="https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg" />

  </div>
</div>
      </div>

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

          <button type="submit" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="demo">Demo: admin@gmail.com / 123</p>
      </div>
    </div>
  );
}

export default Login;