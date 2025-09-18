"use client"
import { IoIosCheckmark } from "react-icons/io";
import { useRouter } from "next/navigation";
import { CiClock2 } from "react-icons/ci";
import { MdWorkOutline } from "react-icons/md";
import { useSignupContext } from "@/context/auth/signup/context";
import { ngo_positions } from "@/lib/ngo_positions";
import Location_Input from "@/components/form/location-input";

export default function Form() {

    const router = useRouter();

    const { data, setData } = useSignupContext();

    return (
        <div className="w-full ">

            <div className="mt-[30px] lg:mt-[40px] flex gap-[10px] lg:gap-[20px] flex-wrap">

                <div className="flex items-center gap-[5px] lg:gap-[10px] leading-tight text-[14px] lg:text-[16px] font-semibold">
                    <div className="w-[12px] h-[12px] lg:w-[17px] lg:h-[17px] rounded-full bg-[#026935] text-white flex items-center justify-center text-base mb-[2px]">
                        <IoIosCheckmark className="lg:text-[20px]" />
                    </div>
                    Personal Information
                </div>
                <div className="flex items-center gap-[5px] lg:gap-[10px] leading-tight text-[14px] lg:text-[16px] font-semibold">
                    <div className="w-[12px] h-[12px] lg:w-[17px] lg:h-[17px] rounded-full bg-[#026935] text-white flex items-center justify-center text-base mb-[2px]">
                        <IoIosCheckmark className="lg:text-[20px]" />
                    </div>
                    NGO Information
                </div>
                <div className="flex items-center gap-[5px] lg:gap-[10px] leading-tight text-[14px] lg:text-[16px] opacity-50 font-semibold">
                    <div className="w-[12px] h-[12px] lg:w-[17px] lg:h-[17px] rounded-full border-2 lg:border-[3px] border-[#026935] flex items-center justify-center text-base mb-[2px]">
                    </div>
                    Create
                </div>
            </div>

            <div className="mt-[20px] lg:mt-[30px]">
                <div className="font-medium text-[14px] lg:text-base">Position Held</div>
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                    <select
                        className="w-full h-full outline-none"
                        value={data.ngo_position}
                        onChange={(e) => {
                            setData((prev: any) => ({
                                ...prev,
                                ngo_position: e.target.value
                            }));
                        }}
                    >
                        <option value="">Position</option>
                        {
                            ngo_positions.map((i, index) => (
                                <option value={i} key={index}>{i}</option>
                            ))
                        }
                    </select>
                </div>
            </div>

            <Location_Input
                heading="NGO Location"
                state={data.location.state}
                setState={(e: any) => setData((prev: any) => (
                    {
                        ...prev, location: {
                            ...prev.location,
                            state: e
                        }
                    }
                ))}
                lga={data.location.lga}
                setLga={(e: any) => setData((prev: any) => (
                    {
                        ...prev, location: {
                            ...prev.location,
                            lga: e
                        }
                    }
                ))}
            />

            <div className="mt-[40px] flex gap-[25px]">
                <div onClick={() => router.push("/signup/ngo/personal-info")} className="cursor-pointer py-[8px] px-[31px] border-2 border-[#026935] text-[#026935] rounded-[10px] font-semibold w-max">
                    Previous
                </div>
                <div onClick={() => router.push("/signup/ngo/create")} className="cursor-pointer py-[10px] px-[33px] bg-[#026935] text-white rounded-[10px] font-semibold w-max">
                    Next
                </div>
            </div>
        </div>
    );
}