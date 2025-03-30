import {
  getCourse,
  createCourse,
  updateCourse,
  getAllCourse,
} from "../controllers/course.controller.js";
import express from "express";
const router = express.Router();
router.get("/get-one/:id", getCourse);
router.get("/get-all", getAllCourse);
router.post("/create", createCourse);
router.patch("/update", updateCourse);
export default router;
