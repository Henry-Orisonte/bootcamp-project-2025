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
}

export default function BlogPreview({
  title,
  date,
  description,
  image,
  imageAlt,
  slug,
}: BlogProps) {
   return (
    <Link href={`/blog/${slug}`} className={styles.blogLink}>
      <div className={styles.blogPost}>
        <h1 className={styles.blogTitle}>{title}</h1>
        <Image
          src={image}
          alt={imageAlt}
          width={800}
          height={200}
          className={styles.blogImage}
          unoptimized
        />
        <p className={styles.blogDescription}>{description}</p>
        <p className={styles.blogDate}>Posted on {date}</p>
      </div>
    </Link>
  );
}
