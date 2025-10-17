var blogs = [
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
var blogContainer = document.getElementById("blog-container");
blogs.forEach(function (blog) {
    var div = document.createElement("div");
    var title = document.createElement("h1");
    title.textContent = blog.title;
    var image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    var description = document.createElement("p");
    description.textContent = blog.description;
    div.appendChild(image);
    div.appendChild(title);
    div.appendChild(description);
    if (blogContainer)
        blogContainer.appendChild(div);
});
