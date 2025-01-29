import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layouts = () => {
  return (
    <div className="font-kanit">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default Layouts;
