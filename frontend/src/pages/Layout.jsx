import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation";

const primaryNav = [
  { title: "Home", url: "/" },
  { title: "Gallery", url: "/gallery" },
  { title: "Pricing", url: "/pricing" },
  // { title: "Booking", url: "/booking" },
  // { title: "Login", url: "/login" },
  // { title: "Register", url: "/register" },
  { title: "Contact", url: "/form4" },
  // { title: "Logout", url: "/logout" },
  // { title: "My Bookings", url: "/mybookings" },
];

const Layout = () => {
  const navItems = localStorage.getItem("access_token")
    ? [...primaryNav, { title: "Logout", url: "/logout" }]
    : [
        ...primaryNav,
        { title: "Login", url: "/login" },
        { title: "Register", url: "/register" },
      ];

  return (
    <>
      <Navigation className="NavigationBar" navItems={navItems} />
      <Outlet />
    </>
  );
};
export default Layout;
