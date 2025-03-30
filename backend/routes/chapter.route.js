import {
  createChapter,
  getAllChapter,
} from "../controllers/chapter.controller.js";
import express from "express";
const router = express.Router();
router.get("/:courseId", getAllChapter);
router.post("/create", createChapter);
export default router;
