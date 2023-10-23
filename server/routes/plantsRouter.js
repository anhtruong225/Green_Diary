import express from "express";
import * as plantsController from "../controllers/plants.js";

const plantsRouter = express.Router();

plantsRouter.route("/").get(plantsController.getAllPlants);
plantsRouter.route("/:id").get(plantsController.getPlantById);

export default plantsRouter;
