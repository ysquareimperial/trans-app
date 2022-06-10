import { useRoutes } from "react-router-dom";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

function AppNavigation() {
  let element = useRoutes([
    {
      path: "/",
      element: <Login />,
      children: [{ index: true }],
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return element;
}
export default AppNavigation;
