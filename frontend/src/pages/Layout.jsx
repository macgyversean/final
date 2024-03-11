import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation";

const primaryNav = [{ title: "Home", url: "/" }];

const Layout = () => {
  return (
    <>
      <Navigation navItems={primaryNav} />
      <Outlet />
    </>
  );
};
export default Layout;
