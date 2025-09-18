import Theme_Switch from "@/components/theme_switch/theme_switch";
import Image from "next/image";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import ProfileCard from "./profileCard";

export default function User_Header_Desktop({ profile }: { profile: any }) {

    const volunteers = [
        "/images/hero/volunteers/1.jpg",
        "/images/hero/volunteers/2.jpg",
        "/images/hero/volunteers/3.jpg",
        "/images/hero/volunteers/4.jpg",
        "/images/hero/volunteers/5.jpg"
    ]

    return (
        <div className="w-full shadow-md hidden lg:flex items-center justify-center bg-[#F9FFFC] relative z-50">

            <div className="pl-[5px] pr-[15px] lg:pl-[35px] lg:py-[20px] lg:pr-[50px] w-full max-w-[1400px] flex items-center">

                <div className="shrink-0">
                    <Link href={"/"}>
                        <Image
                            src={"/images/logo.png"}
                            alt="vehsf"
                            width={999}
                            height={999}
                            className="w-[100px] lg:w-[140px]"
                        />
                    </Link>
                </div>

                <div className="bg-[#0566001A] rounded-full flex items-center gap-[10px] py-[10px] px-[15px] ml-[35px] w-full shrink">
                    <IoSearch className="text-[#0000004D] text-[18px]" />
                    <input className="w-full outline-none" placeholder="Search opportunities, events, or donations" />
                </div>

                <div className="flex items-center gap-[10px] ml-[10px] shrink-0">
                    <div className="flex">
                        {
                            volunteers.map((i, index) => (
                                <div key={index} className="w-[25px] h-[25px] lg:w-[38px] lg:h-[38px] relative rounded-full overflow-hidden border-2 border-white first:-ml-0 -ml-[7px]">
                                    <Image src={i} alt="vehsf" fill className="object-cover" loading="lazy" />
                                </div>
                            ))
                        }
                    </div>
                    <div className="poppins font-medium text-[14px]">
                        (1722) Active Volunteers
                    </div>
                </div>

                <button className="cursor-pointer border border-[#026935] text-[#026935] py-[5px] px-[25px] font-medium poppins text-[14px] ml-[15px] rounded-[5px] shrink-0">
                    Donate Now
                </button>

                <div className="ml-[40px]">
                    <Theme_Switch />
                </div>
                <ProfileCard profile={profile} />
            </div>

        </div>
    );
}