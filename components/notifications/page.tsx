"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { FaBell } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


export default function Dashboard_Notifications() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Page />
        </Suspense>
    );
}


const Page = () => {

    const searchParams = useSearchParams();
    const notification = searchParams.get("notification");
    const router = useRouter();

    const removeQuery = () => {
        const params = new URLSearchParams(searchParams.toString());

        if (notification) {
            params.delete("notification");
        }

        router.push(`?${params.toString()}`);
    };

    return (
        <div className={`fixed top-0 lg:top-[128px] z-50 ${notification ? "border border-[#E6EDFF] right-0" : "-right-[100%]"} w-[315px] lg:w-[326px] p-[20px] transition-all duration-500 overflow-hidden h-full lg:h-[calc(100vh-128px)] rounded-tl-[20px] poppins bg-white`}>
            <div className="flex items-center justify-between">
                <div className="text-[24px] font-semibold text-[#121212]">
                    Notifications
                </div>
                <button onClick={() => removeQuery()}>
                    <IoClose className="text-[24px]" />
                </button>
            </div>
            <div className="h-full overflow-y-auto pb-[50px]">
                <div className="mt-[20px] font-semibold">
                    New
                </div>
                <div className="w-full mt-[20px] space-y-[15px]">
                    <div className="py-[10px] px-[15px] bg-[#EAFDED] rounded-[5px] flex gap-[20px] items-center">
                        <div className="bg-[#00C80D] w-[40px] h-[40px] rounded-full flex items-center justify-center text-white shrink-0">
                            <FaBell />
                        </div>
                        <div>
                            <div className="font-medium text-[14px]">
                                New Member Alert
                            </div>
                            <div className="text-[12px] text-[#737375] line-clamp-1">
                                Michael Eke joined as a volunteer
                            </div>
                        </div>
                    </div>
                    <div className="py-[10px] px-[15px] bg-[#EAFDED] rounded-[5px] flex gap-[20px] items-center">
                        <div className="bg-[#00C80D] w-[40px] h-[40px] rounded-full flex items-center justify-center text-white shrink-0">
                            <FaBell />
                        </div>
                        <div>
                            <div className="font-medium text-[14px]">
                                New Member Alert
                            </div>
                            <div className="text-[12px] text-[#737375] line-clamp-1">
                                Michael Eke joined as a volunteer
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[20px] font-semibold">
                    Earlier
                </div>
                <div className="w-full mt-[20px] space-y-[15px]">
                    <div className="py-[10px] px-[15px] bg-[#EAFDED] rounded-[5px] flex gap-[20px] items-center">
                        <div className="bg-[#00C80D] w-[40px] h-[40px] rounded-full flex items-center justify-center text-white shrink-0">
                            <FaBell />
                        </div>
                        <div>
                            <div className="font-medium text-[14px]">
                                New Member Alert
                            </div>
                            <div className="text-[12px] text-[#737375] line-clamp-1">
                                Michael Eke joined as a volunteer
                            </div>
                        </div>
                    </div>
                    <div className="py-[10px] px-[15px] bg-[#EAFDED] rounded-[5px] flex gap-[20px] items-center">
                        <div className="bg-[#00C80D] w-[40px] h-[40px] rounded-full flex items-center justify-center text-white shrink-0">
                            <FaBell />
                        </div>
                        <div>
                            <div className="font-medium text-[14px]">
                                New Member Alert
                            </div>
                            <div className="text-[12px] text-[#737375] line-clamp-1">
                                Michael Eke joined as a volunteer
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[20px] font-semibold">
                    Yesterday
                </div>
                <div className="w-full mt-[20px] space-y-[15px]">
                    <div className="py-[10px] px-[15px] bg-[#EAFDED] rounded-[5px] flex gap-[20px] items-center">
                        <div className="bg-[#00C80D] w-[40px] h-[40px] rounded-full flex items-center justify-center text-white shrink-0">
                            <FaBell />
                        </div>
                        <div>
                            <div className="font-medium text-[14px]">
                                New Member Alert
                            </div>
                            <div className="text-[12px] text-[#737375] line-clamp-1">
                                Michael Eke joined as a volunteer
                            </div>
                        </div>
                    </div>
                    <div className="py-[10px] px-[15px] bg-[#EAFDED] rounded-[5px] flex gap-[20px] items-center">
                        <div className="bg-[#00C80D] w-[40px] h-[40px] rounded-full flex items-center justify-center text-white shrink-0">
                            <FaBell />
                        </div>
                        <div>
                            <div className="font-medium text-[14px]">
                                New Member Alert
                            </div>
                            <div className="text-[12px] text-[#737375] line-clamp-1">
                                Michael Eke joined as a volunteer
                            </div>
                        </div>
                    </div>
                    <div className="py-[10px] px-[15px] bg-[#EAFDED] rounded-[5px] flex gap-[20px] items-center">
                        <div className="bg-[#00C80D] w-[40px] h-[40px] rounded-full flex items-center justify-center text-white shrink-0">
                            <FaBell />
                        </div>
                        <div>
                            <div className="font-medium text-[14px]">
                                New Member Alert
                            </div>
                            <div className="text-[12px] text-[#737375] line-clamp-1">
                                Michael Eke joined as a volunteer
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}