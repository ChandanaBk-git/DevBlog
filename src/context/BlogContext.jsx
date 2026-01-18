import { createContext, useContext, useState } from "react";

const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (blog) => {
    setBlogs((prev) => [...prev, blog]);
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlogs() {
  return useContext(BlogContext);
}
