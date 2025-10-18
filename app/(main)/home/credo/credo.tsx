import Image from "next/image";

export default function Credo() {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="px-[15px] lg:px-[50px] pt-[10px] lg:pt-[20px] w-full max-w-[1000px] flex flex-col items-center justify-center poppins">
                <div className="relative font-semibold text-[24px] lg:text-[36px] max-w-[600px] text-center">
                    Empowering Veterans, Strengthening Communities
                </div>
                <div className="text-[14px] font-semibold mt-[15px] lg:mt-[20px] lg:text-[18px]">
                    A TOUCH, A SMILE FOR ALL...
                </div>
                <div className="pt-[15px] lg:pt-[30px] w-full flex items-center justify-center">
                    <div>
                        <Image src={"/images/credo/1.png"} alt="vehsf" width={999} height={999} className="w-[250px] h-[255px] lg:w-[366px] lg:h-[377px]" />
                    </div>
                </div>
                <div>
                    <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:gap-[74px]">
                        <div className="mt-[50px] lg:mt-[62px] text-center lg:text-start w-[300px] lg:w-[480px]">
                            <div className="font-semibold italic text-[24px] lg:text-[36px] text-[#254229]">Our Mission</div>
                            <div className="text-[14px] lg:text-[18px] mt-[5px] font-medium">
                                Empower⁠ing veterans, vulnerable populations, and communities through humanitarian
                                programs, economi​c​ empowerment, an​d social support.
                            </div>
                        </div>
                        <div className="mt-[30px]">
                            <Image src={"/images/credo/2.png"} alt="vehsf" width={999} height={999} className="w-[250px] h-[304px] lg:w-[366px] lg:h-[445px]" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row-reverse items-center justify-between w-full lg:gap-[74px]">
                        <div className="mt-[50px] text-center lg:text-end w-[300px] lg:w-[480px]">
                            <div className="font-semibold italic text-[24px] lg:text-[36px] text-[#254229]">Our Vision</div>
                            <div className="text-[14px] lg:text-[18px] mt-[5px] font-medium">
                                A soci​et‍y⁠ where veterans and vulnerable p⁠opul⁠atio⁠ns thrive,‍
                                cont‍ri‌but​ing to Nigeria and Africa's development.
                            </div>
                        </div>
                        <div className="mt-[30px]">
                            <Image src={"/images/credo/3.png"} alt="vehsf" width={999} height={999} className="w-[250px] h-[261px] lg:w-[366px] lg:h-[382px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}