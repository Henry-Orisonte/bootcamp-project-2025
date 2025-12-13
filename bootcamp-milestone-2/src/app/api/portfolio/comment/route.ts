import dbConnect from "@/database/db";
import Project from "@/database/projectSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await dbConnect();

  const body = await req.json();

  if (!body?.comment || typeof body.comment !== "string") {
    return NextResponse.json(
      { error: "Invalid comment body" },
      { status: 400 }
    );
  }

  await Project.updateOne(
    {}, // single portfolio document
    {
      $push: {
        comments: {
          user: body.user,
          comment: body.comment,
          date: new Date(),
        },
      },
    }
  );

  return NextResponse.json(
    { message: "Comment was successfully added" },
    { status: 201 }
  );
}
