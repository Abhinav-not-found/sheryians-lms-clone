import { useSelector } from "react-redux"
import { Navigate } from "react-router"
import DashboardLayout from "@/app/layout/DashboardLayout"

const ProtectedRoute = () => {
  const { user, isLoading } = useSelector((store) => store.auth)

  if (isLoading) return <p>Loading...</p>

  if (!user) {
    return <Navigate to={"/auth"} />
  }
  return <DashboardLayout />
}

export default ProtectedRoute
