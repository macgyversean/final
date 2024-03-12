import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./routes/Home";
import Booking from "./routes/Booking";
import ErrorPage from "./pages/ErrorPage";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Login, { action as loginAction } from "./routes/Login";
import Register, { action as registeraction } from "./routes/Register";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Booking",
        element: <Booking />,
      },
      {
        path: "/login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "/register",
        element: <Register />,
        action: registeraction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
