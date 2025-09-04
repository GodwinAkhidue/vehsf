import Image from "next/image";
import Stats from "./stats";
import Connect from "./connect";
import Programs from "./programs";
import Gallery from "./gallery";

export default function Explore_Impact() {
    return (
        <div className="poppins">
            <div className="px-[15px] pt-[30px] lg:pt-[60px] ">
                <div className="font-semibold text-center text-[32px] lg:text-[42px] text-[#254229]">
                    Explore Impact
                </div>
                <div className="w-full max-w-[715px] h-[110px] rounded-full overflow-hidden relative mt-[20px] justify-self-center">
                    <Image src={'/images/explore-impact/1.jpg'} alt="vehsf" fill className="object-cover" />
                </div>
                <div className="text-[14px] lg:text-base text-center mt-[20px] justify-self-center w-full max-w-[675px]">
                    Discover the difference we are making in communities through your support and our dedicated efforts.
                </div>
                <div className="px-[11px] py-[6px] bg-[#026935] text-[#F9F9F9] rounded-[5px] mt-[15px] justify-self-center">
                    Donate Now
                </div>
                <div className="mt-[40px] lg:mt-[60px]">
                    <Stats />
                </div>
                <div className="mt-[70px] lg:mt-[100px]">
                    <Connect />
                </div>
            </div>
            <div className="mt-[70px] lg:mt-[100px]">
                <Programs />
            </div>
            <div className="w-full flex justify-center mt-[70px] lg:mt-[100px]">
                <div className="px-[15px] w-full max-w-[1200px]">
                    <Gallery />
                    <div className="my-[80px] w-full flex items-center justify-center">
                        <div className="bg-[#F9F9F9] rounded-[20px] w-full max-w-[800px] p-[20px] lg:p-[50px] flex flex-col items-center justify-center">
                            <div className="w-[180px] h-[56px] md:w-[277px] md:h-[86px] rounded-[20px] relative overflow-hidden">
                                <Image src={`/images/explore-impact/19.jpg`} alt="vehsf" fill className="object-cover" />
                                <div className="relative z-10 bg-[#00000080] w-full h-full">

                                </div>
                            </div>
                            <div className="text-[18px] lg:text-[22px] font-semibold text-center mt-[15px] lg:mt-[25px]">
                                Be Part of the Impact
                            </div>
                            <div className="mt-[20px] lg:mt-[25px] text-[#121212B2] text-center w-full max-w-[480px]">
                                Every success story starts with someone who decided
                                to make a difference. That someone can be you
                            </div>
                            <div className="flex flex-col lg:flex-row gap-[20px] items-center justify-center text-[14px] lg:text-base mt-[20px] lg:mt-[40px]">
                                <div className="px-[11px] py-[6px] bg-[#F1F1F1] rounded-[5px]">
                                    Become a Volunteer
                                </div>
                                <div className="flex gap-[20px] items-center justify-center">
                                    <div className="px-[10px] py-[5px] border border-[#026935] text-[#026935] rounded-[5px]">
                                        Get involved
                                    </div>
                                    <div className="px-[11px] py-[6px] bg-[#026935] text-[#F9F9F9] rounded-[5px]">
                                        Donate Now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}