import express from "express";
import "./db/server.js";
import mongoose from "mongoose";
import plantsRouter from "./routes/plantsRouter.js";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/plants", plantsRouter);
app.listen(port, () => {
  console.log(`The app listening on port ${port}`);
});
