import express from "express";
import * as postsController from "../controllers/posts.js";
import { Router } from "express";
import verifyToken from "../middlewares/verifyToken.js";

const postsRouter = express.Router();

postsRouter.route("/").post(verifyToken, postsController.createPost);
postsRouter.route("/:id").get(postsController.getPostById);
postsRouter.route("/:id").put(verifyToken, postsController.updatePost);
postsRouter.route("/:id").delete(verifyToken, postsController.deletePost);

export default postsRouter;