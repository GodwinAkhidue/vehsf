import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";

export default function Login_Page() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center px-[30px] poppins bg-white">
            <div>
                <Image src={"/images/logo.png"} alt="vehsf" width={999} height={999} className="w-[120px]" />
            </div>
            <div className="mt-[10px] font-semibold text-[24px]">Welcome back</div>
            <div className="w-full max-w-[340px] mt-[40px]">
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px]">
                    <FaUser className="text-[#00000080] text-[18px]" />
                    <input placeholder="Enter email or username" type="text" className="w-full h-full outline-none" />
                </div>
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[20px]">
                    <RiLock2Fill className="text-[#00000080] text-[22px]" />
                    <input placeholder="Enter correct password" type="password" className="w-full h-full outline-none" />
                </div>
                <button className="cursor-pointer bg-[#026935] hover:bg-transparent border-2 border-[#026935] text-white hover:text-[#026935] transition-all duration-300 w-full flex items-center justify-center mt-[33px] rounded-[7px] gap-[10px] py-[10px] font-semibold">
                    Login
                    <MdLogin className="text-[24px]" />
                </button>
                <div className="flex items-center justify-center">
                    <Link href={'/login'} className="poppins font-medium text-[#424242] italic mt-[10px] hover:underline">Forgot Password?</Link>
                </div>
                <div className="poppins font-medium text-[#424242] italic text-center mt-[30px]">
                    Don't have an account? <Link href={"/login"} className="font-bold hover:underline">Join Us</Link>
                </div>
            </div>
        </div>
    );
}