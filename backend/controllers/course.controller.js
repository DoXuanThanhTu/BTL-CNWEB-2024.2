import Chapter from "../models/chapter.model.js";
import Course from "../models/course.model.js";
import Lesson from "../models/lesson.model.js";

const getAllCourse = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};
const getCourse = async (req, res) => {
  const course = await Course.findById(req.params.id);
  res.json(course);
};
const createCourse = async (req, res) => {
  const reqData = req.body;
  const newCourse = await Course.create(reqData);
  res.json(newCourse);
};
const updateCourse = async (req, res) => {
  const course = await Course.updateOne({ _id: req.params.id }, req.body);
  res.json(course);
};
const deleteCourse = async (req, res) => {
  try {
    const chapters = await Chapter.find({ courseId: req.params.id });
    const chapterIds = chapters.map((item) => item._id);
    const deleteLessons = await Lesson.deleteMany({
      chapterId: { $in: chapterIds },
    });
    const deleteChapters = await Chapter.deleteMany({
      courseId: req.params.id,
    });
    const deleteCourse = await Course.deleteOne({ _id: req.params.id });
    res.json("Delete successful!");
  } catch (error) {
    res.json(error);
  }
};
export { getCourse, getAllCourse, createCourse, updateCourse, deleteCourse };
