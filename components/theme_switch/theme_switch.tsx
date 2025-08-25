import { IoIosSunny } from "react-icons/io";

export default function Theme_Switch() {
    return (
        <div className="lg:w-[50px] lg:h-[26px] w-[35px] h-[18px] bg-[#0566001A] rounded-full flex items-center relative">
            <div className="lg:text-[20px] text-[14px] absolute left-[2px] lg:left-[3px]">
                <IoIosSunny className="text-[#FFBE18]" />
            </div>
        </div>
    );
}