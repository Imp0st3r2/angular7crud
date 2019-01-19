var express = require('express');
var router = express.Router();

/******ADD CONTROLLERS HERE******/
// var ctrlName = require('../controllers/controllername')
var ctrlBusiness = require('../controllers/business');

/******ADD API ROUTES HERE******/
// router.get('/route', ctrlName.method)
router.get('/business', ctrlBusiness.getListOfBusinesses);
router.get('/business/:id', ctrlBusiness.getBusinessById);
router.post('/business', ctrlBusiness.createBusiness);
router.put('/business/:id', ctrlBusiness.updateBusiness);
router.delete('/business/:id', ctrlBusiness.deleteBusiness);

module.exports = router;