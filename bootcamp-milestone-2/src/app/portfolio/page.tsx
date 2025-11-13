import React from "react";
import Navbar from "../../components/navbar";
// @ts-ignore
import styles from "./page.module.css"; 

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Portfolio</h1>
        <div className={styles.portfolioItems}>
          <p>
            Welcome, I'm Henry Orisonte. Here you'll find many of my projects.
            Stay tuned for future updates!
          </p>
        </div>
      </main>
      <footer className={styles.footer}>
        © 2023 Henry's Personal Website | All Rights Reserved
      </footer>
    </>
  );
}
