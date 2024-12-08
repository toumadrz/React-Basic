const Data = require('../models/Data'); 

module.exports = async (req, res) => {
    
    try {
        const data = await Data.find(); // ดึงข้อมูลทั้งหมด
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
};