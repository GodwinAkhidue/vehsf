import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function Objective() {

    const objectives = [
        `A soci​et‍y⁠ where veterans and vulnerable p⁠opul⁠atio⁠ns thrive,‍ cont‍ri‌but​ing to Nigeria and Africa's development.`,
        `Empower communities throu​gh‌ economic and so⁠cial programs.`,
        `Promote​ education, healthca​re‍, a⁠nd human rights⁠.`,
        `Foster partnerships and​ collaboration.`
    ];

    return (
        <div className="bg-[#D7FEEA] w-full flex items-center justify-center">
            <div className="py-[50px] lg:py-[75px] px-[15px] lg:px-[50px] max-w-[1050px] flex flex-col items-center justify-center lg:flex-row gap-[30px] lg:gap-[50px]">
                {/* Images */}
                <div className="flex items-center justify-center gap-[15px] relative">
                    {/* Logo */}
                    <div className="w-[120px] h-[120px] lg:w-[160px] lg:h-[160px] absolute top-[5px] -left-[60px] lg:-left-[80px] flex items-center justify-center z-0">
                        <Image src={"/images/objective/maternal-health-text-circle.svg"} alt="vehsf" fill className="object-contain" />
                        <div className="relative z-10 w-[55px] h-[55px] lg:w-[92px] lg:h-[92px] rounded-full bg-[#C7EDE2]"></div>
                    </div>
                    <div className="w-[150px] h-[210px] lg:w-[201px] lg:h-[281px] rounded-tl-[30px] rounded-br-[30px] relative overflow-hidden">
                        <Image src={"/images/objective/1.jpg"} alt="vehsf" fill className="object-cover" />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <div className="w-[120px] h-[145px] lg:w-[167px] lg:h-[202px] rounded-tl-[30px] rounded-br-[30px] relative overflow-hidden">
                            <Image src={"/images/objective/2.jpg"} alt="vehsf" fill className="object-cover" />
                        </div>
                        <div className="w-[120px] h-[145px] lg:w-[167px] lg:h-[202px] rounded-bl-[30px] rounded-tr-[30px] relative overflow-hidden">
                            <Image src={"/images/objective/3.jpg"} alt="vehsf" fill className="object-cover" />
                        </div>
                    </div>
                </div>

                {/* Text */}

                <div className="w-[285px] lg:w-[500px]">
                    <div className="bg-[#63F37D] w-[65px] lg:w-[94px] h-[7px] rounded-full"></div>
                    <div className="text-[#254229] font-bold newsreader text-[24px] lg:text-[40px] mt-[25px] lg:mt-[35px] leading-tight">
                        Our Objective
                    </div>
                    <ul className="mt-[25px] lg:mt-[35px] poppins space-y-[10px] text-[14px] lg:text-[18px] list-disc pl-6">
                        {
                            objectives.map((i, index) => (
                                <li key={index}>{i}</li>
                            ))
                        }
                    </ul>
                    <button className="mt-[25px] border-2 border-[#026935] text-[#026935] hover:bg-[#026935] hover:text-white transition-all duration-300 px-[20px] py-[7px] lg:px-[30px] lg:py-[10px] flex items-center justify-center gap-[10px] text-[14px] poppins rounded-[15px] font-semibold cursor-pointer">
                        Learn More <IoIosArrowForward className="text-[18px]" />
                    </button>
                </div>

            </div>
        </div>
    )
}