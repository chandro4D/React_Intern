const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");

const app = express();

const port = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());


// Database
connectDB();


// Routes
app.use("/api/products", productRoutes);


// Test
app.get("/", (req, res) => {
    res.send("Product API server is running");
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});