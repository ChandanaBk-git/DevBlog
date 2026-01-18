import { Link } from "react-router-dom";
import "../styles/Auth.css";

export default function Register() {
  return (
    <div className="auth-container reverse">
      <div className="auth-left">
        <h2>Join DevBlog 🚀</h2>
        <p>Create an account and start writing</p>
      </div>

      <div className="auth-right">
        <form className="auth-form">
          <h3>Register</h3>

          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <button type="submit">Register</button>

          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
