import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation";

const primaryNav = [
  { title: "Home", url: "/" },
  { title: "Booking", url: "/booking" },
  { title: "login", url: "/login" },
  { title: "register", url: "/register" },
  { title: "logout", url: "/logout" },
  { title: "My Bookings", url: "/mybookings" },
  { title: "Form", url: "/form" },
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
