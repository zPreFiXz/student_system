import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Dashboard() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedYear, setSelectedYear] = useState("2565");
  const [limit, setLimit] = useState(10);
  const [roleAdmin, setRoleAdmin] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProfiles = (year) => {
    const token = localStorage.getItem("token");

    axios
      .get("http://140.245.47.154/api/profiles", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const yearPrefix = year.slice(-2);
        const filteredProfiles = response.data.filter((profile) =>
          profile.user_id.startsWith(yearPrefix)
        );

        setProfiles(filteredProfiles);
        setLoading(true);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
        setLoading(true);
      });
  };

  const fetchProfileAdmin = () => {
    const token = localStorage.getItem("token");

    axios
      .get("http://140.245.47.154/api/admin/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setRoleAdmin(response.data);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
  };

  useEffect(() => {
    fetchProfiles(selectedYear);
    fetchProfileAdmin();
  }, [selectedYear, limit]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (startIndex + limit < profiles.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProfiles = profiles.filter((profile) =>
    Object.values(profile)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * limit;
  const displayedProfiles = filteredProfiles.slice(
    startIndex,
    startIndex + limit
  );

  const handleDelete = (user_id) => {
    Swal.fire({
      title: "คุณต้องการลบข้อมูลนี้ไหม?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      customClass: {
        title: "font-kanit",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const token = localStorage.getItem("token");
        axios
          .delete(`http://140.245.47.154api/profiles/${user_id}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "ลบข้อมูลสำเร็จ!",
              customClass: {
                title: "font-kanit",
              },
            });
            setProfiles(
              profiles.filter((profile) => profile.user_id !== user_id)
            );
          })
          .catch((error) => {
            console.error("Error deleting profile:", error);
          });
      }
    });
  };

  return (
    <div className={`w-full h-[1400px] 2xl:h-screen bg-[#d9d9d9]`}>
      <div className="flex px-[16px] md:px-[96px]">
        <div
          className="flex justify-center h-full w-full mb-[67px] mt-[48px] rounded-[20px] bg-white"
          style={{ boxShadow: "5px 5px 100px 4px rgba(0,0,0,0.25)" }}
        >
          <div className="flex flex-col xl:justify-center items-center w-full">
            <div className="flex items-center w-full h-[42px] px-[33px] py-[7px] rounded-tl-[20px] rounded-tr-[20px] bg-[#a01f1f]">
              <svg
                width={28}
                height={28}
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[31px] h-[31px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M23.3334 7.58332C23.3334 10.1617 19.1544 12.25 14 12.25C8.84569 12.25 4.66669 10.1617 4.66669 7.58332C4.66669 5.00499 8.84569 2.91666 14 2.91666C19.1544 2.91666 23.3334 5.00499 23.3334 7.58332ZM20.7294 12.7493C18.844 13.552 16.4932 14 14 14C11.2094 14 8.59835 13.4377 6.61735 12.4483C5.91228 12.1022 5.25632 11.664 4.66669 11.1452V21.5833C4.66669 24.1617 8.84569 26.25 14 26.25C14.6448 26.25 15.2709 26.2185 15.8784 26.1555C15.4122 25.4477 15.1647 24.6183 15.1667 23.7708V23.6507C15.1664 23.2258 15.2499 22.805 15.4123 22.4124C15.5748 22.0198 15.8131 21.6632 16.1136 21.3628C16.4141 21.0624 16.7709 20.8242 17.1635 20.6619C17.5562 20.4995 17.977 20.4162 18.4019 20.4167H18.725C18.2604 19.9616 17.9112 19.402 17.7065 18.7847C17.5018 18.1674 17.4475 17.5101 17.5481 16.8675C17.6488 16.225 17.9015 15.6157 18.2852 15.0906C18.6689 14.5654 19.1725 14.1395 19.754 13.8483C20.2114 13.6185 20.6057 13.2463 20.7294 12.7493ZM24.5 17.5C24.5 18.2735 24.1927 19.0154 23.6457 19.5624C23.0988 20.1094 22.3569 20.4167 21.5834 20.4167C20.8098 20.4167 20.0679 20.1094 19.521 19.5624C18.974 19.0154 18.6667 18.2735 18.6667 17.5C18.6667 16.7264 18.974 15.9846 19.521 15.4376C20.0679 14.8906 20.8098 14.5833 21.5834 14.5833C22.3569 14.5833 23.0988 14.8906 23.6457 15.4376C24.1927 15.9846 24.5 16.7264 24.5 17.5ZM26.8334 23.7708C26.8334 25.5862 25.333 27.4167 21.5834 27.4167C17.8337 27.4167 16.3334 25.5932 16.3334 23.7708V23.6507C16.3334 22.5073 17.2597 21.5833 18.4019 21.5833H24.7649C25.9082 21.5833 26.8334 22.5085 26.8334 23.6507V23.7708Z"
                  fill="white"
                />
              </svg>
              <p className="ml-[5px] text-white font-semibold text-xl">
                รายชื่อนักศึกษาทั้งหมด
              </p>
            </div>
            {/* Year */}
            <div className="flex items-center gap-[7px] w-full mt-[31px] px-[30px] md:px-[69px]">
              <p>ปีการศึกษา</p>
              <select
                className="select select-bordered select-sm w-auto h-[33px] rounded-full"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option>2565</option>
                <option>2566</option>
                <option>2567</option>
              </select>
            </div>
            {/* Entries per page */}
            <div className="w-full mt-[36px] px-[30px] md:px-[69px]">
              <div className="md:flex">
                <div className="flex items-center">
                  <p>แสดง</p>
                  <select
                    className="select select-bordered select-sm w-auto h-[33px] mx-[12px] rounded-full"
                    value={limit}
                    onChange={(e) => setLimit(Number(e.target.value))}
                  >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                  </select>
                  <p>รายการ</p>
                </div>
                <div className="relative md:w-1/2 mt-[36px] md:mt-0 md:ml-[16px]">
                  <input
                    type="text"
                    className="input input-bordered w-full h-[33px] pl-[36px] rounded-full"
                    placeholder="ค้นหา..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M17.5 10.5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                {roleAdmin.role === "teacher" ? (
                  <Link
                    to="/AddProfile"
                    className="flex items-center justify-center w-[100px] h-[35px] gap-[4px] mt-5 md:mt-0 md:ml-10 rounded-lg bg-success"
                  >
                    <svg
                      width={18}
                      height={16}
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[17px] h-4"
                    >
                      <g clipPath="url(#clip0_2077_116)">
                        <path
                          d="M8.62504 6C8.06146 6 7.52095 6.21071 7.12244 6.58579C6.72392 6.96086 6.50004 7.46957 6.50004 8C6.50004 8.53043 6.72392 9.03914 7.12244 9.41421C7.52095 9.78929 8.06146 10 8.62504 10C9.18863 10 9.72913 9.78929 10.1276 9.41421C10.5262 9.03914 10.75 8.53043 10.75 8C10.75 7.46957 10.5262 6.96086 10.1276 6.58579C9.72913 6.21071 9.18863 6 8.62504 6ZM8.62504 11.3333C7.68573 11.3333 6.7849 10.9821 6.1207 10.357C5.45651 9.7319 5.08337 8.88406 5.08337 8C5.08337 7.11595 5.45651 6.2681 6.1207 5.64298C6.7849 5.01786 7.68573 4.66667 8.62504 4.66667C9.56435 4.66667 10.4652 5.01786 11.1294 5.64298C11.7936 6.2681 12.1667 7.11595 12.1667 8C12.1667 8.88406 11.7936 9.7319 11.1294 10.357C10.4652 10.9821 9.56435 11.3333 8.62504 11.3333ZM8.62504 3C5.08337 3 2.05879 5.07333 0.833374 8C2.05879 10.9267 5.08337 13 8.62504 13C12.1667 13 15.1913 10.9267 16.4167 8C15.1913 5.07333 12.1667 3 8.62504 3Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                    <p className="text-white font-bold">เพิ่มข้อมูล</p>
                  </Link>
                ) : null}
              </div>
              <div
                className="overflow-x-auto"
                style={{
                  filter: "drop-shadow(5px 5px 100px rgba(0,0,0,0.25))",
                }}
              >
                {/* Table */}
                <table className="table-auto overflow-hidden xl:w-full mt-[36px] mx-auto border-separate border-spacing-0 rounded-[20px] bg-[#d9d9d9]">
                  <thead className="bg-[#d9d9d9]">
                    <tr>
                      <th className="whitespace-nowrap px-4 py-2 text-left">
                        รหัสนักศึกษา
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left">
                        ชื่อ
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left">
                        นามสกุล
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left">
                        ชื่อเล่น
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left">
                        วันเดือนปีเกิด
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left">
                        เบอร์โทรศัพท์
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left">
                        อีเมล
                      </th>
                      <th className="px-4 py-2"></th>
                    </tr>
                  </thead>
                  {/* Body Table */}
                  <tbody className="bg-white/[0.87]">
                    {loading ? (
                      displayedProfiles.length > 0 ? (
                        displayedProfiles.map((profile, index) => (
                          <tr key={index}>
                            <td className="px-4 py-2 font-light whitespace-nowrap">
                              {profile.user_id}
                            </td>
                            <td className="px-4 py-2 font-light whitespace-nowrap ">
                              {profile.firstname}
                            </td>
                            <td className="px-4 py-2 font-light whitespace-nowrap">
                              {profile.lastname}
                            </td>
                            <td className="px-4 py-2 font-light whitespace-nowrap">
                              {profile.nickname}
                            </td>
                            <td className="px-4 py-2 font-light whitespace-nowrap">
                              {new Date(profile.birthday).toLocaleDateString(
                                "th-TH",
                                {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                }
                              )}
                            </td>
                            <td className="px-4 py-2 font-light whitespace-nowrap">
                              {profile.tel}
                            </td>
                            <td className="px-4 py-2 font-light break-words">
                              {profile.email}
                            </td>
                            <td className="flex gap-2 px-4 py-2">
                              <div className="flex">
                                <Link
                                  to={`/profile/${profile.user_id}`}
                                  className="flex items-center justify-center gap-[4px] w-[89px] h-[35px] mx-auto rounded-lg bg-[#9f2020]"
                                >
                                  <svg
                                    width={18}
                                    height={16}
                                    viewBox="0 0 18 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-[17px] h-4"
                                  >
                                    <g clipPath="url(#clip0_2077_116)">
                                      <path
                                        d="M8.62504 6C8.06146 6 7.52095 6.21071 7.12244 6.58579C6.72392 6.96086 6.50004 7.46957 6.50004 8C6.50004 8.53043 6.72392 9.03914 7.12244 9.41421C7.52095 9.78929 8.06146 10 8.62504 10C9.18863 10 9.72913 9.78929 10.1276 9.41421C10.5262 9.03914 10.75 8.53043 10.75 8C10.75 7.46957 10.5262 6.96086 10.1276 6.58579C9.72913 6.21071 9.18863 6 8.62504 6ZM8.62504 11.3333C7.68573 11.3333 6.7849 10.9821 6.1207 10.357C5.45651 9.7319 5.08337 8.88406 5.08337 8C5.08337 7.11595 5.45651 6.2681 6.1207 5.64298C6.7849 5.01786 7.68573 4.66667 8.62504 4.66667C9.56435 4.66667 10.4652 5.01786 11.1294 5.64298C11.7936 6.2681 12.1667 7.11595 12.1667 8C12.1667 8.88406 11.7936 9.7319 11.1294 10.357C10.4652 10.9821 9.56435 11.3333 8.62504 11.3333ZM8.62504 3C5.08337 3 2.05879 5.07333 0.833374 8C2.05879 10.9267 5.08337 13 8.62504 13C12.1667 13 15.1913 10.9267 16.4167 8C15.1913 5.07333 12.1667 3 8.62504 3Z"
                                        fill="white"
                                      />
                                    </g>
                                  </svg>
                                  <p className="text-white font-bold">
                                    ดูข้อมูล
                                  </p>
                                </Link>
                              </div>
                              {roleAdmin.role === "teacher" ? (
                                <div className="flex gap-2">
                                  <button
                                    onClick={() =>
                                      handleDelete(profile.user_id)
                                    }
                                    className="flex items-center justify-center gap-[4px] w-[89px] h-[35px] mx-auto rounded-lg bg-error"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="lucide lucide-trash-icon lucide-trash text-white"
                                    >
                                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                                      <path d="M3 6h18" />
                                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    </svg>
                                    <p className="text-white font-bold">ลบ</p>
                                  </button>
                                </div>
                              ) : null}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            className="px-4 py-2 font-light text-center"
                            colSpan={8}
                          >
                            ไม่มีข้อมูล
                          </td>
                        </tr>
                      )
                    ) : (
                      <tr>
                        <td
                          className="px-4 py-2 font-light text-center"
                          colSpan={8}
                        >
                          Loading...
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Pagiantion */}
            <div className="flex items-center justify-center gap-[12px] mt-[36px] mb-[67.96px]">
              <button
                className="text-[#9e9e9e] text-base"
                onClick={handlePrevious}
              >
                Previous
              </button>
              <div
                onClick={() => handlePageChange(1)}
                className={`px-[9px] py-2 rounded-lg ${
                  currentPage === 1 ? "bg-[#9e9e9e]" : "bg-[#e0e0e0]"
                }`}
              >
                <button className="flex items-center justify-center w-[13px] h-[15px] text-black text-sm">
                  1
                </button>
              </div>
              <div
                onClick={() => handlePageChange(2)}
                className={`px-[9px] py-2 rounded-lg ${
                  currentPage === 2 ? "bg-[#9e9e9e]" : "bg-[#e0e0e0]"
                }`}
              >
                <button className="flex items-center justify-center w-[13px] h-[15px] text-black text-sm">
                  2
                </button>
              </div>
              <button className="text-[#9e9e9e] text-base" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
