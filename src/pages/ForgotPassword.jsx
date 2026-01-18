import { Link } from "react-router-dom";
import "../styles/Auth.css";

export default function ForgotPassword() {
  return (
    <div className="auth-container">
      <div className="auth-left">
        <h2>No Worries 😌</h2>
        <p>We’ll help you reset your password</p>
      </div>

      <div className="auth-right">
        <form className="auth-form">
          <h3>Reset Password</h3>

          <input type="email" placeholder="Enter your email" required />

          <button type="submit">Send Reset Link</button>

          <Link to="/login" className="link">
            Back to Login
          </Link>
        </form>
      </div>
    </div>
  );
}
