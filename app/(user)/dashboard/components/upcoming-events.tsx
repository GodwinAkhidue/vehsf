import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";

export default function Upcoming_Events() {

    const upcoming_events = [
        {
            name: "Charity Walk",
            date: "20 Oct, 2025"
        },
        {
            name: "Food Distribution",
            date: "4 Nov, 2025"
        },
        {
            name: "Charity Walk",
            date: "18 Nov, 2025"
        }
    ];

    return (
        <div className="border border-[#E6EDFF] rounded-[15px] w-full p-[20px] lg:p-[35px] poppins">

            <div className="font-semibold">Next Upcoming Events</div>

            <div className="flex flex-col lg:flex-row gap-[20px] mt-[30px]">
                {
                    upcoming_events.map((i, index) => (
                        <div key={index} className="flex items-center gap-[15px] lg:pr-[15px] lg:border-r lg:border-[#C4C4C4] last:border-none last:pr-0">
                            <div>
                                <div className="font-semibold text-[14px]">{i.name}</div>
                                <div className="text-[#00000080] mt-[10px] text-[12px]">{i.date}</div>
                            </div>
                            <IoIosArrowForward className="text-[24px]" />
                        </div>
                    ))
                }
            </div>

            <div className="mt-[30px] w-full rounded-[20px] relative overflow-hidden">
                <Image src={`/images/hero/hero-bg.svg`} alt="bg" fill className="object-cover" />

                <div className="w-full h-full relative z-10 flex flex-col lg:flex-row-reverse gap-[20px] lg:gap-[30px] p-[20px] lg:px-[50px]">
                    <div className="flex gap-[15px] items-center justify-center">
                        <div className="w-[65px] h-[130px] rounded-full relative overflow-hidden">
                            <Image src={"/images/dashboard_user/3.jpg"} alt="image" fill className="object-cover" />
                        </div>
                        <div className="w-[65px] h-[160px] rounded-full relative overflow-hidden">
                            <Image src={"/images/dashboard_user/2.jpg"} alt="image" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="lg:w-full">
                        <div className="text-[#FCFCFC] leading-tight text-[28px] lg:text-[48px] font-semibold text-center max-w-[430px] relative flex justify-center lg:text-start">
                            <div className="relative z-10">Community Health Outreach</div>
                            <div className="w-full max-w-[300px] absolute bottom-0 lg:left-0 lg:bottom-[10px] h-[10px] bg-[#FFA100] z-0">

                            </div>
                        </div>
                        <div className="mt-[40px] px-[25px] py-[10px] bg-[#F9F9F9] rounded-[10px] text-[#026935] font-medium w-max justify-self-center lg:justify-self-start">
                            Join Opportunity
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-[20px] mt-[20px]">
                <div className="border border-[#BABABA] rounded-[10px] p-[10px] min-w-[115px]">
                    <IoCalendarOutline className="text-[#9A9A9A]" />
                    <div className="mt-[10px] font-semibold">
                        20 Sep. 2025
                    </div>
                    <div className="text-[#9A9A9A] mt-[5px] font-medium text-[12px]">
                        Date
                    </div>
                </div>
                <div className="border border-[#BABABA] rounded-[10px] p-[10px] min-w-[115px]">
                    <GoClock className="text-[#9A9A9A]" />
                    <div className="mt-[10px] font-semibold">
                        11:00 AM
                    </div>
                    <div className="text-[#9A9A9A] mt-[5px] font-medium text-[12px]">
                        Time
                    </div>
                </div>
                <div className="border border-[#BABABA] rounded-[10px] p-[10px] min-w-[115px]">
                    <FaLocationDot className="text-[#9A9A9A]" />
                    <div className="mt-[10px] font-semibold">
                        Community Health Outreach, Owerri Halll, Imo State.
                    </div>
                    <div className="text-[#9A9A9A] mt-[5px] font-medium text-[12px]">
                        Location
                    </div>
                </div>
            </div>

        </div>
    );
}