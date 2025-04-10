import {
  getCourse,
  createCourse,
  updateCourse,
  getAllCourse,
  deleteCourse,
} from "../controllers/course.controller.js";
import express from "express";
const router = express.Router();
router.get("/get-one/:id", getCourse);
router.get("/get-all", getAllCourse);
router.post("/create", createCourse);
router.patch("/:id", updateCourse);
router.delete("/:id", deleteCourse);
export default router;
