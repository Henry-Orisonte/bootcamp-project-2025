import connectDB from "@/database/db";
import Project from "@/database/projectSchema";

export async function getProjects() {
  await connectDB();

  try {
    const projects = await Project.find().sort({ date: -1 }).lean().orFail();
    return projects;
  } catch (err) {
    console.error("Error fetching projects:", err);
    return null;
  }
}
