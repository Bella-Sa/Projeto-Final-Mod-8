const express = require("express");
const app = express();
const cors = require("cors");
const { PORT } = require("dotenv").config().parsed;


app.use(express.json(), cors());

const carsRouter = require("../routes/carsRouter");
app.use("/cars", carsRouter);


app.listen(PORT, console.log(`Server running at port ${PORT}`));