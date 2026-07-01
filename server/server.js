require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const noteRoutes = require("./routes/notes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/notes", noteRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(process.env.PORT, () => {
      console.log(`Server Running On Port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });