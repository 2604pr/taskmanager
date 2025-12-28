// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect("mongodb://127.0.0.1:27017/tasks");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/tasks", require("./routes/taskRoutes"));

app.listen(5000, () => console.log("Server running on 5000"));
