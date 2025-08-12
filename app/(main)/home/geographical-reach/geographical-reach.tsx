import Image from "next/image";

export default function Geographical_Reach() {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="px-[15px] lg:px-[50px] w-full max-w-[1250px] flex flex-col items-center justify-center poppins">
                <div className="relative font-semibold text-[24px] lg:text-[36px] flex items-center justify-center">
                    GEOGRAPHICAL REACH
                    <div className="absolute -bottom-[8px]">
                        <Image src={'/images/credo/credo-underline.svg'} alt="vehsf" width={999} height={999} className="w-[70px] lg:w-[98px]" />
                    </div>
                </div>
                <div className="mt-[50px] lg:mt-[65px]">
                    <div className="flex flex-col lg:flex-row-reverse items-center justify-between w-full lg:gap-[74px]">
                        <div className="text-center lg:text-start w-[300px] lg:w-[480px]">
                            <div className="flex items-center justify-center gap-[10px] lg:justify-end">
                                <div>
                                    <Image src={"/images/geographical_reach/nigeria-icon.svg"} alt="vehsf" width={99} height={99} className="w-[36px]" />
                                </div>
                                <div className="font-semibold italic text-[24px] lg:text-[28px] text-[#254229]">NIGERIA (National Coverage)</div>
                            </div>
                            <div className="text-[14px] lg:text-[18px] mt-[5px] font-medium lg:text-end">
                                We operate across multiple states in Nigeria, delivering humanitarian aid, educational support,
                                and empowerment programs to individuals and communities in need. Our nationwide presence allows
                                us to respond to both urban and rural challenges efficiently.
                            </div>
                        </div>
                        <div className="mt-[30px] shrink-0">
                            <Image src={"/images/geographical_reach/1.png"} alt="vehsf" width={999} height={999} className="w-[300px] h-[240px] lg:w-[528px] lg:h-[422px]" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:gap-[74px]">
                        <div className="mt-[50px] text-center lg:text-end w-[300px] lg:w-[480px]">
                            <div className="flex items-center justify-center lg:justify-start gap-[10px]">
                                <div className="font-semibold italic text-[24px] lg:text-[28px] text-[#254229]">AFRICA</div>
                                <div>
                                    <Image src={"/images/geographical_reach/africa-icon.png"} alt="vehsf" width={99} height={99} className="w-[43px]" />
                                </div>
                            </div>
                            <div className="text-[14px] lg:text-[18px] mt-[5px] font-medium lg:text-start">
                                With a vision to expand our impact, we are scaling our programs to neighboring African countries. This includes forming partnerships, conducting community assessments, and launching pilot projects that address shared regional challenges in health, education, and economic empowerment.
                            </div>
                        </div>
                        <div className="mt-[30px] shrink-0">
                            <Image src={"/images/geographical_reach/2.png"} alt="vehsf" width={999} height={999} className="w-[300px] h-[262px] lg:w-[570px] lg:h-[497px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}