import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <aside className="sidebar">
      <h2 className="logo">DevBlog</h2>

      <button onClick={() => navigate("/dashboard")}>🏠 Dashboard</button>
      <button onClick={() => navigate("/create")}>✍️ Write</button>
      <button onClick={() => navigate("/blogs")}>📰 Blogs</button>

      <button
        className="logout"
        onClick={() => {
          logout();
          navigate("/login");
        }}
      >
        🚪 Logout
      </button>
    </aside>
  );
}
