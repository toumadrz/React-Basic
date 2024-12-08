const Data = require("../models/SqlData")
module.exports = async (req, res) => {   
    try {
        const [results] = await Data.query("SELECT * FROM data ORDER BY DateCreate");
        res.status(200).json(results);
      } catch (error) {
        console.error("Error fetching users:", error.message);
        res.status(500).json({ error: "Error fetching users" });
      }
};