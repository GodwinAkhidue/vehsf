import Hero from "./hero";
import How_We_Work from "./how_we_work";
import Our_Core_Areas from "./our_core_areas";
import Stats from "./stats";

export default function What_We_Do() {
    return (
        <div className="p-[15px] w-full flex items-center justify-center poppins">
            <div className="w-full max-w-[1173px]">
                <Hero />
                <div className="mt-[20px] lg:mt-[40px]">
                    <Stats />
                </div>
                <div className="mt-[80px] lg:mt-[120px]">
                    <Our_Core_Areas />
                </div>
                <div className="mt-[80px] lg:mt-[120px] w-full">
                    <How_We_Work />
                </div>
                <div className="my-[80px] w-full flex items-center justify-center">
                    <div className="bg-[#F9F9F9] rounded-[20px] w-full max-w-[800px] p-[20px] lg:p-[50px] flex flex-col items-center justify-center">
                        <div className="text-[18px] lg:text-[22px] font-semibold text-center">
                            Be Part of the Change
                        </div>
                        <div className="mt-[20px] lg:mt-[25px] text-[#121212B2] text-center w-full max-w-[480px]">
                            Your support makes everything possible. Join hands with us to bring
                            hope and transform lives.
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
    );
}