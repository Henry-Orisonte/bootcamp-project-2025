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
    image: "pic here",
    imageAlt: "",
    slug: "",
  },
  {
    title: "Made Bannana Bread",
    date: "10-16-2025",
    description: "Sadly didnt get a pic",
    image: "pic here",
    imageAlt: "",
    slug: "",
  },
];

const blogContainer = document.getElementById("blog-container");

blogs.forEach((blog) => {
  const div = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = blog.title;

  const image = document.createElement("img");
  image.src = blog.image;
  image.alt = blog.imageAlt;

  const description = document.createElement("p");
  description.textContent = blog.description;

  div.appendChild(image);
  div.appendChild(title);
  div.appendChild(description);

  if (blogContainer) blogContainer.appendChild(div);
});
