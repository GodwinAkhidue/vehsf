import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { FaPlay } from "react-icons/fa6";

export default function Program_Item({ i, reverse }: { i: any, reverse: boolean }) {
    return (
        <div className={`flex flex-col items-center justify-center ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-[30px] lg:gap-[100px]`}>
            {/* Images */}
            <div className="w-[250px] h-[300px] lg:w-[323px] lg:h-[387px] rounded-[30px] relative overflow-hidden">
                <Image src={i.video} alt="vehsf" fill className="object-cover" />
                <div className="relative z-10 w-full h-full bg-[#00000033] flex items-center justify-center text-white text-[42px] lg:text-[60px]">
                    <FaPlay />
                </div>
            </div>

            {/* Text */}

            <div className="w-[285px] lg:w-[500px]">
                <div className="bg-[#63F37D] w-[65px] lg:w-[94px] h-[7px] rounded-full"></div>
                <div className="text-[#254229] font-bold newsreader text-[24px] lg:text-[40px] mt-[25px] lg:mt-[35px] leading-tight">
                    {i.header}
                </div>
                <div className="mt-[10px] lg:mt-[35px] poppins text-[14px] lg:text-[18px]">
                    {i.body}
                </div>
                <a href={i.url} className="mt-[25px] border-2 border-[#026935] text-[#026935] hover:bg-[#026935] hover:text-white transition-all duration-300 px-[20px] py-[7px] lg:px-[30px] w-max lg:py-[10px] flex items-center justify-center gap-[10px] text-[14px] poppins rounded-[15px] font-semibold cursor-pointer">
                    View More <IoIosArrowForward className="text-[18px]" />
                </a>
            </div>

        </div>
    );
}