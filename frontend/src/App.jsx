import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./routes/Home";
import Booking from "./routes/Booking";
import ErrorPage from "./pages/ErrorPage";
import { AuthProvider } from "./AuthContext";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Login, { action as loginAction } from "./routes/Login";
import Register, { action as registeraction } from "./routes/Register";
import Logout, { loader as logoutLoader } from "./routes/Logout";
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
      {
        path: "/logout",
        element: <Logout />,
        loader: logoutLoader,
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
