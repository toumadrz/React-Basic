const Data = require('../models/Data');

module.exports = async (req, res) => {
    try {
        const { Id, Name, Amount } = req.body;

        // บันทึกข้อมูล
        await Data.create({
            Id: Id,
            Name: Name,
            Amount: Amount
        });

        res.status(201).json({ message: 'Data created successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
