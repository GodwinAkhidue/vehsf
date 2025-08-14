import { MdAlternateEmail } from "react-icons/md";
import { IoKeypadSharp } from "react-icons/io5";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";

export default function Email_Code() {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center px-[30px] poppins bg-white">
            <Link href={"/login"} className="absolute top-[20px] left-[20px] flex gap-[10px] items-center">
                <BiArrowBack className="text-[24px]" />
                <div className="">Back to Login</div>
            </Link>
            <div>
                <Image src={"/images/logo.png"} alt="vehsf" width={999} height={999} className="w-[120px]" />
            </div>
            <div className="mt-[10px] font-semibold text-[24px]">Forgot Password</div>
            <div className="w-full max-w-[340px] mt-[40px]">
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px]">
                    <MdAlternateEmail className="text-[#00000080] text-[18px]" />
                    <input placeholder="Enter email" type="text" className="w-full h-full outline-none" />
                </div>
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[20px]">
                    <IoKeypadSharp className="text-[#00000080] text-[18px]" />
                    <input placeholder="Enter code" type="text" className="w-full h-full outline-none" />
                </div>
                <Link href={"/forgot-password?a=code"} className="cursor-pointer bg-[#026935] hover:bg-transparent border-2 border-[#026935] text-white hover:text-[#026935] transition-all duration-300 w-full flex items-center justify-center mt-[33px] rounded-[7px] gap-[10px] py-[10px] font-semibold">
                    Send Code
                </Link>
            </div>
        </div>
    );
}