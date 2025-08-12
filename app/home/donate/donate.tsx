import Image from "next/image";
import { FaDonate } from "react-icons/fa";

export default function Donate() {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="px-[15px] lg:px-[50px] pt-[50px] pb-[75px] lg:pt-[100px] lg:pb-[150px] w-full max-w-[1400px]">
                <div className="w-full h-[50vw] max-h-[380px] relative">
                    <Image src={"/images/donate_section_bg.jpg"} alt="vehsf" fill className="object-cover" loading="lazy" />
                    <div className="w-full h-full z-10 relative bg-[#04040466] p-[20px] lg:p-[30px] flex items-end justify-center gap-[15px] lg:gap-[30px]">
                        <button className="bg-[#f9f9f9] text-[#121212] border border-[#f9f9f9] rounded-full px-[15px] py-[7px] lg:px-[30px] lg:py-[10px] text-[12px] lg:text-[16px] hover:bg-transparent hover:text-white transition-all duration-300 flex items-center gap-[5px] lg:gap-[10px] font-semibold cursor-pointer">
                            Donate <FaDonate className="text-[14px] lg:text-[16px]" />
                        </button>
                        <button className="border border-[#f9f9f9] px-[15px] py-[7px] lg:px-[30px] lg:py-[10px] hover:bg-[#f9f9f9] hover:text-[#121212] text-[12px] lg:text-[16px] transition-all duration-300 text-[#f9f9f9] font-semibold rounded-full cursor-pointer">
                            Join as Volunteer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}