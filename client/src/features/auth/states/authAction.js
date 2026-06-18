import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/config/axios";

export const registerUser = createAsyncThunk(
	"auth/register",
	async (userData, thunkApi) => {
		try {
			const res = await axiosInstance.post("/api/auth/register", userData);

			return res.data.data;
		} catch (error) {
			return thunkApi.rejectWithValue(
				error.response?.data?.message || "Registration failed",
			);
		}
	},
);

export const loginUser = createAsyncThunk(
	"auth/login",
	async (credentials, thunkApi) => {
		try {
			const res = await axiosInstance.post("/api/auth/login", credentials);
			return res.data.data;
		} catch (error) {
			return thunkApi.rejectWithValue(
				error.response?.data?.message || "Login failed",
			);
		}
	},
);

export const currentLoggedInUser = createAsyncThunk(
	"auth/me",
	async (_, thunkApi) => {
		try {
			const res = await axiosInstance.get("/api/auth/me");
			return res.data.data;
		} catch (error) {
			return thunkApi.rejectWithValue(
				// error.response?.data?.message || "Unauthorized",
				null,
			);
		}
	},
);

export const logoutUser = createAsyncThunk(
	"auth/logout",
	async (_, thunkApi) => {
		try {
			await axiosInstance.post("/api/auth/logout");
		} catch (error) {
			return thunkApi.rejectWithValue(error.response?.data?.message);
		}
	},
);
