const Academy = require('../../models/academy');

exports.getAllAcademies = async (req, res) => {
  try {
    const academies = await Academy.find();
    res.status(200).json({
      status: 'success',
      results: academies.length,
      data: {
        academies,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createAcademy = async (req, res) => {
  try {
    const academy = await Academy.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        academy,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};


exports.getAcademy = async (req, res) => {
  try {
    const academy = await Academy.findById(req.params.id);
    if (!academy) {
      return res.status(404).json({
        status: 'fail',
        message: 'Academy not found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        academy,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};


exports.updateAcademy = async (req, res) => {
  try {
    const academy = await Academy.findByIdAndUpdate(req.params.id, req.body);
    if (!academy) {
      return res.status(404).json({
        status: 'fail',
        message: 'Academy not found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        academy,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};


exports.deleteAcademy = async (req, res) => {
  try {
    const academy = await Academy.findByIdAndDelete(req.params.id);
    if (!academy) {
      return res.status(404).json({
        status: 'fail',
        message: 'Academy not found',
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
