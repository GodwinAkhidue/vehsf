import Image from "next/image";

export default function Hero() {
    return (
        <div className="py-[30px] lg:py-[60px] flex flex-col items-center justify-center">
            <div className="text-[32px] lg:text-[42px] font-semibold text-center text-[#254229]">
                What we do
            </div>
            <div className="text-[14px] lg:text-base mt-[10px] text-[#121212] text-center max-w-[675px]">
                We are committed to empowering communities, supporting the vulnerable,
                and driving sustainable development through compassion, collaboration,
                and action.
            </div>
            <div className="flex gap-[20px] items-center justify-center text-[14px] lg:text-base mt-[20px]">
                <div className="px-[10px] py-[5px] border border-[#026935] text-[#026935] rounded-[5px]">
                    Get involved
                </div>
                <div className="px-[11px] py-[6px] bg-[#026935] text-[#F9F9F9] rounded-[5px]">
                    Donate Now
                </div>
            </div>
            <div className="flex items-center justify-center gap-[10px] mt-[30px]">
                <div className="w-[210px] h-[250px] rounded-[10px] relative overflow-hidden hidden lg:block -mt-[250px]">
                    <Image src={'/images/what-we-do/2.jpg'} alt="vehsf" fill className="object-cover" />
                </div>
                <div className="w-[210px] h-[250px] rounded-[10px] relative overflow-hidden hidden lg:block">
                    <Image src={'/images/what-we-do/3.jpg'} alt="vehsf" fill className="object-cover" />
                </div>
                <div className="w-[210px] h-[370px] rounded-[10px] relative overflow-hidden">
                    <Image src={'/images/what-we-do/4.jpg'} alt="vehsf" fill className="object-cover" />
                </div>
                <div className="w-[210px] h-[250px] rounded-[10px] relative overflow-hidden hidden lg:block">
                    <Image src={'/images/what-we-do/4.jpg'} alt="vehsf" fill className="object-cover" />
                </div>
                <div className="w-[210px] h-[250px] rounded-[10px] relative overflow-hidden hidden lg:block -mt-[250px]">
                    <Image src={'/images/what-we-do/5.jpg'} alt="vehsf" fill className="object-cover" />
                </div>
            </div>
        </div>
    );
}