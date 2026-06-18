import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"

const AuthLayout = () => {
  const { user, isLoading } = useSelector((store) => store.auth)
  if (isLoading) return <p>Loading...</p>
  if (user) {
    return <Navigate to={"/"} />
  }
  return <Outlet />
}

export default AuthLayout
