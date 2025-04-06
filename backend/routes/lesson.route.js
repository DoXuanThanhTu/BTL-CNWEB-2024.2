import {
  createLesson,
  getAllLesson,
  getALesson,
  updateLesson,
} from "../controllers/lesson.controller.js";
import express from "express";
const router = express.Router();
router.post("/create", createLesson);
router.get("/get-all/:chapterId", getAllLesson);
router.get("/:lessonId", getALesson);
router.patch("/:lessonId", updateLesson);

export default router;
