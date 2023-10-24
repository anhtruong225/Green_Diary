import express from "express";
import "./db/server.js";
import mongoose from "mongoose";
import plantsRouter from "./routes/plantsRouter.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use("/plants", plantsRouter);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`The app listening on port ${port}`);
});
