import express from "express";
import {
  createPost,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/posts.js";

const postsRouter = express.Router();

postsRouter.post("/", createPost);

postsRouter.get("/:id", getPostById);

postsRouter.put("/:id", updatePost);

postsRouter.delete("/:id", deletePost);

export default postsRouter;
