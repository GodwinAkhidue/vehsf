"use client"
import Image from "next/image";

export default function Testimonials() {

    return (
        <div className="poppins w-full max-w-[608px] shrink-0 hidden lg:block sticky bottom-0">
            <div>
                <Image src={"/images/logo.png"} alt="vehsf" width={999} height={999} className="w-[120px]" />
            </div>
            <div className="bg-[#026935] w-full rounded-[10px] p-[20px] lg:px-[65px] lg:py-[48px] mt-[5px] text-white">
                <div className="font-semibold text-[24px] lg:text-[48px] lg:leading-tight">
                    You’re almost a volunteer member!
                </div>
                <div className="w-full mt-[30px] lg:mt-[65px] relative h-[200px] rounded-[10px] overflow-hidden">
                    <Image src={"/images/volunteer_signup/4.jpg"} alt="vehsf" fill className="object-cover" />
                    <div className="w-full h-full relative z-10 bg-[#00000080]">

                    </div>
                </div>
            </div>
        </div>
    );
}