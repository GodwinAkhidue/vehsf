import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Personal_Information() {
    return (
        <div>
            <div className="text-[#121212] text-[24px] lg:text-[32px] font-semibold">Personal Information</div>
            <div className="mt-[25px] flex items-center gap-[10px] lg:gap-[20px]">
                <div className="w-[35px] lg:w-[56px] h-[35px] lg:h-[56px] rounded-full relative overflow-hidden shrink-0 border border-gray-400">
                    <Image src={"/images/dashboard_user/1.jpg"} alt="user" fill className="object-cover" />
                </div>
                <div className="text-[10px] lg:text-[14px] leading-tight text-white p-[10px] font-medium bg-[#026935] rounded-[5px]">
                    Change Picture
                </div>
                <div className="text-[10px] lg:text-[14px] leading-tight text-[#F10000] p-[10px] font-medium bg-[#F1000040] rounded-[5px]">
                    Remove Picture
                </div>
            </div>
            <div className="mt-[30px] lg:mt-[40px]">
                <div className="font-medium text-[14px] lg:text-base">First Name</div>
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px] bg-[#F1F1F1]">
                    <FaUser className="text-[#00000080] text-[18px]" />
                    <div className="text-[14px] text-[#9A9A9A]">James</div>
                </div>
            </div>
            <div className="mt-[20px] lg:mt-[30px]">
                <div className="font-medium text-[14px] lg:text-base">Last Name</div>
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px] bg-[#F1F1F1]">
                    <FaUser className="text-[#00000080] text-[18px]" />
                    <div className="text-[14px] text-[#9A9A9A]">Akin-Ade</div>
                </div>
            </div>
            <div className="mt-[20px] lg:mt-[30px]">
                <div className="font-medium text-[14px] lg:text-base">Email address</div>
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px] bg-[#F1F1F1]">
                    <IoIosMail className="text-[#00000080] text-[18px]" />
                    <div className="text-[14px] text-[#9A9A9A]">tosinakinade@gmail.com</div>
                </div>
            </div>
            <div className="justify-self-end text-[#026935] font-medium text-[14px] mt-[5px]">
                Change/Edit
            </div>
        </div>
    );
}