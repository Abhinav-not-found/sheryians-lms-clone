const authRule = {
	name: {
		required: "Name is required",
		minLength: {
			value: 3,
			message: "Minimum 3 characters",
		},
		maxLength: {
			value: 20,
			message: "Maximum 20 characters",
		},
		pattern: {
			value: /^[A-Za-z\s]+$/,
			message: "Only letters are allowed",
		},
		validate: {
			noOnlySpaces: (value) =>
				value.trim().length > 0 || "Name cannot be empty spaces",
		},
	},
	email: {
		required: "Email is required",
		pattern: {
			value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
			message: "Enter a valid email",
		},
		maxLength: {
			value: 100,
			message: "Email is too long",
		},
		validate: {
			noSpaces: (value) =>
				!value.includes(" ") || "Email cannot contain spaces",
		},
	},
	password: {
		required: "Password is required",
		minLength: {
			value: 6,
			message: "Minimum 6 characters",
		},
		maxLength: {
			value: 32,
			message: "Maximum 32 characters",
		},

		// pattern: {
		// 	value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
		// 	message: "Must contain uppercase, lowercase and number",
		// },

		validate: {
			noSpaces: (value) =>
				!value.includes(" ") || "Password cannot contain spaces",
		},
	},
};
export default authRule;
