import { useEffect, useState } from "react";
import edit_user from "../assets/edit_user.png";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Profile() {
  const [profile, setProfile] = useState([]);

  const fetchProfile = () => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:3000/api/profile", {
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
    <div className="bg-[#d9d9d9]">
      <div className="flex">
        <div className="flex justify-center w-full mx-[16px] md:mx-[77px] mb-[67px] mt-[48px] rounded-[20px] border border-[#e9e9e9] bg-white ">
          <div className="flex flex-col items-center w-full">
            <div className="flex items-center w-full h-[42px] px-[33px] py-[7px] rounded-tl-[20px] rounded-tr-[20px] bg-[#a01f1f]">
              <svg
                width={30}
                height={30}
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[30px] h-[30px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M26.6941 6.16642L15.4441 2.41642C15.156 2.31916 14.844 2.31916 14.5559 2.41642L3.30585 6.16642C3.03742 6.25532 2.80202 6.42309 2.63039 6.64782C2.45875 6.87255 2.35886 7.14381 2.34374 7.42618C2.34245 7.45077 2.34245 7.47542 2.34374 7.50001V16.875C2.34374 17.248 2.4919 17.6057 2.75562 17.8694C3.01935 18.1331 3.37703 18.2813 3.74999 18.2813C4.12295 18.2813 4.48064 18.1331 4.74436 17.8694C5.00809 17.6057 5.15624 17.248 5.15624 16.875V9.45118L7.93476 10.377C7.07244 12.0275 6.81619 13.9282 7.2106 15.7483C7.60501 17.5683 8.6251 19.1924 10.0934 20.3379C8.17198 21.2854 6.54588 22.7397 5.39062 24.5438C5.28658 24.6984 5.21432 24.8721 5.17803 25.0549C5.14174 25.2377 5.14215 25.4259 5.17923 25.6086C5.2163 25.7912 5.28932 25.9646 5.39402 26.1188C5.49872 26.273 5.63302 26.4048 5.78912 26.5066C5.94521 26.6084 6.11999 26.6782 6.30329 26.7119C6.48659 26.7456 6.67475 26.7425 6.85684 26.7028C7.03893 26.6631 7.21131 26.5876 7.36397 26.4807C7.51663 26.3738 7.64652 26.2376 7.74609 26.0801C9.41835 23.5067 12.0703 22.0313 15 22.0313C17.9297 22.0313 20.5816 23.5067 22.2598 26.0801C22.3593 26.2376 22.4892 26.3738 22.6419 26.4807C22.7945 26.5876 22.9669 26.6631 23.149 26.7028C23.3311 26.7425 23.5193 26.7456 23.7026 26.7119C23.8859 26.6782 24.0606 26.6084 24.2167 26.5066C24.3728 26.4048 24.5071 26.273 24.6118 26.1188C24.7165 25.9646 24.7895 25.7912 24.8266 25.6086C24.8637 25.4259 24.8641 25.2377 24.8278 25.0549C24.7915 24.8721 24.7193 24.6984 24.6152 24.5438C23.4589 22.7376 21.8306 21.2819 19.9066 20.3344C21.3749 19.1889 22.395 17.5648 22.7894 15.7447C23.1838 13.9247 22.9275 12.024 22.0652 10.3734L26.6941 8.83009C26.9738 8.73653 27.2169 8.55743 27.3892 8.31811C27.5615 8.0788 27.6542 7.79138 27.6542 7.49649C27.6542 7.20161 27.5615 6.91419 27.3892 6.67488C27.2169 6.43556 26.9738 6.25646 26.6941 6.1629V6.16642ZM15 5.22892L21.8027 7.50001L15 9.76759L8.20312 7.50001L15 5.22892ZM20.1562 14.0625C20.1564 14.8634 19.97 15.6533 19.6118 16.3697C19.2536 17.086 18.7334 17.709 18.0925 18.1894C17.4517 18.6697 16.7077 18.9942 15.9197 19.137C15.1316 19.2799 14.3211 19.2372 13.5524 19.0124C12.7838 18.7875 12.078 18.3867 11.4912 17.8417C10.9043 17.2967 10.4525 16.6225 10.1715 15.8725C9.89051 15.1225 9.78809 14.3173 9.87237 13.5209C9.95665 12.7244 10.2253 11.9586 10.657 11.284L14.5559 12.5836C14.844 12.6804 15.156 12.6804 15.4441 12.5836L19.343 11.284C19.8747 12.1131 20.157 13.0775 20.1562 14.0625Z"
                  fill="white"
                />
              </svg>
              <p className="ml-[5px] text-white font-semibold text-xl">
                ข้อมูลนักศึกษา
              </p>
            </div>
            {/* Image */}
            <div className="flex space-x-[-39px] mt-[36px]">
              <img src={edit_user} />
            </div>
            <div className="flex space-x-[-39px]">
              {/* Header */}
              <p className="mt-[15px] text-[#9e1f1f] text-[24px] md:text-[28px] font-bold">
                {profile.title}
                {profile.firstname} {profile.lastname}
              </p>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-y-[15px] lg:gap-x-[200px] mx-auto mt-[36px]">
              <div className="md:mt-0 text-gray-800 text-base font-semibold">
                รหัสนักศึกษา
              </div>
              <div className="text-gray-600 font-medium text-base">
                {profile.user_id}
              </div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold">
                ชื่อ-นามสกุล
              </div>
              <div className="text-gray-600 font-medium text-base">
                {profile.title}
                {profile.firstname} {profile.lastname}
              </div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold">
                ชื่อเล่น
              </div>
              <div className=" text-gray-600 font-medium text-base">
                {profile.nickname}
              </div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold ">
                วัน/เดือน/ปีเกิด
              </div>
              <div className="text-gray-600 font-medium text-base">
                {new Date(profile.birthday).toLocaleDateString("th-TH", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold ">
                รุ่น
              </div>
              <div className="text-gray-600 font-medium text-base">
                {profile.generation}
              </div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold ">
                Github
              </div>
              <div className="text-gray-600 font-medium text-base">
                {profile.github}
              </div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold ">
                สถานะ
              </div>
              <div className="text-gray-600 font-medium text-base">
                {profile.status}
              </div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold ">
                โรงเรียนเดิม
              </div>
              <div className="text-gray-600 font-medium text-base">
                {profile.original_school}
              </div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold ">
                เกรดเฉลี่ย
              </div>
              <div className="text-gray-600 font-medium text-base">
                {profile.gpax}
              </div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold ">
                ที่อยู่
              </div>
              <div className="text-gray-600 font-medium text-base">
                {profile.address}
              </div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold ">
                เบอร์โทรศัพท์
              </div>
              <div className="text-gray-600 font-medium text-base">
                {profile.tel}
              </div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold ">
                Email
              </div>
              <div className="text-gray-600 font-medium text-base">
                {profile.email}
              </div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold ">
                Facebook
              </div>
              <div className="text-gray-600 font-medium text-base">
                {profile.facebook}
              </div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold ">
                เบอร์ติดต่อฉุกเฉิน
              </div>
              <div className="text-gray-600 font-medium text-base">
                {profile.emergency_tel}
              </div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold ">
                ความสัมพันธ์กับนักศึกษา
              </div>
              <div className="text-gray-600 font-medium text-base">
                {profile.relationship}
              </div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold ">
                โรคประจำตัว
              </div>
              <div className="text-gray-600 font-medium text-base">
                {profile.congenital_disease}
              </div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold ">
                สิ่งที่แพ้
              </div>
              <div className="text-gray-600 font-medium text-base">
                {profile.allergic_thing}
              </div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold ">
                สิทธิการรักษาพยาบาล
              </div>
              <div className="text-gray-600 font-medium text-base">
                {profile.health_coverage}
              </div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold ">
                โรงพยาบาลที่ใช้สิทธิการรักษา
              </div>
              <div className="text-gray-600 font-medium text-base">
                {profile.health_coverage_place}
              </div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold">
                ข้อมูลการเกณฑ์ทหาร
              </div>
              <div className="text-gray-600 font-medium text-base">
                {profile.military_status}
              </div>
            </div>
            <div className="mt-[36px] mb-[56.96px]">
              <Link to={`/profile/edit/${profile.user_id}`} className="btn btn-warning gap-[5px] w-full p-2.5 rounded-full">
                <svg
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M12 3.03833H5C4.46957 3.03833 3.96086 3.24904 3.58579 3.62412C3.21071 3.99919 3 4.5079 3 5.03833V19.0383C3 19.5688 3.21071 20.0775 3.58579 20.4525C3.96086 20.8276 4.46957 21.0383 5 21.0383H19C19.5304 21.0383 20.0391 20.8276 20.4142 20.4525C20.7893 20.0775 21 19.5688 21 19.0383V12.0383"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.3751 2.66331C18.7729 2.26549 19.3125 2.04199 19.8751 2.04199C20.4377 2.04199 20.9773 2.26549 21.3751 2.66331C21.7729 3.06114 21.9964 3.6007 21.9964 4.16331C21.9964 4.72592 21.7729 5.26549 21.3751 5.66331L12.3621 14.6773C12.1246 14.9146 11.8313 15.0882 11.5091 15.1823L8.63609 16.0223C8.55005 16.0474 8.45883 16.0489 8.372 16.0267C8.28517 16.0044 8.20592 15.9592 8.14254 15.8959C8.07916 15.8325 8.03398 15.7532 8.01174 15.6664C7.98949 15.5796 7.991 15.4884 8.01609 15.4023L8.85609 12.5293C8.95062 12.2074 9.12463 11.9144 9.36209 11.6773L18.3751 2.66331Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-white font-semibold text-xl">แก้ไขข้อมูล</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}