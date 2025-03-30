import Chapter from "../models/chapter.model.js";

const getAllChapter = async (req, res) => {
  const reqData = req.body;
  const chapters = await Chapter.find({ courseId: req.params.courseId });
  res.json(chapters);
};
const createChapter = async (req, res) => {
  const reqData = req.body;
  const newChapter = await Chapter.create(reqData);
  res.json(newChapter);
};

export { getAllChapter, createChapter };
