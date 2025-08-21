"use client"
import { IoIosCheckmark } from "react-icons/io";
import { useRouter } from "next/navigation";
import { RiAttachment2 } from "react-icons/ri";
import { FaHandHoldingUsd } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { MdWorkOutline } from "react-icons/md";

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
                <div className="flex items-center gap-[5px] lg:gap-[10px] leading-tight text-[14px] lg:text-[16px] font-semibold">
                    <div className="w-[12px] h-[12px] lg:w-[17px] lg:h-[17px] rounded-full bg-[#026935] text-white flex items-center justify-center text-base mb-[2px]">
                        <IoIosCheckmark className="lg:text-[20px]" />
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
                <div className="font-medium text-[14px] lg:text-base">Skills</div>
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                    <FaHandHoldingUsd className="text-[#00000080] text-[18px]" />
                    <input placeholder="Search your Skills" type="text" className="w-full h-full outline-none" />
                </div>
            </div>
            <div className="mt-[20px] lg:mt-[30px]">
                <div className="font-medium text-[14px] lg:text-base relative">Resume/CV</div>
                <div className="px-[16px] py-[6px] flex items-center  relative justify-center gap-[8px] border border-[#026935] text-[#026935] mt-[10px] w-max rounded-full">
                    <div className="text-[12px]">Attach Document</div>
                    <RiAttachment2 />
                    <input className="absolute top-0 left-0 w-full h-full opacity-0" type="file" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-[30px] lg:justify-between">
                <div className="mt-[20px] lg:mt-[30px]">
                    <div className="font-medium text-[14px] lg:text-base">Availability</div>
                    <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                        <CiClock2 className="text-[#00000080] text-[18px] lg:text-[24px]" />
                        <select className="w-full h-full outline-none">
                            <option value="male">Weekdays</option>
                            <option value="female">Weekends</option>
                        </select>
                    </div>
                </div>
                <div className="mt-[20px] lg:mt-[30px]">
                    <div className="font-medium text-[14px] lg:text-base">Preferred Type of Volunteering</div>
                    <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                        <MdWorkOutline className="text-[#00000080] text-[18px] lg:text-[20px]" />
                        <select className="w-full h-full outline-none">
                            <option value="male">On-Site</option>
                            <option value="female">Remote</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="mt-[40px] flex gap-[25px]">
                <div onClick={() => router.push("/signup/volunteer/personal-info")} className="cursor-pointer py-[8px] px-[31px] border-2 border-[#026935] text-[#026935] rounded-[10px] font-semibold w-max">
                    Previous
                </div>
                <div onClick={() => router.push("/signup/volunteer/emergency-contact")} className="cursor-pointer py-[10px] px-[33px] bg-[#026935] text-white rounded-[10px] font-semibold w-max">
                    Next
                </div>
            </div>
        </div>
    );
}