import Lesson from "../models/lesson.model.js";
import Chapter from "../models/chapter.model.js";

const getAllChapter = async (req, res) => {
  const chapters = await Chapter.find({ courseId: req.params.courseId });
  res.json(chapters);
};
const createChapter = async (req, res) => {
  const newChapter = await Chapter.create(req.body);
  res.json(newChapter);
};
const getChapter = async (req, res) => {
  const chapter = await Chapter.findById(req.params.id);
  res.json(chapter);
};
const deleteChapter = async (req, res) => {
  await Lesson.deleteMany({ chapterId: req.params.id });
  await Chapter.findByIdAndDelete(req.params.id);
  res.json("Delete Success");
};
export { getAllChapter, createChapter, getChapter, deleteChapter };
