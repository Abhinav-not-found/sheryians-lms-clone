import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/states/authState";

export const store = configureStore({
	reducer: {
		auth: authReducer,
	},
});
