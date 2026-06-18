import config from "../../config/config.js";
import ApiResponse from "../../shared/utils/ApiResponse.js";
import AsyncHandler from "../../shared/utils/asyncHandler.js";
import {
	clearAccessCookie,
	clearRefreshCookie,
	setAccessCookie,
	setRefreshCookie,
} from "../../shared/utils/cookie.js";
import {
	googleService,
	loginService,
	logoutService,
	meService,
	refreshTokenService,
	registerService,
} from "./auth.service.js";

export const register = AsyncHandler(async (req, res) => {
	const data = await registerService(req.body);

	setAccessCookie(res, data.accessToken);
	setRefreshCookie(res, data.refreshToken);

	return new ApiResponse(201, "User registered", data.newUser).send(res);
});

export const login = AsyncHandler(async (req, res) => {
	const data = await loginService(req.body);

	setAccessCookie(res, data.accessToken);
	setRefreshCookie(res, data.refreshToken);

	return new ApiResponse(200, "User logged in", data.user).send(res);
});

export const me = AsyncHandler(async (req, res) => {
	const user = await meService(req.user.id);
	return new ApiResponse(200, "User fetched", user).send(res);
});

export const logout = AsyncHandler(async (req, res) => {
	await logoutService(req.cookies.refreshToken);

	clearAccessCookie(res);
	clearRefreshCookie(res);

	return new ApiResponse(200, "User logged out").send(res);
});

export const refreshToken = AsyncHandler(async (req, res) => {
	const accessToken = await refreshTokenService(req.cookies.refreshToken);

	setAccessCookie(res, accessToken);

	return new ApiResponse(200, "Access token refreshed").send(res);
});

export const google = AsyncHandler(async (req, res) => {
	const result = await googleService(req.user);

	if (result.status === "oauth_conflict") {
		return res.redirect(`${config.CLIENT_URL}/auth?error=oauth_account_exists`);
	}

	const { accessToken, refreshToken } = result;

	setAccessCookie(res, accessToken);
	setRefreshCookie(res, refreshToken);

	return res.redirect(`${config.CLIENT_URL}/?login=success`);
});
