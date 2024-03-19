import { createBrowserRouter, Form, RouterProvider } from "react-router-dom";
import { useAuth } from "../AuthContext";
import Layout from "../pages/Layout";
import Booking from "../routes/Booking";
import Register, { action as registeraction } from "../routes/Register";
import Home from "../routes/Home";
import Error from "../pages/ErrorPage";
import Login, { action as loginAction } from "../routes/Login";

import Logout, { loader as logoutLoader } from "../routes/Logout";
import ClientBookings, {
  loader as bookingLoader,
} from "../routes/ClientBookings";
import ProtectedRouteLayout from "../pages/ProtectedLayout";
import FilloutForm, { action as FormAction } from "../routes/Form";
const Routes = () => {
  const { isAuth } = useAuth();

  const publicRoutes = [
    {
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
          action: loginAction,
        },
        {
          path: "/logout",
          element: <Logout />,
          loader: logoutLoader,
        },
        {
          path: "/register",
          element: <Register />,
          action: registeraction,
        },

        {
          path: "/Booking",
          element: <Booking />,
        },
      ],
    },
  ];

  const protectedRoutes = [
    {
      element: <ProtectedRouteLayout />,
      children: [
        {
          path: "/myBookings",
          element: <ClientBookings />,
          loader: bookingLoader,
        },
        {
          path: "/form",
          element: <FilloutForm />,
          action: FormAction,
        },
      ],
    },
  ];

  const router = createBrowserRouter([
    ...publicRoutes,
    ...(!isAuth ? protectedRoutes : []),
    ...protectedRoutes,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
