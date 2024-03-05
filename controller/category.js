const Category = require("../model/category");
const connectDb = require("../config/dbConnection");

const createcategory = async (req,res) => {
    try {
        const connection = connectDb();
        const { categoryName } = req.body;
        const query = 'INSERT INTO category (categoryName) VALUES (?)';

        connection.query(query, [categoryName], (err, result) => {
            if (err) {
                console.error('Error creating category: ', err);
                return res.status(500).json({ message: 'Error creating category' });
            }
            res.json({ message: 'Category created successfully', categoryId: result.insertId });
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getCategory = async(req,res) =>{
    try {
        const connection = connectDb();
        const query = 'SELECT * FROM category';
        connection.query(query, (err, results) => {
            if (err) {
                console.error('Error getting categories: ', err);
                return res.status(500).json({ message: 'Error getting categories' });
            }
            res.json(results);
        });
    } catch (err) {
        console.error('Error executing query: ', err);
        return res.status(500).json({ message: 'Error executing query' });
    }
    
}

const updatCategory = async(req,res) =>{
    try {
        const connection = connectDb();
        const { categoryId } = req.params;
        const { categoryName } = req.body;
        const query = 'UPDATE category SET categoryName = ? WHERE id = ?';
    
        connection.query(query, [categoryName, categoryId], (err, result) => {
          if (err) {
            console.error('Error updating category: ', err);
            return res.status(500).json({ message: 'Error updating category' });
          }
          if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Category not found' });
          }
          res.json({ message: 'Category updated successfully' });
        });
      } catch (err) {
        console.error('Error updating category: ', err);
        res.status(500).json({ message: 'Internal server error' });
      }
} 

const deleteCategory = async(req,res) =>{
    try {
        const connection = connectDb();
        const { categoryId } = req.params;
        const query = 'DELETE FROM category WHERE id = ?';
        connection.query(query, [categoryId], (err, result) => {
          if (err) {
            console.error('Error deleting category: ', err);
            return res.status(500).json({ message: 'Error deleting category' });
          }
          if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Category not found' });
          }
          res.json({ message: 'Category deleted successfully' });
        });
      } catch (err) {
        console.error('Error deleting category: ', err);
        res.status(500).json({ message: 'Internal server error' });
      }
}

module.exports = {
    createcategory,
    getCategory, 
    updatCategory,
    deleteCategory
}