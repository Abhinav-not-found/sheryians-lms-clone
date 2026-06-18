import { StatusCodes } from "http-status-codes";

class ApiResponse {
	constructor(statusCode = StatusCodes.OK, message = "Success", data = null) {
		this.statusCode = statusCode;
		this.message = message;
		this.data = data;
		this.success = true;
	}

	send(res) {
		return res.status(this.statusCode).json(this);
	}
}

export default ApiResponse;
