"use client"
import { IoIosCheckmark, IoIosMail } from "react-icons/io";
import Phone_Input from "@/components/form/phone-input";
import { useRouter } from "next/navigation";
import { useSignupContext } from "@/context/auth/signup/context";

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
                    Skills & Availability
                </div>
                <div className="flex items-center gap-[5px] lg:gap-[10px] leading-tight text-[14px] lg:text-[16px] font-semibold">
                    <div className="w-[12px] h-[12px] lg:w-[17px] lg:h-[17px] rounded-full bg-[#026935] text-white flex items-center justify-center text-base mb-[2px]">
                        <IoIosCheckmark className="lg:text-[20px]" />
                    </div>
                    Emergency Contact
                </div>
                <div className="flex items-center gap-[5px] lg:gap-[10px] leading-tight text-[14px] lg:text-[16px] opacity-50 font-semibold">
                    <div className="w-[12px] h-[12px] lg:w-[17px] lg:h-[17px] rounded-full border-2 lg:border-[3px] border-[#026935] flex items-center justify-center text-base mb-[2px]">
                    </div>
                    Create
                </div>
            </div>

            <div className="mt-[30px] lg:mt-[40px]">
                <div className="font-medium text-[14px] lg:text-base">Emergency Contact</div>
                <div className="flex flex-col gap-[30px] lg:flex-row">
                    <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                        <input
                            placeholder="Full Name"
                            type="text"
                            className="w-full h-full outline-none"
                            value={data.emergency_contact_name}
                            onChange={(e) => setData(
                                (prev: any) => ({
                                    ...prev,
                                    emergency_contact_name: e.target.value
                                })
                            )}
                        />
                    </div>
                    <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                        <select
                            className="w-full h-full outline-none"
                            value={data.emergency_contact_relationship}
                            onChange={(e) => setData(
                                (prev: any) => ({
                                    ...prev,
                                    emergency_contact_relationship: e.target.value
                                })
                            )}
                        >
                            <option value="">Relationship</option>
                            <option value="Mother">Mother</option>
                            <option value="Father">Father</option>
                            <option value="Spouse">Spouse</option>
                            <option value="Child">Child</option>
                            <option value="Relative">Relative</option>
                            <option value="Friend">Friend</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="">
                <Phone_Input
                    number={data.emergency_contact_phone.number}
                    setNumber={(e: any) => setData((prev: any) => (
                        {
                            ...prev, emergency_contact_phone: {
                                ...prev.emergency_contact_phone,
                                number: e
                            }
                        }
                    ))}
                    code={data.emergency_contact_phone.code}
                    setCode={(e: any) => setData((prev: any) => (
                        {
                            ...prev, emergency_contact_phone: {
                                ...prev.emergency_contact_phone,
                                code: e
                            }
                        }
                    ))}
                    country={data.emergency_contact_phone.country}
                    setCountry={(e: any) => setData((prev: any) => (
                        {
                            ...prev, emergency_contact_phone: {
                                ...prev.emergency_contact_phone,
                                country: e
                            }
                        }
                    ))}
                />
            </div>

            <div className="mt-[40px] flex gap-[25px]">
                <div onClick={() => router.push("/signup/volunteer/skills-and-availability")} className="cursor-pointer py-[8px] px-[31px] border-2 border-[#026935] text-[#026935] rounded-[10px] font-semibold w-max">
                    Previous
                </div>
                <div onClick={() => router.push("/signup/volunteer/create")} className="cursor-pointer py-[10px] px-[33px] bg-[#026935] text-white rounded-[10px] font-semibold w-max">
                    Next
                </div>
            </div>

        </div>
    );
}