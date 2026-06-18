import Dashboard from "@/features/dashboard/ui/pages/Dashboard"

const DashboardRoutes = [
  {
    path: "",
    element: <Dashboard />,
  },
  {
    path: "batch/id",
    element: <>batch page</>,
  },
  {
    path: "profile",
    element: <>profile page</>,
  },
]

export default DashboardRoutes
