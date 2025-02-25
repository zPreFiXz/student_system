import { Link, useNavigate } from "react-router-dom";
import se_logo from "../assets/se_logo.png";
import user from "../assets/user.png";
import { links } from "../utils/links";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [profile, setProfile] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const fetchProfile = () => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:3000/api/profile/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="flex items-center justify-between h-[65px] px-[20px] md:px-[39px] bg-[#a01f1f]">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img className="w-14 h-[54px] rounded-[20px]" src={se_logo} />
        <div className="hidden md:block text-[#fba01d] font-semibold text-2xl">
          ระบบฐานข้อมูลนักศึกษาสาขาวิชา
        </div>
      </Link>
      <div className="flex items-center gap-2">
        <img src={user} />
        {/* Dropdown */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn p-1 bg-transparent hover:bg-[#8b1b1b] border-none"
          >
            <p className="hidden md:block text-white font-medium text-xl">
              {profile.firstname} {profile.lastname}
            </p>
            <svg
              width={16}
              height={15}
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[15px] h-[15px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M7.2941 10.4438L2.79785 5.30438C2.26723 4.69969 2.69848 3.75 3.50379 3.75H12.4963C12.6765 3.74985 12.853 3.80164 13.0045 3.89919C13.1561 3.99674 13.2763 4.13591 13.3508 4.30002C13.4253 4.46414 13.4509 4.64625 13.4245 4.82454C13.3982 5.00283 13.321 5.16975 13.2022 5.30531L8.70598 10.4428C8.61798 10.5435 8.50946 10.6242 8.38771 10.6795C8.26595 10.7348 8.13377 10.7634 8.00004 10.7634C7.86631 10.7634 7.73413 10.7348 7.61238 10.6795C7.49062 10.6242 7.3821 10.5435 7.2941 10.4428V10.4438Z"
                fill="white"
              />
            </svg>
          </div>
          {/* Dropdown Contents */}
          <ul
            tabIndex={0}
            className="dropdown-content menu w-52 p-2 z-[1] rounded-box bg-base-100 shadow"
          >
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
            <li>
              <button onClick={handleLogout}>ออกจากระบบ</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
