import User from "../../models/user.model.js";

export const checkEmailExists = async (email) => {
	return await User.findOne({ email });
};

export const createUser = async (data) => {
	return await User.create(data);
};

export const findUserById = async (id) => {
	return await User.findById(id);
};
