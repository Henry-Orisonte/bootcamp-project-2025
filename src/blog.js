var blogs = [
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
var blogContainer = document.getElementById("blog-container");
blogs.forEach(function (blog) {
    var div = document.createElement("div");
    div.className = "blog-post";
    var link = document.createElement("a");
    link.href = "blogs/".concat(blog.slug, ".html");
    var image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    image.style.width = "400px";
    image.style.height = "300px";
    link.appendChild(image);
    var title = document.createElement("h1");
    title.textContent = blog.title;
    var readMore = document.createElement("a");
    link.href = "blogs/".concat(blog.slug, ".html");
    readMore.textContent = "read more";
    var description = document.createElement("p");
    description.textContent = blog.description;
    div.appendChild(image);
    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(link);
    if (blogContainer)
        blogContainer.appendChild(div);
});
