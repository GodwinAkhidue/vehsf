import Image from "next/image";

export default function Hero() {
    return (
        <div className="w-full h-[300px] lg:h-[38vw] relative">
            <Image src={"/images/donate_hero_bg.jpg"} alt="vehsf" fill className="object-cover" />
            <div className="relative z-10 w-full h-full bg-[#00000080] flex flex-col items-center justify-center p-[15px] text-white">
                <div className="mulish font-bold text-[28px] md:text-[36px] lg:text-[65px] text-center lg:leading-tight">Your support saves lives</div>
                <div className="font-medium text-[12px] md:text-base lg:text-[20px] text-center mt-[5px] md:mt-[10px] lg:mt-[15px] lg:w-[600px]">
                    Every donation brings food, water, education and care to every one.
                </div>
            </div>
        </div>
    );
}