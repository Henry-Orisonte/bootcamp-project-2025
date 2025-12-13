"use client";

import React, {useState} from "react";
import Navbar from "../../components/navbar";
// @ts-ignore
import styles from "./page.module.css";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name || !form.email || !form.message) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess("Message was sent successfully!");
      setForm({ name: "", email: "", message: "" }); 
    } else {
      setError("Failed to send message. Please try again.");
    }
  }


  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Contact</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <input
            type="submit"
            value={loading ? "Sending..." : "Submit"}
            disabled={loading}
          />
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </main>

      <footer className={styles.footer}>
        © 2023 Henry's Personal Website | All Rights Reserved
      </footer>
    </>
  );
}
