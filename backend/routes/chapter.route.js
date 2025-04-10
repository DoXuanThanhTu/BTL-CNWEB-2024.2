import {
  createChapter,
  getAllChapter,
  getChapter,
  deleteChapter,
} from "../controllers/chapter.controller.js";
import express from "express";
const router = express.Router();
router.get("/:id", getChapter);
router.get("/get-all/:courseId", getAllChapter);
router.post("/create", createChapter);
router.delete("/:id", deleteChapter);
export default router;
