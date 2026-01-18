import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";
import { useAuth } from "../context/AuthContext";


export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

const handleLogin = (e) => {
  e.preventDefault();
  login();              // ✅ mark user as logged in
  navigate("/dashboard");
};


  return (
    <div className="auth-container">
      <div className="auth-left">
        <h2>Welcome Back 👋</h2>
        <p>Login to continue blogging</p>
      </div>

      <div className="auth-right">
        <form className="auth-form" onSubmit={handleLogin}>
          <h3>Login</h3>

          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <button type="submit">Login</button>

          <Link to="/forgot-password" className="link">
            Forgot Password?
          </Link>

          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
