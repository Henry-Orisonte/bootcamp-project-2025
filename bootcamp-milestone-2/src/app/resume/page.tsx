import React from "react";
import Navbar from "../../components/navbar";
// @ts-ignore
import style from "./page.module.css";

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className={style.main}>
        <h1 className={style.pageTitle}>Resume</h1>

        <a href="/Resume Draft1.pdf" download>
          Download Resume
        </a>

        <div className={style.resume}>
          <section className={style.section}>
            <h2 className={style.sectionTitle}>Education</h2>
            <div className={style.entry}>
              <h3 className={style.entryTitle}>
                Associate in Mathematics, Science, and Computer Science
              </h3>
              <p className={style.entryInfo}>Allan Hancock College, 2025</p>

              <h3 className={style.entryTitle}>
                Bachelor of Software Engineering
              </h3>
              <p className={style.entryInfo}>
                California Polytechnic University, San Luis Obispo, 2025 |
                Expected graduation 2027
              </p>
            </div>
          </section>

          <section className={style.section}>
            <h2 className={style.sectionTitle}>Coursework</h2>
            <div className={style.entry}>
              <ul className={style.courseList}>
                <li>Fundamentals of Computer Science</li>
                <li>Data Structures</li>
                <li>Introduction to Computer Organization</li>
                <li>Discrete Structures</li>
              </ul>
            </div>
          </section>

          <section className={style.section}>
            <h2 className={style.sectionTitle}>Skills</h2>
            <div className={style.entry}>
              <ul className={style.skillList}>
                <li>Java, Python, HTML</li>
                <li>Git, GitHub</li>
              </ul>
            </div>
          </section>

          <section className={style.section}>
            <h2 className={style.sectionTitle}>Projects</h2>
            <div className={style.entry}>
              <h3 className={style.entryTitle}>Personal Website</h3>
              <p className={style.entryInfo}>
                Built and designed a website using HTML and CSS
              </p>
              <p className={style.entryDescription}>
                A personal website designed to showcase my portfolio, resume,
                and many things about myself.
              </p>
            </div>

            <div className={style.entry}>
              <h3 className={style.entryTitle}>
                Website for a fictional business
              </h3>
              <p className={style.entryInfo}>
                Built and designed a website using HTML and CSS
              </p>
              <p className={style.entryDescription}>
                A fully functional website created for a fictional business,
                showcasing product pages, contact forms, and responsive design.
              </p>
            </div>
          </section>

          <section className={style.section}>
            <h2 className={style.sectionTitle}>Experience</h2>
            <div className={style.entry}>
              <h3 className={style.entryTitle}>Volunteer Work</h3>
              <p className={style.entryInfo}>Local Church</p>
              <p className={style.entryDescription}>
                Helped set up and organize events
              </p>
            </div>
          </section>
        </div>
      </main>
      <footer className={style.footer}>
        © 2023 Henry's Personal Website | All Rights Reserved
      </footer>
    </>
  );
}
