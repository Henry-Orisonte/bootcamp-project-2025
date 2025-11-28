// src/app/blog/page.tsx
import BlogPreview from "@/components/blogPreview";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

const centerStyle = {
  justifySelf: "center",
  alignSelf: "center",
  fontSize: "2rem",
};

export default async function BlogPage() {
  await connectDB();

  let blogs;
  try {
    blogs = await Blog.find();
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return <div style={centerStyle}>This Blog does not exist.</div>;
  }

  if (!blogs?.length) {
    return <div style={centerStyle}>No blog posts yet.</div>;
  }

  return (
    <div>
      {blogs.map((blog) => (
        <BlogPreview
          key={blog.slug}
          title={blog.title}
          date={blog.date}
          description={blog.description}
          image={blog.image}
          imageAlt={blog.imageAlt}
          slug={blog.slug}
          content={blog.content}
          comments={blog.comments}
        />
      ))}
    </div>
  );
}
