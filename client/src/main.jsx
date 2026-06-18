import ReactDOM from "react-dom/client"
import "./index.css"
import { Toaster } from "react-hot-toast"
import { Provider } from "react-redux"
import AppRoutes from "./app/routes/AppRoutes"
import { store } from "./app/store"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Toaster />
    <AppRoutes />
  </Provider>,
)
