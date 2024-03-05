const connectDb = require("../config/dbConnection");

const createService = async(req,res) =>{
    try {
        const connection = connectDb();
        const { categoryId } = req.params;
        const { serviceName, type, priceOptions } = req.body;
        const query = 'INSERT INTO service (categoryId, serviceName, type, priceOptions) VALUES (?, ?, ?, ?)';
        connection.query(query, [categoryId, serviceName, type, JSON.stringify(priceOptions)], (err, result) => {
          if (err) {
            console.error('Error creating service: ', err);
            return res.status(500).json({ message: 'Error creating service' });
          }
          res.json({ message: 'Service created successfully', serviceId: result.insertId });
        });
      } catch (err) {
        console.error('Error creating service: ', err);
        res.status(500).json({ message: 'Internal server error' });
      }
}

const getServiceByCategory = async (req,res) =>{
    try {
        const connection = connectDb();
        const { categoryId } = req.params;
        const query = 'SELECT * FROM service WHERE categoryId = ?';
        connection.query(query, [categoryId], (err, results) => {
          if (err) {
            console.error('Error fetching services: ', err);
            return res.status(500).json({ message: 'Error fetching services' });
          }
          res.json(results);
        });
      } catch (err) {
        console.error('Error fetching services: ', err);
        res.status(500).json({ message: 'Internal server error' });
      }
}

const updateService = async(req,res) =>{
    try {
        const connection = connectDb();
        const { serviceId } = req.params;
        const { serviceName, type, priceOptions } = req.body;
        const query = 'UPDATE service SET serviceName = ?, type = ?, priceOptions = ? WHERE id = ?';
        connection.query(query, [serviceName, type, JSON.stringify(priceOptions), serviceId], (err, result) => {
          if (err) {
            console.error('Error updating service: ', err);
            return res.status(500).json({ message: 'Error updating service' });
          }
          if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Service not found' });
          }
          res.json({ message: 'Service updated successfully' });
        });
      } catch (err) {
        console.error('Error updating service: ', err);
        res.status(500).json({ message: 'Internal server error' });
      }
}

const deleteService = async(req,res) =>{
    
    try {
        const connection = connectDb();
        const { serviceId } = req.params;
        const query = 'DELETE FROM service WHERE id = ?';
        connection.query(query, [serviceId], (err, result) => {
          if (err) {
            console.error('Error deleting service: ', err);
            return res.status(500).json({ message: 'Error deleting service' });
          }
          if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Service not found' });
          }
          res.json({ message: 'Service deleted successfully' });
        });
      } catch (err) {
        console.error('Error deleting service: ', err);
        res.status(500).json({ message: 'Internal server error' });
      }
}

module.exports = {
    createService,
    getServiceByCategory,
    updateService,
    deleteService
}