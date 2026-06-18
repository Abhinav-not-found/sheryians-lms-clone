import SignIn from "@/features/auth/ui/pages/SignIn"
import SignUp from "@/features/auth/ui/pages/SignUp"

const AuthRoutes = [
  {
    index: true,
    element: <SignIn />,
  },
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]

export default AuthRoutes
