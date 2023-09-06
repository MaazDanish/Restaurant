const express = require('express');

const router = express.Router();
const controller = require('../controller/controller');

router.get('/add-bill', controller.getBill);
router.post('/add-bill', controller.addBill);
router.post('/delete-bill', controller.deleteBill);


module.exports = router;