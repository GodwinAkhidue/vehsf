import Image from "next/image";

export default function Our_Team() {
    return (
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-[30px]">
            <div className="w-full max-w-[320px]">
                <div className="font-semibold text-[24px] lg:text-[36px] relative">
                    Our Team
                    <div className="w-[50px] lg:w-[77px] h-[2px] bg-[#15FF00] rounded-full absolute bottom-0 left-0"></div>
                </div>
                <div className="mt-[15px] font-medium text-[18px] lg:text-[24px]">
                    A Strong and Devoted Team
                </div>
                <div className="text-[14px] mt-[15px]">
                    We are a passionate group of vision-driven individuals dedicated to
                    creating meaningful impact. Each member of our team brings unique
                    skills, experience, and creativity to drive our mission forward.
                    Together, we work hand in hand to inspire change, empower communities,
                    and build a better future for those we serve.
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-[30px]">
                <div className="flex flex-col items-center">
                    <div className="w-[220px] h-[295px] rounded-[10px] relative overflow-hidden shadow-md shadow-[#00000040]">
                        <Image src={"/images/about/3.jpg"} alt="vehsf" fill className="object-cover" />
                    </div>
                    <div className="text-center font-medium mt-[10px]">
                        Dcn. Dr. HND IDOKO FCRUE FCBA
                    </div>
                    <div className="text-center text-[14px] text-[#000000CC]">
                        National Secretary
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-[220px] h-[295px] rounded-[10px] relative overflow-hidden shadow-md shadow-[#00000040]">
                        <Image src={"/images/about/2.jpg"} alt="vehsf" fill className="object-cover" />
                    </div>
                    <div className="text-center font-medium mt-[10px]">
                        Prophet Titus .E. Akahormen
                    </div>
                    <div className="text-center text-[14px] text-[#000000CC]">
                        National President
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-[220px] h-[295px] rounded-[10px] relative overflow-hidden shadow-md shadow-[#00000040]">
                        <Image src={"/images/about/1.jpg"} alt="vehsf" fill className="object-cover" />
                    </div>
                    <div className="text-center font-medium mt-[10px]">
                        MRS. ATAMOJE CORDELIA O.
                    </div>
                    <div className="text-center text-[14px] text-[#000000CC]">
                        HQ ADMIN
                    </div>
                </div>
            </div>
        </div>
    );
}