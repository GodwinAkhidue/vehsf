"use client"
import { IoIosCheckmark, IoIosMail } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import Phone_Input from "@/components/form/phone-input";
import { PiGenderMale } from "react-icons/pi";
import Location_Input from "@/components/form/location-input";
import Language_Spoken from "./language_spoken/language_spoken";
import { RiAttachment2 } from "react-icons/ri";
import { useRouter } from "next/navigation";

export default function Form() {

    const router = useRouter();

    return (
        <div className="w-full ">

            <div className="mt-[30px] lg:mt-[40px] flex gap-[10px] lg:gap-[20px] flex-wrap">

                <div className="flex items-center gap-[5px] lg:gap-[10px] leading-tight text-[14px] lg:text-[16px] font-semibold">
                    <div className="w-[12px] h-[12px] lg:w-[17px] lg:h-[17px] rounded-full bg-[#026935] text-white flex items-center justify-center text-base mb-[2px]">
                        <IoIosCheckmark className="lg:text-[20px]" />
                    </div>
                    Personal Information
                </div>
                <div className="flex items-center gap-[5px] lg:gap-[10px] leading-tight text-[14px] lg:text-[16px] opacity-50 font-semibold">
                    <div className="w-[12px] h-[12px] lg:w-[17px] lg:h-[17px] rounded-full border-2 lg:border-[3px] border-[#026935] flex items-center justify-center text-base mb-[2px]">
                    </div>
                    Skills & Availability
                </div>
                <div className="flex items-center gap-[5px] lg:gap-[10px] leading-tight text-[14px] lg:text-[16px] opacity-50 font-semibold">
                    <div className="w-[12px] h-[12px] lg:w-[17px] lg:h-[17px] rounded-full border-2 lg:border-[3px] border-[#026935] flex items-center justify-center text-base mb-[2px]">
                    </div>
                    Emergency Contact
                </div>
                <div className="flex items-center gap-[5px] lg:gap-[10px] leading-tight text-[14px] lg:text-[16px] opacity-50 font-semibold">
                    <div className="w-[12px] h-[12px] lg:w-[17px] lg:h-[17px] rounded-full border-2 lg:border-[3px] border-[#026935] flex items-center justify-center text-base mb-[2px]">
                    </div>
                    Create
                </div>
            </div>

            <div className="mt-[30px] lg:mt-[40px]">
                <div className="font-medium text-[14px] lg:text-base">First Name</div>
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                    <FaUser className="text-[#00000080] text-[18px]" />
                    <input placeholder="James" type="text" className="w-full h-full outline-none" />
                </div>
            </div>
            <div className="mt-[20px] lg:mt-[30px]">
                <div className="font-medium text-[14px] lg:text-base">Last Name</div>
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                    <FaUser className="text-[#00000080] text-[18px]" />
                    <input placeholder="Ali" type="text" className="w-full h-full outline-none" />
                </div>
            </div>
            <div className="mt-[20px] lg:mt-[30px]">
                <div className="font-medium text-[14px] lg:text-base">Email address</div>
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                    <IoIosMail className="text-[#00000080] text-[18px]" />
                    <input placeholder="jamesali@mail.com" type="email" className="w-full h-full outline-none" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-[30px]">
                <Phone_Input />
                <div className="mt-[20px] lg:mt-[30px]">
                    <div className="font-medium text-[14px] lg:text-base">Date of Birth</div>
                    <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                        <input type="date" className="w-full h-full outline-none" />
                    </div>
                    <div className="text-[#00000080] text-[14px] italic mt-[5px]">(For Eligibility & Insurance Purposes)</div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-[30px]">
                <div className="mt-[20px] lg:mt-[30px]">
                    <div className="font-medium text-[14px] lg:text-base">Gender</div>
                    <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                        <PiGenderMale className="text-[#00000080] text-[18px]" />
                        <select className="w-full h-full outline-none">
                            <option>Select Your Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="text-[#00000080] text-[14px] italic mt-[5px]">(Optional)</div>
                </div>
                <Location_Input />
            </div>

            <Language_Spoken />

            <div className="mt-[20px] lg:mt-[30px]">
                <div className="font-medium text-[14px] lg:text-base relative">Upload Profile Picture</div>
                <div className="px-[16px] py-[6px] flex items-center  relative justify-center gap-[8px] border border-[#026935] text-[#026935] mt-[10px] w-max rounded-full">
                    <div className="text-[12px]">Upload Image</div>
                    <RiAttachment2 />
                    <input className="absolute top-0 left-0 w-full h-full opacity-0" type="file" />
                </div>
            </div>

            <div onClick={() => router.push("/signup/volunteer/skills-and-availability")} className="cursor-pointer py-[10px] px-[33px] bg-[#026935] text-white rounded-[10px] mt-[40px] font-semibold w-max">
                Next
            </div>
        </div>
    );
}