import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation";

const primaryNav = [
  { title: "Home", url: "/" },
  { title: "Gallery", url: "/gallery" },
  { title: "Pricing", url: "/pricing" },
  // { title: "Booking", url: "/booking" },
  { title: "Login", url: "/login" },
  { title: "Register", url: "/register" },
  { title: "Logout", url: "/logout" },
  // { title: "My Bookings", url: "/mybookings" },
  { title: "Form", url: "/form4" },
];

const Layout = () => {
  return (
    <>
      <Navigation navItems={primaryNav} />
      <Outlet />
    </>
  );
};
export default Layout;
