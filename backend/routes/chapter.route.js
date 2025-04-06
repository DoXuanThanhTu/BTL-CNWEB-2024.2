import {
  createChapter,
  getAllChapter,
  getChapter,
} from "../controllers/chapter.controller.js";
import express from "express";
const router = express.Router();
router.get("/:id", getChapter);
router.get("/get-all/:courseId", getAllChapter);
router.post("/create", createChapter);
export default router;
