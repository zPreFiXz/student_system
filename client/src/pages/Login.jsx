import se_logo1 from "../assets/se_logo1.png";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-dvh md:h-dvh bg-[#d9d9d9]">
      <div className="flex flex-col justify-center items-center md:w-[624px] xl:w-[1248px] h-[445px] xl:px-[131px] py-[65px] mx-auto">
        <div
          className="flex items-center justify-center w-0 md:w-[700px] xl:w-[1248px] h-[445px] rounded-[20px] bg-white"
          style={{ boxShadow: "5px 5px 100px 4px rgba(0,0,0,0.25)" }}
        >
          <img
            src={se_logo1}
            className="xl:w-[332px] xl:h-[315px] mx-auto rounded-[20px]"
          />
          <div className="w-[340px] md:w-[420px] xl:w-[624px] md:h-[445px] rounded-[20px] md:rounded-tl-[0px] md:rounded-bl-[0px] bg-[#9f1920]">
            <img
              src={se_logo1}
              className="md:hidden h-[100px] w-[100px] mt-[32px] mx-auto"
            />
            <div className="my-[32px] md:my-[45px] text-white text-4xl font-semibold text-center ">
              ลงชื่อเข้าใช้งาน
            </div>
            <div className="flex flex-col gap-[12px] mx-[30px] md:mx-[40px] xl:mx-[90px]">
              <div className="w-full md:w-[445px] text-white text-medium font-semibold">
                ชื่อผู้ใช้งาน
              </div>
              <input
                type="text"
                className="input input-bordered w-full h-[45px] rounded-full"
              />
              <div className="w-[280px] text-white text-medium font-semibold">
                รหัสผ่าน
              </div>
              <input
                type="text"
                className="input input-bordered w-full h-[45px] rounded-full"
              />
              <button className="w-full h-[45px] mt-[32px] mb-[45px] rounded-full bg-[#650005] text-white font-semibold text-xl">
                เข้าสู่ระบบ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
