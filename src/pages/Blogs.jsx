import { useBlogs } from "../context/BlogContext";
import "../styles/Blogs.css";

export default function Blogs() {
  const { blogs } = useBlogs();

  return (
    <div className="blogs-page">
      <h2>All Blogs 📰</h2>

      {blogs.length === 0 ? (
        <p>No blogs published yet.</p>
      ) : (
        <div className="blogs-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <h3>{blog.title}</h3>
              <span className="category">{blog.category}</span>
              <p>{blog.content.slice(0, 100)}...</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
