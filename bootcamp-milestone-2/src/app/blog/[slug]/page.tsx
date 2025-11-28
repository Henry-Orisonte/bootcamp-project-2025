type Props = {
    params: { slug: string };
};

async function getBlog(slug: string) {
    try {
        const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch blog");
        }

        return res.json();
    } catch (err) {
        console.log(`error: ${err}`);
        return null;
    }
}

export default async function Blog({ params: { slug } }: Props) {
    const blog = await getBlog(slug);

    if (!blog) {
        return <div>This Blog does not exist</div>;
    }

    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
        </div>
    );
}
