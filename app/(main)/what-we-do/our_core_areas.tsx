import Image from "next/image";

export default function Our_Core_Areas() {

    return (
        <div className="w-full flex items-center justify-center">
            <div className="flex flex-col items-center justify-center lg:flex-row gap-[30px] lg:gap-[50px]">
                {/* Images */}
                <div className="flex items-center justify-center gap-[15px] relative">
                    <div className="flex flex-col gap-[10px]">
                        <div className="w-[120px] h-[145px] lg:w-[167px] lg:h-[202px] rounded-tr-[30px] rounded-bl-[30px] relative overflow-hidden">
                            <Image src={"/images/objective/2.jpg"} alt="vehsf" fill className="object-cover" />
                        </div>
                        <div className="w-[120px] h-[145px] lg:w-[167px] lg:h-[202px] rounded-br-[30px] rounded-tl-[30px] relative overflow-hidden">
                            <Image src={"/images/objective/3.jpg"} alt="vehsf" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="w-[150px] h-[210px] lg:w-[201px] lg:h-[281px] rounded-tr-[30px] rounded-bl-[30px] relative overflow-hidden">
                        <Image src={"/images/objective/1.jpg"} alt="vehsf" fill className="object-cover" />
                    </div>
                </div>

                {/* Text */}

                <div className="w-full max-w-[500px]">
                    <div className="text-[#254229] font-bold text-[24px] lg:text-[40px] leading-tight">
                        Our Core Areas
                    </div>
                    <div className="mt-[20px] lg:mt-[35px] space-y-[15px]">
                        <div>
                            <div className="font-medium">Community Development:</div>
                            <div className="text-[14px]">
                                We  partner with local communities to provide access to clean
                                water, shelter, and resources that improve living standards.
                            </div>
                        </div>
                        <div>
                            <div className="font-medium">Education & Empowerment:</div>
                            <div className="text-[14px]">
                                Through scholarships, skill-building programs, and mentorship,
                                we equip children and youth with tools for a better future.
                            </div>
                        </div>
                        <div>
                            <div className="font-medium">Health Care Support:</div>
                            <div className="text-[14px]">
                                We organize medical outreach programs, provide essential
                                healthcare services, and create health awareness campaigns.
                            </div>
                        </div>
                        <div>
                            <div className="font-medium">Relief & Volunteer Programs:</div>
                            <div className="text-[14px]">
                                In times of crisis, we mobilize volunteers and resources
                                to provide urgent aid and emotional support.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}