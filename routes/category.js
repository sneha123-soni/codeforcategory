const express = require("express");
const router = express.Router();
const categoryController = require("../controller/category");
const verifyToken = require("../middleware/verifyToken");


router.post('/category', verifyToken, categoryController.createcategory);
router.get('/categories', verifyToken, categoryController.getCategory);
router.put('/category/:categoryId',verifyToken, categoryController.updatCategory);
router.delete('/category/:categoryId',verifyToken, categoryController.deleteCategory);

module.exports = router;