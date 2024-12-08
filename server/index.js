const express = require('express');
const path = require('path');
const mysql = require("mysql2");
const mongoose = require('mongoose')

const app = express();
const cors = require('cors');

app.use(cors());

const storeDataController = require('./controllers/storeDataSql')
const getallData = require('./controllers/getallDataSql')


// mongodb
// mongoose.connect('mongodb+srv://admin:1234@cluster0.gx66z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
//     useNewUrlParser:true
// })

//sql


app.use(express.static('public'));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.post('/storedata', storeDataController);
app.get('/getalldata', getallData);





const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));