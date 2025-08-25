"use client"
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

export default function For_You() {

    const [showForYou, setShowForYou] = useState(false);

    return (
        <div className="w-full rounded-[10px] poppins border border-[#254229] border-dashed p-[20px]">

            <div className="flex justify-between w-full items-center">
                <div className="font-semibold">For You</div>
                <div className="text-[#9A9A9A] text-[12px] italic">17hrs ago</div>
                <div onClick={() => setShowForYou(!showForYou)} className={`cursor-pointer text-[20px] ${showForYou ? "rotate-180" : "rotate-0"} lg:hidden transition-all duration-300`}>
                    <IoIosArrowDown />
                </div>
            </div>

            <div className={`text-[14px] ${showForYou ? "h-[91px]" : "h-0"} lg:h-max transition-all duration-300 overflow-hidden`}>
                <div className="mt-[10px] line-clamp-2">
                    You have been assigned a new role as a State Cordinator...
                </div>
                <div className="mt-[20px] flex items-center gap-[10px] text-[#254229]">
                    <div>See more</div>
                    <IoIosArrowForward className="text-[20px]" />
                </div>
            </div>

        </div>
    );
}