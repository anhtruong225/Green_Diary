import express from "express";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler.js";
import "./db/server.js";
import authRouter from "./routes/authRouter.js";
import "./db/server.js";
import mongoose from "mongoose";
import plantsRouter from "./routes/plantsRouter.js";

const app = express();
const port = 8000;

app.use(cors());

app.use(express.json());

app.use("/auth", authRouter);

app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/plants", plantsRouter);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
