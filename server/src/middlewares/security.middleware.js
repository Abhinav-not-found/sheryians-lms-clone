import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import config from "../config/config.js";
import passport from "../config/passport.js";

const SecurityMiddleware = (app) => {
	app.use(express.json());
	app.use(cookieParser());
	app.use(express.urlencoded({ extended: true }));
	if (config.NODE_ENV === "development") {
		app.use(morgan("dev"));
	}
	app.use(
		cors({
			origin: config.CLIENT_URL,
			credentials: true,
		}),
	);
	app.use(passport.initialize());
};

export default SecurityMiddleware;
