import express from "express";
import { signup } from "../controllers/auth.cotroller.js";
import { login, logout } from "../controllers/auth.cotroller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { updateProfile } from "../controllers/auth.cotroller.js";
import { checkAuth } from "../controllers/auth.cotroller.js";
const router = express.Router();

router.post("/login", login);

router.post("/signup", signup);

router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth);

export default router;
