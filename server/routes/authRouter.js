import { Router } from "express";
import * as authController from "../controllers/auth.js";
import verifyToken from "../middlewares/verifyToken.js";

const authRouter = Router();
authRouter.post("/register", authController.register);
authRouter.post("/login", authController.logIn);
authRouter.get("/me", verifyToken, authController.getUser);

export default authRouter;
