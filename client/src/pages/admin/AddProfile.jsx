import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AdminRoute from "../../routes/AdminRoute";

export default function AddProfile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    user_id: "",
    title: "",
    firstname: "",
    lastname: "",
    nickname: "",
    birthday: "",
    generation: "",
    github: "",
    status: "",
    image: "",
    original_school: "",
    gpax: "",
    address: "",
    tel: "",
    email: "",
    facebook: "",
    emergency_tel: "",
    relationship: "",
    congenital_disease: "",
    allergic_thing: "",
    health_coverage: "",
    health_coverage_place: "",
    military_status: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    axios
      .post("http://localhost:3000/api/profiles", profile, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "เพิ่มข้อมูลนักศึกษาสำเร็จ!",
          customClass: {
            title: "font-kanit",
          },
        });
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Error adding profile:", error);
        Swal.fire({
          icon: "error",
          title: "กรุณากรอกข้อมูลใหม่!",
          customClass: {
            title: "font-kanit",
          },
        });
      });
  };

  return (
    <AdminRoute>
      <div className="bg-[#d9d9d9]">
        <div className="flex">
          <div
            className="flex justify-center w-full mx-[16px] md:mx-[77px] mb-[67px] mt-[48px] rounded-[20px] bg-white"
            style={{ boxShadow: "5px 5px 100px 4px rgba(0,0,0,0.25)" }}
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center w-full"
            >
              <div className="flex items-center w-full h-[42px] px-[33px] py-[7px] rounded-tl-[20px] rounded-tr-[20px] bg-[#a01f1f]">
                <svg
                  width={31}
                  height={32}
                  viewBox="0 0 31 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[31px] h-[31px]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M28.0693 3.43079C27.4334 2.79504 26.5711 2.4379 25.672 2.4379C24.7728 2.4379 23.9105 2.79504 23.2746 3.43079L21.7802 4.92525L26.5748 9.71991L28.0693 8.22545C28.705 7.58961 29.0622 6.72727 29.0622 5.82812C29.0622 4.92897 28.705 4.06664 28.0693 3.43079ZM25.2044 11.0904L20.4097 6.2957L9.55971 17.1457C8.76256 17.9425 8.17656 18.9253 7.85471 20.0055L6.82138 23.4736C6.77149 23.6409 6.76777 23.8187 6.81061 23.988C6.85345 24.1573 6.94126 24.3118 7.06475 24.4353C7.18823 24.5588 7.34281 24.6466 7.51211 24.6895C7.68141 24.7323 7.85914 24.7286 8.0265 24.6787L11.4946 23.6454C12.5748 23.3235 13.5576 22.7375 14.3544 21.9404L25.2044 11.0904Z"
                    fill="white"
                  />
                  <path
                    d="M6.78125 7.28125C5.75354 7.28125 4.76791 7.68951 4.04121 8.41621C3.31451 9.14291 2.90625 10.1285 2.90625 11.1562V24.7188C2.90625 25.7465 3.31451 26.7321 4.04121 27.4588C4.76791 28.1855 5.75354 28.5938 6.78125 28.5938H20.3438C21.3715 28.5938 22.3571 28.1855 23.0838 27.4588C23.8105 26.7321 24.2188 25.7465 24.2188 24.7188V17.9375C24.2188 17.6806 24.1167 17.4342 23.935 17.2525C23.7533 17.0708 23.5069 16.9688 23.25 16.9688C22.9931 16.9688 22.7467 17.0708 22.565 17.2525C22.3833 17.4342 22.2812 17.6806 22.2812 17.9375V24.7188C22.2812 25.2326 22.0771 25.7254 21.7138 26.0888C21.3504 26.4521 20.8576 26.6562 20.3438 26.6562H6.78125C6.26739 26.6562 5.77458 26.4521 5.41123 26.0888C5.04788 25.7254 4.84375 25.2326 4.84375 24.7188V11.1562C4.84375 10.6424 5.04788 10.1496 5.41123 9.78623C5.77458 9.42288 6.26739 9.21875 6.78125 9.21875H13.5625C13.8194 9.21875 14.0658 9.11669 14.2475 8.93501C14.4292 8.75333 14.5312 8.50693 14.5312 8.25C14.5312 7.99307 14.4292 7.74667 14.2475 7.56499C14.0658 7.38331 13.8194 7.28125 13.5625 7.28125H6.78125Z"
                    fill="white"
                  />
                </svg>
                <p className="ml-[5px] text-white font-semibold text-xl">
                  เพิ่มข้อมูลนักศึกษา
                </p>
              </div>
              <div className="md:grid grid-cols-2 md:w-[70%] mx-auto mt-[36px]">
                <div className="md:w-[90%] mx-auto">
                  <div className="font-semibold text-base">รหัสนักศึกษา</div>
                  <input
                    type="text"
                    name="user_id"
                    value={profile.user_id}
                    onChange={handleChange}
                    className="input input-bordered w-full h-[33px] mt-[11px] rounded-full disabled:placeholder:text-[#909090]"
                  />
                </div>
                <div className="md:w-[90%] mx-auto">
                  <div className="mt-[13px] md:mt-0 font-semibold text-base">
                    คำนำหน้าชื่อ
                  </div>
                  <select
                    name="title"
                    value={profile.title}
                    onChange={handleChange}
                    className="select select-bordered select-sm w-full h-[33px] mt-[11px] rounded-full"
                  >
                    <option value="" disabled>
                      กรุณาเลือก
                    </option>
                    <option value="นาย">นาย</option>
                    <option value="นาง">นาง</option>
                    <option value="นางสาว">นางสาว</option>
                  </select>
                </div>
                <div className="md:w-[90%] mx-auto">
                  <div className="mt-[13px] font-semibold text-base">
                    ชื่อ (ภาษาไทย)
                  </div>
                  <input
                    type="text"
                    name="firstname"
                    value={profile.firstname}
                    onChange={handleChange}
                    className="input input-bordered w-full h-[33px] mt-[11px] rounded-full disabled:placeholder:text-[#909090]"
                  />
                </div>
                <div className="md:w-[90%] mx-auto">
                  <div className="mt-[13px] font-semibold text-base">
                    นามสกุล (ภาษาไทย)
                  </div>
                  <input
                    type="text"
                    name="lastname"
                    value={profile.lastname}
                    onChange={handleChange}
                    className="input input-bordered w-full h-[33px] mt-[11px] rounded-full disabled:placeholder:text-[#909090]"
                  />
                </div>
                <div className="md:w-[90%] mx-auto">
                  <div className="mt-[13px] font-semibold text-base">
                    ชื่อเล่น
                  </div>
                  <input
                    type="text"
                    name="nickname"
                    value={profile.nickname}
                    onChange={handleChange}
                    className="input input-bordered w-full h-[33px] mt-[11px] rounded-full"
                  />
                </div>
                <div className="md:w-[90%] mx-auto">
                  <div className="mt-[13px] font-semibold text-base">
                    วัน/เดือน/ปีเกิด
                  </div>
                  <input
                    type="date"
                    name="birthday"
                    value={profile.birthday}
                    onChange={handleChange}
                    className="input input-bordered w-full h-[33px] mt-[11px] rounded-full"
                  />
                </div>
                <div className="md:w-[90%] mx-auto">
                  <div className="mt-[13px] font-semibold text-base">รุ่น</div>
                  <input
                    type="text"
                    name="generation"
                    value={profile.generation}
                    onChange={handleChange}
                    className="input input-bordered w-full h-[33px] mt-[11px] rounded-full"
                  />
                </div>
                <div className="md:w-[90%] mx-auto">
                  <div className="mt-[13px] font-semibold text-base">
                    Github
                  </div>
                  <input
                    type="text"
                    name="github"
                    value={profile.github}
                    onChange={handleChange}
                    className="input input-bordered w-full h-[33px] mt-[11px] rounded-full"
                  />
                </div>
                <div className="md:w-[90%] mx-auto">
                  <div className="mt-[13px] font-semibold text-base">สถานะ</div>
                  <select
                    name="status"
                    value={profile.status}
                    onChange={handleChange}
                    className="select select-bordered select-sm w-full h-[33px] mt-[11px] rounded-full"
                  >
                    <option value="" disabled>
                      กรุณาเลือก
                    </option>
                    <option value="กำลังศึกษาอยู่">กำลังศึกษาอยู่</option>
                    <option value="พ้นสภาพนักศึกษา">พ้นสภาพนักศึกษา</option>
                  </select>
                </div>
                <div className="md:w-[90%] mx-auto">
                  <div className="mt-[13px] font-semibold text-base">
                    โรงเรียนเดิม
                  </div>
                  <input
                    type="text"
                    name="original_school"
                    value={profile.original_school}
                    onChange={handleChange}
                    className="input input-bordered w-full h-[33px] mt-[11px] rounded-full"
                  />
                </div>
                <div className="md:w-[90%] mx-auto ">
                  <div className="mt-[13px] font-semibold text-base">
                    เกรดเฉลี่ยที่จบ
                  </div>
                  <input
                    type="text"
                    name="gpax"
                    value={profile.gpax}
                    onChange={handleChange}
                    className="input input-bordered w-full h-[33px] mt-[11px] rounded-full"
                  />
                </div>
                <div className="md:w-[90%] mx-auto">
                  <div className="mt-[13px] font-semibold text-base">
                    ที่อยู่
                  </div>
                  <input
                    type="text"
                    name="address"
                    value={profile.address}
                    onChange={handleChange}
                    className="input input-bordered w-full h-[33px] mt-[11px] rounded-full"
                  />
                </div>
                <div className="md:w-[90%] mx-auto">
                  <div className="mt-[13px] font-semibold text-base">
                    เบอร์โทรศัพท์
                  </div>
                  <input
                    type="text"
                    name="tel"
                    value={profile.tel}
                    onChange={handleChange}
                    className="input input-bordered w-full h-[33px] mt-[11px] rounded-full"
                  />
                </div>
                <div className="mx-auto md:w-[90%]">
                  <div className="mt-[13px] font-semibold text-base">Email</div>
                  <input
                    type="text"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    className="input input-bordered w-full h-[33px] mt-[11px] rounded-full"
                  />
                </div>
                <div className="md:w-[90%] mx-auto">
                  <div className="mt-[13px] font-semibold text-base">
                    Facebook
                  </div>
                  <input
                    type="text"
                    name="facebook"
                    value={profile.facebook}
                    onChange={handleChange}
                    className="input input-bordered w-full h-[33px] mt-[11px] rounded-full"
                  />
                </div>
                <div className="md:w-[90%] mx-auto">
                  <div className="mt-[13px] font-semibold text-base">
                    เบอร์ติดต่อฉุกเฉิน
                  </div>
                  <input
                    type="text"
                    name="emergency_tel"
                    value={profile.emergency_tel}
                    onChange={handleChange}
                    className="input input-bordered w-full h-[33px] mt-[11px] rounded-full"
                  />
                </div>
                <div className="md:w-[90%] mx-auto">
                  <div className="mt-[13px] font-semibold text-base">
                    ความสัมพันธ์กับนักศึกษา
                  </div>
                  <input
                    type="text"
                    name="relationship"
                    value={profile.relationship}
                    onChange={handleChange}
                    className="input input-bordered w-full h-[33px] mt-[11px] rounded-full"
                  />
                </div>
                <div className="md:w-[90%] mx-auto">
                  <div className="mt-[13px] font-semibold text-base">
                    โรคประจำตัว
                  </div>
                  <input
                    type="text"
                    name="congenital_disease"
                    value={profile.congenital_disease}
                    onChange={handleChange}
                    className="input input-bordered w-full h-[33px] mt-[11px] rounded-full"
                  />
                </div>
                <div className="md:w-[90%] mx-auto">
                  <div className="mt-[13px] font-semibold text-base">
                    สิ่งที่แพ้
                  </div>
                  <input
                    type="text"
                    name="allergic_thing"
                    value={profile.allergic_thing}
                    onChange={handleChange}
                    className="input input-bordered w-full h-[33px] mt-[11px] rounded-full"
                  />
                </div>
                <div className="md:w-[90%] mx-auto">
                  <div className="mt-[13px] font-semibold text-base">
                    สิทธิการรักษาพยาบาล
                  </div>
                  <select
                    name="health_coverage"
                    value={profile.health_coverage}
                    onChange={handleChange}
                    className="select select-bordered select-sm w-full h-[33px] mt-[11px] rounded-full"
                  >
                    <option value="" disabled>
                      กรุณาเลือก
                    </option>
                    <option value="บัตรทอง">บัตรทอง</option>
                    <option value="ประกันสังคม">ประกันสังคม</option>
                    <option value="ประกันสุขภาพ">ประกันสุขภาพ</option>
                  </select>
                </div>
                <div className="md:w-[90%] mx-auto">
                  <div className="mt-[13px] font-semibold text-base">
                    โรงพยาบาลที่ใช้สิทธิการรักษา
                  </div>
                  <input
                    type="text"
                    name="health_coverage_place"
                    value={profile.health_coverage_place}
                    onChange={handleChange}
                    className="input input-bordered w-full h-[33px] mt-[11px] rounded-full"
                  />
                </div>
                <div className="md:w-[90%] mx-auto">
                  <div className="mt-[13px] font-semibold text-base">
                    ข้อมูลการเกณฑ์ทหาร
                  </div>
                  <select
                    name="military_status"
                    value={profile.military_status}
                    onChange={handleChange}
                    className="select select-bordered select-sm w-full h-[33px] mt-[11px] rounded-full"
                  >
                    <option value="" disabled>
                      กรุณาเลือก
                    </option>
                    <option value="ได้รับการเกณฑ์ทหารแล้ว">
                      ได้รับการเกณฑ์ทหารแล้ว
                    </option>
                    <option value="ยังไม่ได้รับการเกณฑ์ทหาร">
                      ยังไม่ได้รับการเกณฑ์ทหาร
                    </option>
                    <option value="ไม่ต้องเข้ารับการเกณฑ์ทหาร">
                      ไม่ต้องเข้ารับการเกณฑ์ทหาร
                    </option>
                    <option value="สำเร็จการศึกษาวิชาทหาร (รด.)">
                      สำเร็จการศึกษาวิชาทหาร (รด.)
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex gap-2 md:gap-9 mt-[45px] mb-[67.96px]">
                {/* Save Button */}
                <button
                  onClick={handleSubmit}
                  className="btn btn-success gap-[5px] w-[109px] p-2.5 rounded-full"
                >
                  <svg
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.5 2.03833C5.96957 2.03833 5.46086 2.24904 5.08579 2.62412C4.71071 2.99919 4.5 3.5079 4.5 4.03833V20.0383C4.5 20.5688 4.71071 21.0775 5.08579 21.4525C5.46086 21.8276 5.96957 22.0383 6.5 22.0383H18.5C19.0304 22.0383 19.5391 21.8276 19.9142 21.4525C20.2893 21.0775 20.5 20.5688 20.5 20.0383V6.45233C20.4999 5.92194 20.2891 5.41332 19.914 5.03833L17.5 2.62433C17.125 2.24923 16.6164 2.03844 16.086 2.03833H6.5ZM6.5 4.03833H16.086L18.5 6.45233V20.0383H6.5V4.03833ZM16.738 10.8313C16.8335 10.7391 16.9097 10.6287 16.9621 10.5067C17.0145 10.3847 17.0421 10.2535 17.0433 10.1207C17.0444 9.98795 17.0191 9.85627 16.9688 9.73338C16.9185 9.61048 16.8443 9.49883 16.7504 9.40493C16.6565 9.31104 16.5449 9.23679 16.422 9.18651C16.2991 9.13623 16.1674 9.11093 16.0346 9.11208C15.9018 9.11323 15.7706 9.14082 15.6486 9.19323C15.5266 9.24564 15.4162 9.32182 15.324 9.41733L11.082 13.6603L9.667 12.2453C9.4784 12.0632 9.2258 11.9624 8.9636 11.9647C8.7014 11.9669 8.45059 12.0721 8.26518 12.2575C8.07977 12.4429 7.9746 12.6937 7.97233 12.9559C7.97005 13.2181 8.07084 13.4707 8.253 13.6593L10.303 15.7103C10.4052 15.8125 10.5264 15.8936 10.6599 15.9489C10.7934 16.0042 10.9365 16.0327 11.081 16.0327C11.2255 16.0327 11.3686 16.0042 11.5021 15.9489C11.6356 15.8936 11.7568 15.8125 11.859 15.7103L16.738 10.8313Z"
                      fill="white"
                    />
                  </svg>
                  <p className="text-white font-semibold text-xl">บันทึก</p>
                </button>
                {/* Cancel Button */}
                <Link
                  to="/dashboard"
                  className="btn btn-error gap-[5px] w-[109px] p-2.5 rounded-full"
                >
                  <svg
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M19.5 3.03833H5.5C4.96957 3.03833 4.46086 3.24904 4.08579 3.62412C3.71071 3.99919 3.5 4.5079 3.5 5.03833V19.0383C3.5 19.5688 3.71071 20.0775 4.08579 20.4525C4.46086 20.8276 4.96957 21.0383 5.5 21.0383H19.5C20.0304 21.0383 20.5391 20.8276 20.9142 20.4525C21.2893 20.0775 21.5 19.5688 21.5 19.0383V5.03833C21.5 4.5079 21.2893 3.99919 20.9142 3.62412C20.5391 3.24904 20.0304 3.03833 19.5 3.03833ZM19.5 19.0383H5.5V5.03833H19.5V19.0383ZM17.5 8.43833L13.9 12.0383L17.5 15.6383L16.1 17.0383L12.5 13.4383L8.9 17.0383L7.5 15.6383L11.1 12.0383L7.5 8.43833L8.9 7.03833L12.5 10.6383L16.1 7.03833L17.5 8.43833Z"
                      fill="white"
                    />
                  </svg>
                  <p className="text-white font-semibold text-xl">ยกเลิก</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminRoute>
  );
}
