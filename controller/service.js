const Service = require("../model/service");

const createService = async(req,res) =>{
    try{
        const {categoryId} = req.params;
        const { serviceName, type, priceOptions } = req.body;
        const service = new Service({ categoryId, serviceName, type, priceOptions});
            await service.save();
            res.json(service);
    } catch (error){
        res.status(500).json({ message: error.message});
    }
}

const getServiceByCategory = async (req,res) =>{
    try{
        const {categoryId} = req.params;
        const services = await Service.find({ categoryId});
        res.json(services);
    } catch(err){
        res.status(500).json({ message: err.message});
    }
}

const updateService = async(req,res) =>{
    try{
        const { serviceId } = req.params;
        await Service.findByIdAndUpdate(serviceId, {serviceName,type,priceOptions});
        res.json({message:"service update successfully"});
    } catch(err){
        res.status(500).json({ message: err.message});
    }
}

const deleteService = async(req,res) =>{
    try{
        const {serviceId} = req.params;
        await Service.findByIdAndDelete(serviceId);
        res.json({message:"service deleted successfully"});
    } catch(err){
        res.status(500).json({ message: err.message});
    }
}

module.exports = {
    createService,
    getServiceByCategory,
    updateService,
    deleteService
}