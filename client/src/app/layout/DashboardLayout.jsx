import { Outlet } from "react-router"
import Navbar from "@/features/dashboard/ui/components/Navbar"

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default DashboardLayout
