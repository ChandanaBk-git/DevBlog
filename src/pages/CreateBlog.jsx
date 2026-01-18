import { useNavigate } from "react-router-dom";
import "../styles/CreateBlog.css";
import { useBlogs } from "../context/BlogContext";

export default function CreateBlog() {
  const navigate = useNavigate();
  const { addBlog } = useBlogs();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      id: Date.now(),
      title: e.target[0].value,
      category: e.target[1].value,
      content: e.target[2].value,
    };

    addBlog(newBlog);
    alert("Blog published successfully ✨");
    navigate("/blogs");
  };

  return (
    <div className="create-blog">
      <h2>Create New Blog ✍️</h2>

      <form className="blog-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Title"
          required
        />

        <select required>
          <option value="">Select Category</option>
          <option value="technology">Technology</option>
          <option value="programming">Programming</option>
          <option value="career">Career</option>
          <option value="education">Education</option>
        </select>

        <textarea
          placeholder="Write your blog content here..."
          rows="10"
          required
        ></textarea>

        <div className="blog-actions">
          <button type="submit">Publish</button>
          <button
            type="button"
            className="cancel"
            onClick={() => navigate("/dashboard")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
