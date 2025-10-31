export interface Blog{
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string
}

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

export default blogs; // will allow us to access the data anywhere