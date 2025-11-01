import Navbar from "../../../components/navbar";

export default function MadeBread() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
        <h1>Made Banana Bread and Zucchini Bread</h1>
        <p>Posted: 10-16-2025</p>
        <img src="/Bread.jpg" alt="Banana bread" width={300} height={400} />
        <p>Really enjoyed baking this and surprisingly the zucchini bread was really good. Sadly, I didn't get a picture, so here is one I found online.</p>
      </main>
    </>
  );
}
