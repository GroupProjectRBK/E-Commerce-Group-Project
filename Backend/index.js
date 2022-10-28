const express = require('express');
const cors = require('cors');
const db = require("./database/index")
const cookieParser = require('cookie-parser');
const products = require("./routes/products")
const app = express()
app.use(cors({credentials: true,origin: "http://localhost:3000"}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/products",products)

const port = 3002;


app.listen(port,() => console.log(`Server is running on ${port}` ));
