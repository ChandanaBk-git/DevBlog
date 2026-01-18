import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../styles/Dashboard.css";
import { useBlogs } from "../context/BlogContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { blogs, deleteBlog } = useBlogs();
  const navigate = useNavigate();

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <Topbar />

        <div className="dashboard-container">

          {/* HEADER */}
          <div className="dashboard-header">
            <div>
              <h1>Your Dashboard</h1>
              <p>Write, edit and manage your blog posts</p>
            </div>

            <button
              className="primary-btn"
              onClick={() => navigate("/create")}
            >
              ✍️ Write Blog
            </button>
          </div>

          {/* STATS */}
          <div className="dashboard-stats">
            <div>
              <strong>{blogs.length}</strong>
              <span>Total Posts</span>
            </div>
            <div>
              <strong>—</strong>
              <span>Views</span>
            </div>
            <div>
              <strong>—</strong>
              <span>Likes</span>
            </div>
          </div>

          {/* POSTS */}
          <h2 className="section-title">Your Posts</h2>

          {blogs.length === 0 ? (
            <div className="empty-state">
              <h3>No blogs yet ✍️</h3>
              <p>Start sharing your ideas with the world.</p>
              <button
                className="primary-btn"
                onClick={() => navigate("/create")}
              >
                Create your first blog
              </button>
            </div>
          ) : (
            <div className="posts-list">
              {blogs.map((blog) => (
                <div className="post-card" key={blog.id}>
                  <div className="post-info">
                    <h3>{blog.title}</h3>
                    <span className="category">{blog.category}</span>
                    <p>{blog.content.slice(0, 150)}...</p>
                  </div>

                  <div className="post-actions">
                    <button onClick={() => navigate(`/edit/${blog.id}`)}>
                      Edit
                    </button>
                    <button
                      className="danger"
                      onClick={() => deleteBlog(blog.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
