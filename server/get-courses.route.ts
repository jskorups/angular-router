import { Request, Response } from "express";
import { COURSES } from "./db-data";

export function getAllCourses(req: Request, res: Response) {
  console.log("Fetching all courses..."); // Debug log
  res.status(200).json({ payload: Object.values(COURSES) });
}

export function getCourseByUrl(req: Request, res: Response) {
  console.log("Full Request Params:", req.params); // Log all params

  const courseIdParam = req.params.id; // Try accessing without brackets
  console.log("Extracted courseIdParam:", courseIdParam); // Debugging

  const courseId = parseInt(courseIdParam, 10); // Convert to number
  console.log("Parsed courseId:", courseId); // Debugging

  const course = COURSES[courseId]; // Direct lookup

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  res.status(200).json(course);
}
