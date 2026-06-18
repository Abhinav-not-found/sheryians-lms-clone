import { Router } from "express";
import passport from "passport";
import authenticateToken from "../../middlewares/auth.middleware.js";
import * as authController from "./auth.controller.js";

const router = Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.post("/refresh", authController.refreshToken);
router.get("/me", authenticateToken, authController.me);

router.get(
	"/google",
	passport.authenticate("google", {
		scope: ["profile", "email"],
		session: false,
	}),
);
router.get(
	"/google/callback",
	passport.authenticate("google", { failureRedirect: "/", session: false }),
	authController.google,
);

router.get("/check", (req, res) => {
	res.send("User route is running");
});

export default router;
