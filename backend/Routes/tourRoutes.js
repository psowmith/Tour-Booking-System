const express = require('express');
const router = express.Router();
const londonController=require('../Controllers/tourController');
router.get('/london', londonController.londondata);
router.get('/london/beach', londonController.londonBeachData);
router.get('/london/pools', londonController.londonPoolData);
router.get('/london/hotels', londonController.londonHotelsData);
router.put('/reserve',express.json(), londonController.reservation);
module.exports = router;