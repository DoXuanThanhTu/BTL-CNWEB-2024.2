import express from "express";
import connectDB from "./utils/connectDB.js";
import CourseRoute from "./routes/course.route.js";
import ChapterRoute from "./routes/chapter.route.js";
import LessonRoute from "./routes/lesson.route.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
// app.use("/users", userRouter);
app.use("/courses", CourseRoute);
app.use("/chapters", ChapterRoute);
app.use("/lessons", LessonRoute);

app.listen(8000, () => {
  connectDB();
  console.log("Server is running");
});
