import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router"
import AuthLayout from "@/app/layout/AuthLayout"
import { currentLoggedInUser } from "@/features/auth/states/authAction"
import AuthRoutes from "./AuthRoutes"
import DashboardRoutes from "./DashboardRoutes"
import ProtectedRoute from "./ProtectedRoute"

const AppRoutes = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(currentLoggedInUser())
  }, [dispatch])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute />,
      children: DashboardRoutes,
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: AuthRoutes,
    },
  ])
  return <RouterProvider router={router}></RouterProvider>
}

export default AppRoutes
