import dbConnect from "@/database/db";
import Blog from "@/database/blogSchema";
import { NextRequest, NextResponse } from "next/server";


export async function POST(
  req: NextRequest,
   context: { params: Promise<{ blogSlug: string }> }
) {
  await dbConnect();

  const body = await req.json();

const { blogSlug } = await context.params;

  if (!body?.comment || typeof body.comment !== "string") {
    return NextResponse.json(
      { error: "Invalid comment body" },
      { status: 400 }
    );
  }

  
  await Blog.updateOne(
    { slug: blogSlug },
    {
      $push: {
        comments: {
          user: body.user,
          comment: body.comment,
          createdAt: new Date(),
        },
      },
    }
  );

  
  return NextResponse.json(
    { message: "Comment was successfully added" },
    { status: 201 }
  );
}
