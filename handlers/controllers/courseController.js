const Course = require('../../models/course');

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({
      status: 'success',
      results: courses.length,
      data: {
        courses,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        course,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({
        status: 'fail',
        message: 'Course not found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        course,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body);
    if (!course) {
      return res.status(404).json({
        status: 'fail',
        message: 'Course not found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        course,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};


exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) {
      return res.status(404).json({
        status: 'fail',
        message: 'Course not found',
      });
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};