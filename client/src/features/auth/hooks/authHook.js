import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginUser, logoutUser, registerUser } from "../states/authAction";

const useAuth = (reset) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSignUp = async (data) => {
		try {
			await dispatch(registerUser(data)).unwrap();
			reset();
			navigate("/");
			toast.success("SignUp successful");
		} catch (error) {
			toast.error(error || "Something went wrong");
		}
	};

	const handleSignIn = async (data) => {
		try {
			await dispatch(loginUser(data)).unwrap();
			reset();
			navigate("/");
			toast.success("SignIn successful");
		} catch (error) {
			toast.error(error || "Something went wrong");
		}
	};

	const handleSignOut = async () => {
		try {
			await dispatch(logoutUser()).unwrap();
			navigate("/auth");
			toast.success("SignOut successful");
		} catch (error) {
			console.log(error);
		}
	};

	return {
		handleSignUp,
		handleSignIn,
		handleSignOut,
	};
};

export default useAuth;
