import React from "react";
import Navbar from "../../components/navbar";
import { getProjects } from "@/app/portfolioData";
import Image from "next/image";
// @ts-ignore
import styles from "./page.module.css";

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Portfolio</h1>
        <div className={styles.portfolioItems}>
          {projects?.map((project: any) => (
            <div key={project._id.toString()} className={styles.portfolioItem}>
              <h2>{project.title}</h2>
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={500}
                height={400}
                unoptimized
              />
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className={styles.footer}>
        © 2025 Henry's Personal Website | All Rights Reserved
      </footer>
    </>
  );
}
