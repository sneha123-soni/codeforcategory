const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");
const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/category");
const serviceRoutes = require("./routes/service");

const app = express();


const PORT = 3008;

app.use(bodyParser.json());

//db connection
connectDb();

//Routes
app.use('/auth', authRoutes);
app.use('/',categoryRoutes);
app.use('/',serviceRoutes);


app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
}); 