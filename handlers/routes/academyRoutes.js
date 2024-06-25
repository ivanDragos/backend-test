const express = require('express');
const router = express.Router();
const academyController = require('../controllers/academyController');


router.get('/', academyController.getAllAcademies);

router.post('/', academyController.createAcademy);

router.get('/:id', academyController.getAcademy);

router.patch('/:id', academyController.updateAcademy);

router.delete('/:id', academyController.deleteAcademy);

module.exports = router;
