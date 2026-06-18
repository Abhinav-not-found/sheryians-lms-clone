import { StatusCodes } from "http-status-codes";
import ApiError from "../shared/error/ApiError.js";
import { decodeAccessToken } from "../shared/utils/jwt.js";

function authMiddleware(req, _, next) {
	try {
		const token = req.cookies?.accessToken;
		if (!token) throw new ApiError(StatusCodes.UNAUTHORIZED, "Unauthorized");

		const decoded = decodeAccessToken(token);

		req.user = decoded;
		next();
	} catch (error) {
		next(
			error instanceof ApiError
				? error
				: new ApiError(StatusCodes.UNAUTHORIZED, "Unauthorized"),
		);
	}
}

export default authMiddleware;
