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
  // res.json(req.params);
  const chapter = await Chapter.findById(req.params.id);
  res.json(chapter);
};
export { getAllChapter, createChapter, getChapter };
