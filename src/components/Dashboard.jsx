import Navbar from "./Navbar";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div
          className="mx-[16px] md:mx-[77px] w-full h-[710px] rounded-[20px] bg-white mb-[77px]"
          style={{ boxShadow: "5px 5px 100px 4px rgba(0,0,0,0.25)" }}
        >
          <div className="flex items-center h-[42px] rounded-tl-[20px] rounded-tr-[20px] bg-[#a01f1f] gap-3">
            <svg
              width={28}
              height={28}
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 ml-[33px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M23.3334 7.58332C23.3334 10.1617 19.1544 12.25 14 12.25C8.84569 12.25 4.66669 10.1617 4.66669 7.58332C4.66669 5.00499 8.84569 2.91666 14 2.91666C19.1544 2.91666 23.3334 5.00499 23.3334 7.58332ZM20.7294 12.7493C18.844 13.552 16.4932 14 14 14C11.2094 14 8.59835 13.4377 6.61735 12.4483C5.91228 12.1022 5.25632 11.664 4.66669 11.1452V21.5833C4.66669 24.1617 8.84569 26.25 14 26.25C14.6448 26.25 15.2709 26.2185 15.8784 26.1555C15.4122 25.4477 15.1647 24.6183 15.1667 23.7708V23.6507C15.1664 23.2258 15.2499 22.805 15.4123 22.4124C15.5748 22.0198 15.8131 21.6632 16.1136 21.3628C16.4141 21.0624 16.7709 20.8242 17.1635 20.6619C17.5562 20.4995 17.977 20.4162 18.4019 20.4167H18.725C18.2604 19.9616 17.9112 19.402 17.7065 18.7847C17.5018 18.1674 17.4475 17.5101 17.5481 16.8675C17.6488 16.225 17.9015 15.6157 18.2852 15.0906C18.6689 14.5654 19.1725 14.1395 19.754 13.8483C20.2114 13.6185 20.6057 13.2463 20.7294 12.7493ZM24.5 17.5C24.5 18.2735 24.1927 19.0154 23.6457 19.5624C23.0988 20.1094 22.3569 20.4167 21.5834 20.4167C20.8098 20.4167 20.0679 20.1094 19.521 19.5624C18.974 19.0154 18.6667 18.2735 18.6667 17.5C18.6667 16.7264 18.974 15.9846 19.521 15.4376C20.0679 14.8906 20.8098 14.5833 21.5834 14.5833C22.3569 14.5833 23.0988 14.8906 23.6457 15.4376C24.1927 15.9846 24.5 16.7264 24.5 17.5ZM26.8334 23.7708C26.8334 25.5862 25.333 27.4167 21.5834 27.4167C17.8337 27.4167 16.3334 25.5932 16.3334 23.7708V23.6507C16.3334 22.5073 17.2597 21.5833 18.4019 21.5833H24.7649C25.9082 21.5833 26.8334 22.5085 26.8334 23.6507V23.7708Z"
                fill="white"
              />
            </svg>
            <p className="text-xl font-semibold text-white">
              รายชื่อนักศึกษาทั้งหมด
            </p>
          </div>
          <div className="flex items-center gap-[7px] mt-[31px] mx-[69px]">
            <p>ปีการศึกษา</p>
            <div className="flex items-center justify-center h-[35px] w-[76px] rounded-lg bg-[#e0e0e0] gap-[7px]">
              2567
              <svg
                width={8}
                height={8}
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-2 h-2"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M3.62351 5.57L1.22551 2.829C0.942505 2.5065 1.17251 2 1.60201 2H6.39801C6.49413 1.99992 6.58824 2.02754 6.66906 2.07957C6.74989 2.1316 6.814 2.20582 6.85373 2.29335C6.89346 2.38087 6.90711 2.478 6.89306 2.57309C6.87901 2.66818 6.83785 2.7572 6.77451 2.8295L4.37651 5.5695C4.32957 5.6232 4.2717 5.66625 4.20676 5.69574C4.14182 5.72523 4.07133 5.74049 4.00001 5.74049C3.92868 5.74049 3.85819 5.72523 3.79325 5.69574C3.72831 5.66625 3.67044 5.6232 3.62351 5.5695V5.57Z"
                  fill="#9E9E9E"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center mt-[36px] mx-[69px]">
            แสดง
            <div className="flex justify-start items-center px-[9px] py-2 rounded-lg mx-[12px] bg-[#e0e0e0]">
              10
              <svg
                width={8}
                height={9}
                viewBox="0 0 8 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-2 h-2 ml-[4px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M3.62351 6.07L1.22551 3.329C0.942505 3.0065 1.17251 2.5 1.60201 2.5H6.39801C6.49413 2.49992 6.58824 2.52754 6.66906 2.57957C6.74989 2.6316 6.814 2.70582 6.85373 2.79335C6.89346 2.88087 6.90711 2.978 6.89306 3.07309C6.87901 3.16818 6.83785 3.2572 6.77451 3.3295L4.37651 6.0695C4.32957 6.1232 4.2717 6.16625 4.20676 6.19574C4.14182 6.22523 4.07133 6.24049 4.00001 6.24049C3.92868 6.24049 3.85819 6.22523 3.79325 6.19574C3.72831 6.16625 3.67044 6.1232 3.62351 6.0695V6.07Z"
                  fill="#9E9E9E"
                />
              </svg>
            </div>
            รายการ
            <div className="ml-[16px]">
              <div className="flex justify-start items-center gap-2 mt-[36px] px-[9px] py-2 rounded-lg border border-[#9e9e9e]">
                <svg
                  width={16}
                  height={17}
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M14 14.5L11.0093 11.504L14 14.5ZM12.6666 7.49998C12.6666 9.00287 12.0696 10.4442 11.0069 11.5069C9.94421 12.5696 8.50287 13.1666 6.99998 13.1666C5.49709 13.1666 4.05575 12.5696 2.99304 11.5069C1.93034 10.4442 1.33331 9.00287 1.33331 7.49998C1.33331 5.99709 1.93034 4.55575 2.99304 3.49304C4.05575 2.43034 5.49709 1.83331 6.99998 1.83331C8.50287 1.83331 9.94421 2.43034 11.0069 3.49304C12.0696 4.55575 12.6666 5.99709 12.6666 7.49998V7.49998Z"
                    stroke="#9E9E9E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="w-[280px] text-base text-[#9e9e9e]">ค้นหา...</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[7px] mt-[31px] mx-[69px]">
            <p>ปีการศึกษา</p>
            <div className="flex items-center justify-center h-[35px] w-[76px] rounded-lg bg-[#e0e0e0] gap-[7px]">
              2567
              <svg
                width={8}
                height={8}
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-2 h-2"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M3.62351 5.57L1.22551 2.829C0.942505 2.5065 1.17251 2 1.60201 2H6.39801C6.49413 1.99992 6.58824 2.02754 6.66906 2.07957C6.74989 2.1316 6.814 2.20582 6.85373 2.29335C6.89346 2.38087 6.90711 2.478 6.89306 2.57309C6.87901 2.66818 6.83785 2.7572 6.77451 2.8295L4.37651 5.5695C4.32957 5.6232 4.2717 5.66625 4.20676 5.69574C4.14182 5.72523 4.07133 5.74049 4.00001 5.74049C3.92868 5.74049 3.85819 5.72523 3.79325 5.69574C3.72831 5.66625 3.67044 5.6232 3.62351 5.5695V5.57Z"
                  fill="#9E9E9E"
                />
              </svg>
            </div>
          </div>

          <div
            className="mx-[69px]"
            style={{ filter: "drop-shadow(5px 5px 100px rgba(0,0,0,0.25))" }}
          >
            <table className="table-fixed w-full h-[51px] mt-[36px] rounded-tl-[20px] rounded-tr-[20px] bg-[#d9d9d9]">
              <thead>
                <tr>
                  <th>รหัสนักศึกษา</th>
                  <th>ชื่อ</th>
                  <th>นามสกุล</th>
                  <th>ชื่อเล่น</th>
                  <th>วันเดือนปีเกิด</th>
                  <th>เบอร์โทรศัพท์</th>
                  <th>อีเมล</th>
                  <th></th>
                </tr>
              </thead>
            </table>
            <table className="table-fixed w-full h-[70px] rounded-bl-[20px] rounded-br-[20px] bg-white/[0.87]">
              <tbody>
                <tr className="break-words">
                  <th className="font-light">6510014101</th>
                  <th className="font-light">ลลิษา</th>
                  <th className="font-light">มโนบาล</th>
                  <th className="font-light">ลิซ่า</th>
                  <th className="font-light">1/01/2001</th>
                  <th className="font-light">0987654321</th>
                  <th className="font-light">stu6510014101@sskru.ac.th</th>
                  <th>
                    <button className="flex items-center justify-center mx-auto gap-[4px] w-[89px] h-[35px] rounded-lg bg-[#9f2020]">
                      <svg
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[17px] h-4"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g clipPath="url(#clip0_2077_116)">
                          <path
                            d="M8.62504 6C8.06146 6 7.52095 6.21071 7.12244 6.58579C6.72392 6.96086 6.50004 7.46957 6.50004 8C6.50004 8.53043 6.72392 9.03914 7.12244 9.41421C7.52095 9.78929 8.06146 10 8.62504 10C9.18863 10 9.72913 9.78929 10.1276 9.41421C10.5262 9.03914 10.75 8.53043 10.75 8C10.75 7.46957 10.5262 6.96086 10.1276 6.58579C9.72913 6.21071 9.18863 6 8.62504 6ZM8.62504 11.3333C7.68573 11.3333 6.7849 10.9821 6.1207 10.357C5.45651 9.7319 5.08337 8.88406 5.08337 8C5.08337 7.11595 5.45651 6.2681 6.1207 5.64298C6.7849 5.01786 7.68573 4.66667 8.62504 4.66667C9.56435 4.66667 10.4652 5.01786 11.1294 5.64298C11.7936 6.2681 12.1667 7.11595 12.1667 8C12.1667 8.88406 11.7936 9.7319 11.1294 10.357C10.4652 10.9821 9.56435 11.3333 8.62504 11.3333ZM8.62504 3C5.08337 3 2.05879 5.07333 0.833374 8C2.05879 10.9267 5.08337 13 8.62504 13C12.1667 13 15.1913 10.9267 16.4167 8C15.1913 5.07333 12.1667 3 8.62504 3Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clippath id="clip0_2077_116">
                            <rect
                              width={17}
                              height={16}
                              fill="white"
                              transform="translate(0.125)"
                            />
                          </clippath>
                        </defs>
                      </svg>
                      <p className="font-bold text-white">ดูข้อมูล</p>
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
            <div className="flex items-center justify-center gap-[12px] mt-[36px]">
              <p className="text-base font-medium text-[#9e9e9e]">Previous</p>
              <div className="px-[9px] py-2 rounded-lg bg-[#9e9e9e]">
                <p className="flex items-center justify-center w-[13px] h-[15px] text-sm font-medium text-white">
                  1
                </p>
              </div>
              <div className="px-[9px] py-2 rounded-lg bg-[#e0e0e0]">
                <p className="flex items-center justify-center w-[13px] h-[15px] text-sm font-medium text-black">
                  2
                </p>
              </div>
              <div className="px-[9px] py-2 rounded-lg bg-[#e0e0e0]">
                <p className="flex items-center justify-center w-[13px] h-[15px] text-sm font-medium text-black">
                  3
                </p>
              </div>
              <p className="text-base font-medium text-[#9e9e9e]">Next</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
