import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
			trim: true,
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
			lowercase: true,
			trim: true,
			match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
		},
		password: {
			type: String,
		},
		avatar: {
			type: String,
			default: "",
		},
		refreshToken: {
			type: String,
			default: "",
		},
		provider: {
			type: String,
			enum: ["local", "google"],
			default: "local",
		},
		providerId: {
			type: String,
			default: null,
		},
	},
	{ timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
