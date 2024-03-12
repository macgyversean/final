import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./routes/Home";
import Booking from "./routes/Booking";
import ErrorPage from "./pages/ErrorPage";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Login from "./routes/Login";

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
        path: "/Login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
