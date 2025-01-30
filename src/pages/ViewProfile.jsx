import edit_user from "../assets/edit_user.png";

export default function ViewProfile() {
  return (
    <div className="h-full md:h-dvh lg:h-full bg-[#d9d9d9]">
      <div className="flex">
        <div className="flex justify-center w-full mx-[16px] md:mx-[77px] mb-[67px] mt-[48px] rounded-[20px] border border-[#e9e9e9] bg-white ">
          <div className="flex flex-col items-center w-full mb-[56.96px]">
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
            <div className="flex space-x-[-39px] mt-[36px]">
              <img src={edit_user} />
            </div>
            <div className="flex space-x-[-39px]">
              <p className="mt-[15px] text-[#9e1f1f] text-[24px] md:text-[28px] font-bold">
                นางสาวลลิษา มโนบาล
              </p>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-y-[15px] lg:gap-x-[200px] mx-auto mt-[36px]">
              <div className="md:mt-0 text-gray-800 text-base font-semibold">
                รหัสนักศึกษา
              </div>
              <div className="text-gray-600 font-medium text-base">
                6510014101
              </div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold">
                ชื่อ-นามสกุล
              </div>
              <div className="text-gray-600 font-medium text-base">
                นางสาวลลิษา มโนบาล
              </div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold">
                ชื่อเล่น
              </div>
              <div className=" text-gray-600 font-medium text-base">ลิซ่า</div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold ">
                วัน/เดือน/ปีเกิด
              </div>
              <div className="text-gray-600 font-medium text-base">01/01/2001</div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold ">รุ่น</div>
              <div className="text-gray-600 font-medium text-base">SE10</div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold ">สถานะ</div>
              <div className="text-gray-600 font-medium text-base">กำลังศึกษาอยู่</div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold ">
                โรงเรียนเดิม
              </div>
              <div className="text-gray-600 font-medium text-base">โรงเรียนศรีสะเกษวิทยาลัย</div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold ">
                เบอร์โทรศัพท์
              </div>
              <div className="text-gray-600 font-medium text-base">0123456789</div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold ">Email</div>
              <div className="text-gray-600 font-medium text-base">stu6510014101@sskru.ac.th</div>
              <div className="mt-[13px] md:mt-0 text-gray-800 text-base font-semibold ">
                Facebook
              </div>
              <div className="text-gray-600 font-medium text-base">Lalisa Manoban</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
