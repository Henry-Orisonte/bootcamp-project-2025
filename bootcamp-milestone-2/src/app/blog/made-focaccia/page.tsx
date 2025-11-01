import Navbar from "../../../components/navbar";

export default function MadeFocaccia() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
        <h1>Made Focaccia</h1>
        <p>Posted: 10-16-2025</p>
        <img src="/focaccia.jpg" alt="Focaccia bread" width={800} height={400} />
        <p>First time having it, tasted surprisingly well...</p>
      </main>
    </>
  );
}
