import { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    } else {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      if (decodedToken.role !== "teacher") {
        navigate("/");
      }
    }
  }, [navigate]);

  return <>{children}</>;
};

AdminRoute.propTypes = {
  children: PropTypes.node.isRequired, // กำหนดให้ children เป็น prop ที่ต้องมีและเป็นชนิด node
};

export default AdminRoute;
