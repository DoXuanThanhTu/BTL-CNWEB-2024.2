import Course from "../models/course.model.js";

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
  const reqData = req.body;
  const course = await Course.updateOne({ _id: reqData.id }, reqData);
  res.json(course);
};
export { getCourse, getAllCourse, createCourse, updateCourse };
