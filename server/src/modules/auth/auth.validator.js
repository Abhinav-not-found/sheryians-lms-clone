import ApiError from "../../shared/error/ApiError.js";

export const registerValidator = (data) => {
	const { name, email, password } = data;

	if (!name?.trim() || !email?.trim() || !password?.trim()) {
		throw new ApiError(400, "All fields are required");
	}

	return {
		name: name.trim(),
		email: email.trim().toLowerCase(),
		password: password?.trim(),
	};
};
export const loginValidator = (data) => {
	const { email, password } = data;

	if (!email?.trim() || !password?.trim()) {
		throw new ApiError(400, "All fields are required");
	}

	return {
		email: email.trim().toLowerCase(),
		password: password?.trim(),
	};
};

export const googleAuthValidator = (data) => {
	const { name, email } = data;

	if (!name?.trim() || !email?.trim()) {
		throw new ApiError(400, "Name and email are required");
	}

	return {
		name: name.trim(),
		email: email.trim().toLowerCase(),
	};
};
