import { Link } from "react-router-dom";
import "../styles/Landing.css";

export default function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-left">
        <h1>DevBlog</h1>
        <p>Write. Share. Learn. Grow as a Developer.</p>
        <div className="landing-buttons">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/register" className="btn outline">Register</Link>
        </div>
      </div>

      <div className="landing-right">
        <img
          src="https://illustrations.popsy.co/gray/programming.svg"
          alt="coding"
        />
      </div>
    </div>
  );
}
