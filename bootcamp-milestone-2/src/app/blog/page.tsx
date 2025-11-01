import React from "react";
import Navbar from "../../components/navbar";
import blogs from "../blogData";
import BlogPreview from '../../components/blogPreview';
// @ts-ignore
import styles from "./page.module.css"; 
export default function BlogPage() {
  return (
    <main>
      <h1>Blog</h1>
      {blogs.map((blog) => (
        <BlogPreview {...blog} /> 
      ))}
    </main>
  );
}
