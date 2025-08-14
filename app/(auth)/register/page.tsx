"use client"
import Image from "next/image";
import Link from "next/link";
import { MdAlternateEmail } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import 'swiper/css';
import 'swiper/css/effect-fade';
import { createRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { IoKeypadSharp } from "react-icons/io5";
import { BiArrowBack } from "react-icons/bi";
import { FaPhoneAlt, FaUser } from "react-icons/fa";

export default function Register_Page() {

    const pageRef = createRef<HTMLDivElement>();
    const searchParams = useSearchParams();
    const a = searchParams.get("a")

    useEffect(() => {
        if (a == "other") {
            return pageRef?.current?.scrollBy({
                left: 9999,
                behavior: "smooth"
            });
        }
        return pageRef?.current?.scrollBy({
            left: -9999,
            behavior: "smooth"
        });
    }, [a])

    return (
        <div ref={pageRef} className="flex w-full h-screen overflow-hidden">
            <div className="w-max flex">
                <div className="w-screen h-screen flex flex-col items-center justify-center px-[30px] poppins bg-white">
                    <Link href={"/"} className="absolute top-[20px] left-[20px] flex gap-[10px] items-center">
                        <BiArrowBack className="text-[24px]" />
                        <div className="">Back to Homepage</div>
                    </Link>
                    <div>
                        <Image src={"/images/logo.png"} alt="vehsf" width={999} height={999} className="w-[120px]" />
                    </div>
                    <div className="mt-[10px] font-semibold text-[24px]">Join Us</div>
                    <div className="w-full max-w-[340px] mt-[40px]">
                        <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px]">
                            <MdAlternateEmail className="text-[#00000080] text-[18px]" />
                            <input placeholder="Enter email" type="text" className="w-full h-full outline-none" />
                        </div>
                        <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[20px]">
                            <FaUser className="text-[#00000080] text-[18px]" />
                            <input placeholder="Enter username" type="text" className="w-full h-full outline-none" />
                        </div>
                        <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[20px]">
                            <RiLock2Fill className="text-[#00000080] text-[22px]" />
                            <input placeholder="Enter password" type="password" className="w-full h-full outline-none" />
                        </div>
                        <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[20px]">
                            <RiLock2Fill className="text-[#00000080] text-[22px]" />
                            <input placeholder="Confirm password" type="password" className="w-full h-full outline-none" />
                        </div>
                        <Link href={"/register?a=other"} className="cursor-pointer bg-[#026935] hover:bg-transparent border-2 border-[#026935] text-white hover:text-[#026935] transition-all duration-300 w-full flex items-center justify-center mt-[33px] rounded-[7px] gap-[10px] py-[10px] font-semibold">
                            Register
                        </Link>
                        <div className="poppins font-medium text-[#424242] italic text-center mt-[30px]">
                            Already have an account? <Link href={"/login"} className="font-bold hover:underline">Log In</Link>
                        </div>
                    </div>
                </div>
                <div className="w-screen h-screen flex flex-col items-center justify-center px-[30px] poppins bg-white relative">
                    <Link href={"/register"} className="absolute top-[20px] left-[20px]">
                        <BiArrowBack className="text-[24px]" />
                    </Link>
                    <div>
                        <Image src={"/images/logo.png"} alt="vehsf" width={999} height={999} className="w-[120px]" />
                    </div>
                    <div className="mt-[10px] font-semibold text-[24px]">Complete Your Registration</div>
                    <div className="w-full max-w-[340px] mt-[40px]">
                        <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px]">
                            <FaUser className="text-[#00000080] text-[18px]" />
                            <input placeholder="Enter first name" type="text" className="w-full h-full outline-none" />
                        </div>
                        <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[20px]">
                            <FaUser className="text-[#00000080] text-[18px]" />
                            <input placeholder="Enter last name" type="text" className="w-full h-full outline-none" />
                        </div>
                        <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[20px]">
                            <FaPhoneAlt className="text-[#00000080] text-[18px]" />
                            <input placeholder="Enter phone number" type="number" className="w-full h-full outline-none" />
                        </div>
                        <button className="cursor-pointer bg-[#026935] hover:bg-transparent border-2 border-[#026935] text-white hover:text-[#026935] transition-all duration-300 w-full flex items-center justify-center mt-[33px] rounded-[7px] gap-[10px] py-[10px] font-semibold">
                            Complete Registration
                        </button>
                        <div className="poppins font-medium text-[#424242] italic text-center mt-[30px]">
                            Already have an account? <Link href={"/login"} className="font-bold hover:underline">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}