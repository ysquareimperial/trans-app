import { useRoutes } from "react-router-dom";
import Login from "../Auth/Login";
import ShopCart from "../Shop/ShopCart";
import ShopItems from "../Shop/ShopItems";
import AppIndex from "./AppIndex";

function AppNavigation() {
  let element = useRoutes([
    {
      path: "/",
      element: <Login />,
      children: [
        { index: true, element: <ShopItems /> },
        {
          path: "/cart",
          element: <ShopCart />,
        },
      ],
    },
  ]);
  return element;
}
export default AppNavigation;
