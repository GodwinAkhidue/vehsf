"use client"
import { IoIosCheckmark } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Form() {

    const router = useRouter();

    const [showpwd, setShowpwd] = useState(false);
    const [showConfpwd, setShowConfpwd] = useState(false);

    return (
        <div className="w-full ">

            <div className="mt-[30px] lg:mt-[40px] flex gap-[10px] lg:gap-[20px] flex-wrap">

                <div className="flex items-center gap-[5px] lg:gap-[10px] leading-tight text-[14px] lg:text-[16px] font-semibold">
                    <div className="w-[12px] h-[12px] lg:w-[17px] lg:h-[17px] rounded-full bg-[#026935] text-white flex items-center justify-center text-base mb-[2px]">
                        <IoIosCheckmark className="lg:text-[20px]" />
                    </div>
                    Personal Information
                </div>
                <div className="flex items-center gap-[5px] lg:gap-[10px] leading-tight text-[14px] lg:text-[16px] font-semibold">
                    <div className="w-[12px] h-[12px] lg:w-[17px] lg:h-[17px] rounded-full bg-[#026935] text-white flex items-center justify-center text-base mb-[2px]">
                        <IoIosCheckmark className="lg:text-[20px]" />
                    </div>
                    Skills & Availability
                </div>
                <div className="flex items-center gap-[5px] lg:gap-[10px] leading-tight text-[14px] lg:text-[16px] font-semibold">
                    <div className="w-[12px] h-[12px] lg:w-[17px] lg:h-[17px] rounded-full bg-[#026935] text-white flex items-center justify-center text-base mb-[2px]">
                        <IoIosCheckmark className="lg:text-[20px]" />
                    </div>
                    Emergency Contact
                </div>
                <div className="flex items-center gap-[5px] lg:gap-[10px] leading-tight text-[14px] lg:text-[16px] font-semibold">
                    <div className="w-[12px] h-[12px] lg:w-[17px] lg:h-[17px] rounded-full bg-[#026935] text-white flex items-center justify-center text-base mb-[2px]">
                        <IoIosCheckmark className="lg:text-[20px]" />
                    </div>
                    Create
                </div>
            </div>

            <div className="mt-[30px] lg:mt-[40px]">
                <div className="font-medium text-[14px] lg:text-base">Password</div>
                <div className="flex flex-col gap-[10px]">
                    <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                        <input placeholder="Create your Password" type={showpwd ? "text" : "password"} className="w-full h-full outline-none" />
                        <div onClick={() => setShowpwd(!showpwd)} className="text-[20px] cursor-pointer">
                            {
                                showpwd ? <FiEye /> : <FiEyeOff />
                            }
                        </div>
                    </div>
                    <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                        <input placeholder="Confirm your Password" type={showConfpwd ? "text" : "password"} className="w-full h-full outline-none" />
                        <div onClick={() => setShowConfpwd(!showConfpwd)} className="text-[20px] cursor-pointer">
                            {
                                showConfpwd ? <FiEye /> : <FiEyeOff />
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-[40px] flex items-center gap-[10px] lg:gap-[20px]">
                <input type="checkbox" className="w-[18px] h-[18px] accent-[#026935]" />
                <div className="text-[#121212] italic text-[14px] lg:text-base">
                    I agree to the terms and conditions of volunteering
                </div>
            </div>

            <div className="mt-[20px] flex flex-col lg:flex-row gap-[10px] lg:gap-[25px]">
                <div onClick={() => router.push("/signup/donor/emergency-contact")} className="cursor-pointer py-[8px] px-[31px] border-2 border-[#026935] text-[#026935] rounded-[10px] font-semibold w-max">
                    Previous
                </div>
                <div onClick={() => router.push("/signup/donor/create")} className="cursor-pointer py-[10px] px-[33px] bg-[#026935] text-white rounded-[10px] font-semibold w-max">
                    Become a Volunteer
                </div>
            </div>

        </div>
    );
}