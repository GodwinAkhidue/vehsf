import Image from "next/image";
import Link from "next/link";
import { RiLock2Fill } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";

export default function New_Password() {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center px-[30px] poppins bg-white relative">
            <Link href={"/forgot-password"} className="absolute top-[20px] left-[20px]">
                <BiArrowBack className="text-[24px]" />
            </Link>
            <div>
                <Image src={"/images/logo.png"} alt="vehsf" width={999} height={999} className="w-[120px]" />
            </div>
            <div className="mt-[10px] font-semibold text-[24px]">New Password</div>
            <div className="w-full max-w-[340px] mt-[40px]">
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px]">
                    <RiLock2Fill className="text-[#00000080] text-[22px]" />
                    <input placeholder="Enter new password" type="password" className="w-full h-full outline-none" />
                </div>
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[20px]">
                    <RiLock2Fill className="text-[#00000080] text-[22px]" />
                    <input placeholder="Confirm new password" type="password" className="w-full h-full outline-none" />
                </div>
                <button className="cursor-pointer bg-[#026935] hover:bg-transparent border-2 border-[#026935] text-white hover:text-[#026935] transition-all duration-300 w-full flex items-center justify-center mt-[33px] rounded-[7px] gap-[10px] py-[10px] font-semibold">
                    Update Password
                </button>
            </div>
        </div>
    );
}