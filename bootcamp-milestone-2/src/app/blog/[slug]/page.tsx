// src/app/blog/[slug]/page.tsx

import BlogPreview from "@/components/blogPreview";
import Comment from "@/components/component"; // <-- if you have a Comment component

type Props = {
  params: { slug: string };
};



async function getBlog(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, {
      cache: "no-store", // always fetch fresh data
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err) {
    console.log("error:", err);
    return null;
  }
}

export default async function Blog({ params: { slug } }: Props) {
  const blog = await getBlog(slug);

  // Blog not found
  if (!blog) {
    return <div style={{ textAlign: "center", fontSize: "2rem" }}>This blog does not exist.</div>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      {/* Blog content */}
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

      {/* Comments Section */}
      <h2 style={{ marginTop: "2rem", fontSize: "1.5rem" }}>Comments</h2>

      {blog.comments && blog.comments.length > 0 ? (
        blog.comments.map((comment: any, index: number) => (
          <Comment key={index} comment={comment} />
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
}
