import dotenv from "dotenv";
import constants from "../constants/app.constant.js";

dotenv.config({ quiet: true });

const config = {
	PORT: Number(process.env.PORT) || constants.PORT,
	MONGO_URI: process.env.MONGO_URI || constants.MONGO_URI,
	JWT_SECRET_ACCESS: process.env.JWT_SECRET_ACCESS,
	JWT_SECRET_REFRESH: process.env.JWT_SECRET_REFRESH,
	CLIENT_URL: process.env.CLIENT_URL || process.env.CLIENT_URL_PROD,
	NODE_ENV: process.env.NODE_ENV,
	LOGGER_LEVEL: constants.LOGGER_LEVEL,
	GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || "",
	GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || "",
	GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL || "",
};

export default config;
