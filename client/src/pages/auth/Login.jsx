import se_logo from "../../assets/se_logo.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://140.245.47.154/api/auth/login",
        {
          username,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);
      Swal.fire({
        icon: "success",
        title: "เข้าสู่ระบบสำเร็จ!",
        customClass: {
          title: 'font-kanit',
        },
      }).then(() => {
        navigate("/dashboard");
      });
    } catch {
      Swal.fire({
        icon: "error",
        title: "ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง",
        customClass: {
          title: 'font-kanit',
        },
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-dvh md:h-dvh bg-[#d9d9d9] font-kanit">
      <div className="flex flex-col justify-center items-center md:w-[624px] xl:w-[1248px] h-[445px] xl:px-[131px] py-[65px] mx-auto">
        <div
          className="flex items-center justify-center w-0 md:w-[700px] xl:w-[1248px] h-[445px] rounded-[20px] bg-white"
          style={{ boxShadow: "5px 5px 100px 4px rgba(0,0,0,0.25)" }}
        >
          {/* Image Desktop */}
          <img
            src={se_logo}
            className="xl:w-[332px] xl:h-[315px] mx-auto rounded-[20px]"
          />
          {/* Image Mobile */}
          <div className="w-[340px] md:w-[420px] xl:w-[624px] md:h-[445px] rounded-[20px] md:rounded-tl-[0px] md:rounded-bl-[0px] bg-[#9f1920]">
            <img
              src={se_logo}
              className="md:hidden h-[100px] w-[100px] mt-[32px] mx-auto"
            />
            <div className="my-[32px] md:my-[45px] text-white text-4xl font-semibold text-center ">
              ลงชื่อเข้าใช้งาน
            </div>
            {/* Form */}
            <form
              onSubmit={handleLogin}
              className="flex flex-col gap-[12px] mx-[30px] md:mx-[40px] xl:mx-[90px]"
            >
              <div className="w-full md:w-[445px] text-white text-medium font-semibold">
                ชื่อผู้ใช้งาน
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input input-bordered w-full h-[45px] rounded-full"
              />
              <div className="w-[280px] text-white text-medium font-semibold">
                รหัสผ่าน
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full h-[45px] rounded-full"
              />
              <button type="submit" className="w-full h-[45px] mt-[32px] mb-[45px] rounded-full bg-[#650005] text-white font-semibold text-xl">
                เข้าสู่ระบบ
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
