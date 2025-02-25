import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layouts = () => {
  // Routes without navbar
  const location = useLocation();
  const hideNavbarRoutes = ["/login"];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="font-kanit">
      {showNavbar && <Navbar />}
      <Outlet />
    </div>
  );
};
export default Layouts;
