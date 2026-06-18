import ApiError from "../../shared/error/ApiError.js";
import { comparePassword, hashPassword } from "../../shared/utils/bcrypt.js";
import { decodeRefreshToken } from "../../shared/utils/jwt.js";
import {
	generateAccessToken,
	generateRefreshToken,
	hashToken,
} from "../../shared/utils/token.js";
import { checkEmailExists, createUser, findUserById } from "./auth.dao.js";
import { loginValidator, registerValidator } from "./auth.validator.js";

export const registerService = async (data) => {
	const { name, email, password } = registerValidator(data);

	const userExist = await checkEmailExists(email);
	if (userExist) throw new ApiError(409, "Email already registered");

	const newUser = await createUser({
		name,
		email,
		password: await hashPassword(password),
	});

	const accessToken = generateAccessToken({ id: newUser._id });
	const refreshToken = generateRefreshToken({ id: newUser._id });

	newUser.refreshToken = hashToken(refreshToken);
	await newUser.save({
		validateBeforeSave: false,
	});

	return {
		accessToken,
		refreshToken,
		newUser: {
			id: newUser._id,
			name: newUser.name,
			email: newUser.email,
			avatar: newUser.avatar,
		},
	};
};

export const loginService = async (data) => {
	const { email, password } = loginValidator(data);

	const user = await checkEmailExists(email);
	if (!user) throw new ApiError(401, "Invalid credentials");

	const isPasswordValid = await comparePassword(password, user.password);
	if (!isPasswordValid) throw new ApiError(401, "Invalid credentials");

	const accessToken = generateAccessToken({ id: user._id });
	const refreshToken = generateRefreshToken({ id: user._id });

	user.refreshToken = hashToken(refreshToken);
	await user.save({
		validateBeforeSave: false,
	});

	return {
		accessToken,
		refreshToken,
		user: {
			id: user._id,
			name: user.name,
			email: user.email,
			avatar: user.avatar,
		},
	};
};

export const meService = async (id) => {
	const user = await findUserById(id);

	if (!user) throw new ApiError(404, "User not found");

	return {
		id: user._id,
		name: user.name,
		email: user.email,
		avatar: user.avatar,
	};
};

export const logoutService = async (data) => {
	const refreshToken = data;
	if (!refreshToken) throw new ApiError(400, "Refresh token not found");

	const decode = decodeRefreshToken(refreshToken);

	const user = await findUserById(decode.id);
	if (!user) throw new ApiError(400, "User not found");

	user.refreshToken = null;
	await user.save({
		validateBeforeSave: false,
	});
};

export const refreshTokenService = async (refreshToken) => {
	if (!refreshToken) throw new ApiError(401, "Refresh token not found");

	const decoded = decodeRefreshToken(refreshToken);

	const user = await findUserById(decoded.id);
	if (!user) throw new ApiError(401, "UnAuthorized user");

	const hashedRefreshToken = hashToken(refreshToken);

	if (hashedRefreshToken !== user.refreshToken) {
		throw new ApiError(401, "Unauthorized user");
	}

	const accessToken = generateAccessToken({
		id: user.id,
	});

	return accessToken;
};

export const googleService = async (profile) => {
	const name = profile.displayName || profile.name?.givenName || "user";
	const email = profile.emails?.[0]?.value;

	if (!email) throw new ApiError(400, "Google account has no email");

	let user = await checkEmailExists(email);

	if (user && user.provider !== "google") {
		return {
			status: "oauth_conflict",
		};
	}

	if (!user) {
		user = await createUser({
			name,
			email,
			avatar: profile.photos?.[0]?.value || "",
			provider: "google",
			providerId: profile.id,
		});
	}

	const accessToken = generateAccessToken({ id: user._id });
	const refreshToken = generateRefreshToken({ id: user._id });

	user.refreshToken = hashToken(refreshToken);
	await user.save({
		validateBeforeSave: false,
	});

	return {
		accessToken,
		refreshToken,
		user: {
			id: user._id,
			name: user.name,
			email: user.email,
			avatar: user.avatar,
		},
	};
};
