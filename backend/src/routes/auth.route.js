import express from "express";
import { signup } from "../controllers/auth.cotroller.js";
import { login } from "../controllers/auth.cotroller.js";
import { logout } from "../controllers/auth.cotroller.js";

const router = express.Router();

router.post("/login", login);

router.post("/signup", signup);

router.post("/logout", logout);

export default router;
