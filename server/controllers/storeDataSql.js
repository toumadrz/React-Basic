const Data = require("../models/SqlData")
module.exports = async (req, res) => {   
    try {
        const { Id, Name, Amount } = req.body;
        if (!Id || !Name || !Amount) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        const timestamp = new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' ');
        const query = `INSERT INTO data (Id, Name, Amount, DateCreate) VALUES (?, ?, ?, ?)`;
        const [results] = await Data.query(query, [Id, Name, Amount,timestamp]);
        res.status(200).json({
            message: "Data inserted successfully"
            });
      } catch (error) {
        console.error("Error fetching users:", error.message);
        res.status(500).json({ error: "Error fetching users :" });
      }
};