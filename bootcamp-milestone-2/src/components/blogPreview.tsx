import React from "react";
import Image from "next/image";
import Link from "next/link";
// @ts-ignore
import styles from "./blogPreview.module.css";

interface BlogProps {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
  content: string;
  comments: {
    user: string;
    comment: string;
    time: Date;
  }[];
}

export default function BlogPreview({
  title,
  date,
  description,
  image,
  imageAlt,
  slug,
  content,
  comments
}: BlogProps) {
  return (
    <div className={styles.blogPost}>
      <h1 className={styles.blogTitle}>{title}</h1>
      <Link href={`/blog/${slug}`} className={styles.blogLink}>
        <Image
          src={image}
          alt={imageAlt}
          width={800}
          height={200}
          className={styles.blogImage}
          unoptimized
        />
      </Link>
      <p className={styles.blogDescription}>{description}</p>
      <p className={styles.blogDate}>Posted on {new Date(date).toLocaleString()}</p>
      <div>
        <h3>Comments</h3>
        {comments.map((c, i) => (
          <div key={i}>
            <strong>{c.user}</strong>: {c.comment} ({new Date(c.time).toDateString()})
          </div>
        ))}
      </div>
    </div>
  );
}
