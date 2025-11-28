// src/app/blog/page.tsx
import BlogPreview from "@/components/blogPreview";
import connectDB from "@/database/db";
import CSS from "csstype";


type Props = {
  params: { slug: string };
};

const  centerStyle: CSS.Properties = {
  justifySelf: "center",
  alignSelf: "center",
  fontSize: "2rem",
};

async function getBlog(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, {
      cache: "no-store", // ensures fresh data every request
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function Blog({ params: { slug } }: Props) {
  const blog = await getBlog(slug);

  if (!blog) {
    return <div style={centerStyle}>This blog does not exist.</div>;
  }



  return (
    <div style={{ padding: "1rem" }}>
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
    </div>
  );
}
