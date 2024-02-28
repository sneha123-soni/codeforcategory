const express = require("express");
const router = express.Router();
const ServiceController = require("../controller/service");
const verifyToken = require("../middleware/verifyToken");

router.post('/category/:categoryId/service', verifyToken, ServiceController.createService);
router.get('/category/:categoryId/services', verifyToken, ServiceController.getServiceByCategory);
router.put('/category/:categoryId/service/:serviceId', verifyToken, ServiceController.updateService);
router.delete('/category/:categoryId/service/:serviceId',verifyToken, ServiceController.deleteService);

module.exports = router;