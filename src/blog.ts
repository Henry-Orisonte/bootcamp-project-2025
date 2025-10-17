type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "Made Focaccia",
    date: "10-16-2025",
    description: "First time having it, tasted suprsignly well",
    image: "./focaccia.jpg",
    imageAlt: "focacci",
    slug: "made-focaccia",
  },
  {
    title: "Made Bannana Bread",
    date: "10-16-2025",
    description: "Sadly didnt get a pic",
    image: "./Bread.jpg",
    imageAlt: "banana bread",
    slug: "made-bread",
  },
];

const blogContainer = document.getElementById("blog-container");

blogs.forEach((blog) => {
  const div = document.createElement("div");
  div.className = "blog-post"

  const image = document.createElement("img");
  image.src = blog.image;
  image.alt = blog.imageAlt;
  image.style.width = "400px";
  image.style.height = "300px";

  const title = document.createElement("h1");
  title.textContent = blog.title;

  const link = document.createElement("a");
  link.href = `blogs/${blog.slug}.html`;
  

  const description = document.createElement("p");
  description.textContent = blog.description;

  div.appendChild(image);
  div.appendChild(title);
  div.appendChild(description);
  div.appendChild(link);

  if (blogContainer) blogContainer.appendChild(div);
});
