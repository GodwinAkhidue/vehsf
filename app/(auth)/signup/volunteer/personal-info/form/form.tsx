"use client"
import { IoIosCheckmark, IoIosMail } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import Phone_Input from "@/components/form/phone-input";
import { PiGenderMale } from "react-icons/pi";
import Location_Input from "@/components/form/location-input";
import Language_Spoken from "./language_spoken/language_spoken";
import { useRouter } from "next/navigation";
import { useSignupContext } from "@/context/auth/signup/context";
import { useEffect } from "react";
import Upload_Image from "./upload_image/component";

export default function Form() {

    const router = useRouter();
    const { data, setData } = useSignupContext();

    useEffect(() => {
        setData((prev: any) =>
            ({ ...prev, role: "volunteer" }))
    }, [])

    return (
        <div className="w-full">

            <div className="mt-[30px] lg:mt-[40px] flex gap-[10px] lg:gap-[20px] flex-wrap">

                <div className="flex items-center gap-[5px] lg:gap-[10px] leading-tight text-[14px] lg:text-[16px] font-semibold">
                    <div className="w-[12px] h-[12px] lg:w-[17px] lg:h-[17px] rounded-full bg-[#026935] text-white flex items-center justify-center text-base mb-[2px]">
                        <IoIosCheckmark className="lg:text-[20px]" />
                    </div>
                    Personal Information
                </div>
                <div className="flex items-center gap-[5px] lg:gap-[10px] leading-tight text-[14px] lg:text-[16px] opacity-50 font-semibold">
                    <div className="w-[12px] h-[12px] lg:w-[17px] lg:h-[17px] rounded-full border-2 lg:border-[3px] border-[#026935] flex items-center justify-center text-base mb-[2px]">
                    </div>
                    Skills & Availability
                </div>
                <div className="flex items-center gap-[5px] lg:gap-[10px] leading-tight text-[14px] lg:text-[16px] opacity-50 font-semibold">
                    <div className="w-[12px] h-[12px] lg:w-[17px] lg:h-[17px] rounded-full border-2 lg:border-[3px] border-[#026935] flex items-center justify-center text-base mb-[2px]">
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
                <div className="font-medium text-[14px] lg:text-base">First Name</div>
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                    <FaUser className="text-[#00000080] text-[18px]" />
                    <input
                        name="firstname"
                        placeholder="James"
                        type="text"
                        className="w-full h-full outline-none"
                        value={data.firstname}
                        onChange={(e) => setData((prev: any) =>
                            ({ ...prev, firstname: e.target.value }))
                        }
                    />
                </div>
            </div>

            <div className="mt-[20px] lg:mt-[30px]">
                <div className="font-medium text-[14px] lg:text-base">Last Name</div>
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                    <FaUser className="text-[#00000080] text-[18px]" />
                    <input
                        name="lastname"
                        placeholder="Ali"
                        type="text"
                        className="w-full h-full outline-none"
                        value={data.lastname}
                        onChange={(e) => setData((prev: any) =>
                            ({ ...prev, lastname: e.target.value }))
                        }
                    />
                </div>
            </div>

            <div className="mt-[20px] lg:mt-[30px]">
                <div className="font-medium text-[14px] lg:text-base">Email address</div>
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                    <IoIosMail className="text-[#00000080] text-[18px]" />
                    <input
                        name="email"
                        placeholder="jamesali@mail.com"
                        type="email"
                        className="w-full h-full outline-none"
                        value={data.email}
                        onChange={(e) => setData((prev: any) =>
                            ({ ...prev, email: e.target.value }))
                        }
                    />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-[30px]">
                <Phone_Input
                    number={data.phone.number}
                    setNumber={(e: any) => setData((prev: any) => (
                        {
                            ...prev, phone: {
                                ...prev.phone,
                                number: e
                            }
                        }
                    ))}
                    code={data.phone.code}
                    setCode={(e: any) => setData((prev: any) => (
                        {
                            ...prev, phone: {
                                ...prev.phone,
                                code: e
                            }
                        }
                    ))}
                    country={data.phone.country}
                    setCountry={(e: any) => setData((prev: any) => (
                        {
                            ...prev, phone: {
                                ...prev.phone,
                                country: e
                            }
                        }
                    ))}
                />

                <div className="mt-[20px] lg:mt-[30px]">
                    <div className="font-medium text-[14px] lg:text-base">
                        Date of Birth
                    </div>
                    <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                        <input
                            type="date"
                            className="w-full h-full outline-none"
                            name="date of birth"
                            onChange={(e) => {
                                setData((prev: any) =>
                                    ({ ...prev, date_of_birth: e.target.value }))
                            }}
                        />
                    </div>
                    <div className="text-[#00000080] text-[14px] italic mt-[5px]">
                        (For Eligibility & Insurance Purposes)
                    </div>
                </div>

            </div>

            <div className="flex flex-col lg:flex-row lg:gap-[30px]">
                <div className="mt-[20px] lg:mt-[30px]">
                    <div className="font-medium text-[14px] lg:text-base">Gender</div>
                    <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                        <PiGenderMale className="text-[#00000080] text-[18px]" />
                        <select
                            className="w-full h-full outline-none"
                            value={data.gender}
                            onChange={(e) => {
                                setData((prev: any) => (
                                    { ...prev, gender: e.target.value }
                                ));
                            }}
                        >
                            <option value="">Select Your Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="text-[#00000080] text-[14px] italic mt-[5px]">(Optional)</div>
                </div>
                <Location_Input
                    heading="Location"
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
            </div>

            <Language_Spoken
                languagesSpoken={data.languages_spoken}
                setLanguagesSpoken={(e: any) => {
                    setData((prev: any) => (
                        prev.languages_spoken.includes(e) ?
                            {
                                ...prev, languages_spoken: [
                                    ...prev.languages_spoken.filter((i: any) => i !== e)
                                ]
                            } :
                            {
                                ...prev, languages_spoken: [
                                    ...prev.languages_spoken,
                                    e
                                ]
                            }
                    ));
                }}
            />

            <Upload_Image />

            <div
                onClick={
                    () => router.push("/signup/volunteer/skills-and-availability")
                }
                className="cursor-pointer py-[10px] px-[33px] bg-[#026935] text-white rounded-[10px] mt-[40px] font-semibold w-max"
            >
                Next
            </div>

        </div>
    );
}