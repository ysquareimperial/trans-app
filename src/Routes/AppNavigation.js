import { useRoutes } from "react-router-dom";
import AdminHome from "../AdminDashboard/AdminHome";
import AllUsers from "../AdminDashboard/AllUsers";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import AppIndex from "./AppIndex";

function AppNavigation() {
  let element = useRoutes([
    {
      path: "/",
      element: <Login />,
      children: [{ index: true }],
    },
    {
      element: <AppIndex />,
      children: [
        { index: true, element: <AdminHome /> },
        {
          path: "admin-home",
          element: <AdminHome />,
        },
        {
          path: "/all-users",
          element: <AllUsers />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return element;
}
export default AppNavigation;
