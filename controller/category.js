const Category = require("../model/category");

const createcategory = async(req,res) =>{
    try{
        const { categoryName } = req.body;
        const category = new Category({ categoryName });
        await category.save();
        res.json(category);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const getCategory = async(req,res) =>{
    try{
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const updatCategory = async(req,res) =>{
      try{
        const { categoryId } = req.params;
        const { categoryName } = req.body;
        await Category.findByIdAndUpdate(categoryId, { categoryName});
        res.json({ message:"category update successfully"});
      } catch(err){
        res.status(500).json({ message: err.message});
      }
} 

const deleteCategory = async(req,res) =>{
    try{
        const {categoryId} = req.params;
        await Category.findByIdAndDelete(categoryId);
        res.json({ message: "category deleted successfully"});
    } catch(err){
        res.status(500).json({ message: err.message});
    }
}

module.exports = {
    createcategory,
    getCategory, 
    updatCategory,
    deleteCategory
}