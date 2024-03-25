import { createBrowserRouter, Form, RouterProvider } from "react-router-dom";
import { useAuth } from "../AuthContext";
import Layout from "../pages/Layout";
import Booking from "./Booking";
import Register, { action as registeraction } from "./Register";
import Home from "./Home";
import Error from "../pages/ErrorPage";
import Login, { action as loginAction } from "./Login";
import Gallery from "./Gallery";
import JaviGallery from "./JaviPage";
import KuwaitGallery from "./KuwaitPage";
import YasGallery from "./YasminePage";
import MaxPatchGallery from "./MaxPatchPage";
import Logout, { loader as logoutLoader } from "./Logout";
// import ClientBookings, { loader as bookingLoader } from "./ClientBookings";
import ProtectedRouteLayout from "../pages/ProtectedLayout";
import FilloutForm, { action as FormAction } from "./Form";
import Pricing from "./Pricing";
import Checkout from "./Checkout";
// import Return from "./Return";
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
        {
          path: "/Gallery",
          element: <Gallery />,
        },
        {
          path: "/Pricing",
          element: <Pricing />,
        },
        {
          path: "/JaviPage",
          element: <JaviGallery />,
        },
        {
          path: "/YasminePage",
          element: <YasGallery />,
        },
        {
          path: "/KuwaitPage",
          element: <KuwaitGallery />,
        },
        {
          path: "/max_patch",
          element: <MaxPatchGallery />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        // {
        //   path: "/return",
        //   element: <Return />,
        // },
      ],
    },
  ];

  const protectedRoutes = [
    {
      element: <ProtectedRouteLayout />,
      children: [
        // {
        //   path: "/myBookings",
        //   element: <ClientBookings />,
        //   loader: bookingLoader,
        //   errorElement: <Error />,
        // },
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
