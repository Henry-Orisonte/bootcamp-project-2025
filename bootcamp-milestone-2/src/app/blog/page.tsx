import React from "react";
import Navbar from "../../components/navbar";
import { getBlogs } from "../blogData"; 
import BlogPreview from "../../components/blogPreview";
// @ts-ignore
import style from "./page.module.css";

export default async function BlogPage() {
  const blogs = await getBlogs();
  return (
    <>
      <Navbar />
      <main className={style.main}>
        <h1 className={style.pageTitle}>Blog</h1>
        {blogs?.map(blog => (
        <BlogPreview key={blog.slug} {...blog} />
      ))}
      </main>
      </>
  );
}