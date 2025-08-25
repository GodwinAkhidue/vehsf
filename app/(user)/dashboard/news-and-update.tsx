"use client"
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function News_and_Updates() {

    const [showUpdates, setShowUpdates] = useState(false);

    const updates = [
        {
            heading: "Upcoming Events & Campaigns",
            title: "🌍 Tree Planting Drive – Lagos",
            date: "25th August 2025",
            time: "9:00 AM – 3:00 PM"
        },
        {
            heading: "Upcoming Events & Campaigns",
            title: "🌍 Tree Planting Drive – Lagos",
            date: "25th August 2025",
            time: "9:00 AM – 3:00 PM"
        },
    ]

    return (
        <div className="w-full rounded-[10px] poppins border border-[#E6EDFF] p-[20px]">

            <div className="flex justify-between w-full items-center">
                <div className="flex items-center gap-[10px]">
                    <div className="font-semibold">News & Updates</div>
                    <div className="w-[15px] h-[15px] pt-[2px] bg-[#F10000] rounded-full flex items-center justify-center font-semibold text-[12px] text-[#F9F9F9]">
                        6
                    </div>
                </div>
                <div onClick={() => setShowUpdates(!showUpdates)} className={`cursor-pointer text-[20px] lg:hidden ${showUpdates ? "rotate-180" : "rotate-0"} transition-all duration-300`}>
                    <IoIosArrowDown />
                </div>
            </div>

            <div className={`text-[14px] ${showUpdates ? "h-[170px] mt-[10px]" : "h-0 mt-0"} lg:h-max lg:mt-[10px] lg:overflow-hidden transition-all duration-300 overflow-hidden overflow-y-scroll`}>
                {
                    updates.map((i, index) => (
                        <div key={index} className="py-[10px] border-b border-[#C4C4C480] first:pt-0 last:border-none">
                            <div className="bg-[#007F0F0D] font-semibold text-[12px] rounded-[5px] px-[20px] py-[15px]">
                                <div className="">
                                    {i.heading}
                                </div>
                                <div className="mt-[5px]">
                                    {i.title}
                                </div>
                                <div className="italic mt-[10px]">
                                    Date: {i.date}
                                </div>
                                <div className="italic">
                                    Time: {i.time}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}