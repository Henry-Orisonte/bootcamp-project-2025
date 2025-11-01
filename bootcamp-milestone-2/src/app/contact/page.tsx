import React from "react";
import Navbar from "../../components/navbar";
// @ts-ignore
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Contact</h1>
        <form id="contact-form" className={styles.form}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message"></textarea>

          <input type="submit" value="Submit" />
        </form>
      </main>
      <footer className={styles.footer}>
        © 2023 Henry's Personal Website | All Rights Reserved
      </footer>
    </>
  );
}
