import React from "react";
import Navbar from "../components/navbar";
// @ts-ignore
import style from "./page.module.css";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className={style.main}>
        <h1 className={style.pageTitle}>About Me</h1>
        <div className={style.about}>
          <div className={style.aboutImage}>
            <img
              src="/polyimg.jpg.avif"
              alt="Image of Cal Poly SLO campus"
              width={500}
              height={400}
            />
          </div>
          <div className={style.aboutText}>
            <p>
              Hello, my name is <strong>Henry Orisonte</strong> and I am a third
              year transfer at <strong>Cal Poly</strong>.
            </p>
            <p>
              A few things that you should know about me are that I enjoy watching
              movies, shows, and basketball. I recently finished rewatching
              Regular Show, one of my favorite shows, along with Avatar: The Last
              Airbender. I also enjoy baking, especially cinnamon rolls and
              banana bread.
            </p>
          </div>
        </div>
      </main>
      <footer className={style.footer}>
        © 2023 Henry's Personal Website | All Rights Reserved
      </footer>
    </>

  );
}
