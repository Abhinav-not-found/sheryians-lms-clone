import config from "../config/config.js";

const tokenConstant = {
	access: { expiresIn: config.NODE_ENV === "production" ? "15m" : "15s" },
	refresh: { expiresIn: config.NODE_ENV === "production" ? "7d" : "15m" },
};

export default tokenConstant;
