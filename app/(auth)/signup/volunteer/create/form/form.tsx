"use client"
import { IoIosCheckmark } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useSignupContext } from "@/context/auth/signup/context";
import { AiOutlineLoading } from "react-icons/ai";

export default function Form() {

    const router = useRouter();

    const [showpwd, setShowpwd] = useState(false);
    const [showConfpwd, setShowConfpwd] = useState(false);
    const { data, setData, signup } = useSignupContext();
    const [confirmPassword, setConfirmPassword] = useState("");
    const [termsAndConditionsAgreement, setTermsAndConditionsAgreement] = useState(false);
    const [check, setCheck] = useState(false);
    const [signingUp, setSigningUp] = useState(false);

    useEffect(() => {
        setCheck(
            data?.password?.length >= 6 &&
            data?.password === confirmPassword &&
            termsAndConditionsAgreement
        );
    }, [
        data?.password,
        confirmPassword,
        termsAndConditionsAgreement
    ]);

    return (
        <div className="w-full">

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
                <div className="flex items-center gap-[5px] lg:gap-[10px] leading-tight text-[14px] lg:text-[16px] font-semibold">
                    <div className="w-[12px] h-[12px] lg:w-[17px] lg:h-[17px] rounded-full bg-[#026935] text-white flex items-center justify-center text-base mb-[2px]">
                        <IoIosCheckmark className="lg:text-[20px]" />
                    </div>
                    Create
                </div>
            </div>

            <div className="mt-[30px] lg:mt-[40px]">
                <div className="font-medium text-[14px] lg:text-base">Password</div>
                <div className="flex flex-col gap-[10px]">
                    <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                        <input
                            placeholder="Create your Password"
                            type={showpwd ? "text" : "password"}
                            className="w-full h-full outline-none"
                            value={data.password}
                            onChange={(e) => setData(
                                (prev: any) => ({
                                    ...prev,
                                    password: e.target.value
                                })
                            )}
                        />
                        <div onClick={() => setShowpwd(!showpwd)} className="text-[20px] cursor-pointer">
                            {
                                showpwd ? <FiEye /> : <FiEyeOff />
                            }
                        </div>
                    </div>
                    <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                        <input
                            placeholder="Confirm your Password"
                            type={showConfpwd ? "text" : "password"}
                            className="w-full h-full outline-none"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <div onClick={() => setShowConfpwd(!showConfpwd)} className="text-[20px] cursor-pointer">
                            {
                                showConfpwd ? <FiEye /> : <FiEyeOff />
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-[5px] lg:gap-[10px] leading-tight text-[14px] lg:text-[16px] mt-[20px]">
                <div className={`w-[12px] h-[12px] lg:w-[17px] lg:h-[17px] rounded-full ${data?.password?.length >= 6 && "bg-[#026935]"} border border-[#026935] text-white flex items-center justify-center text-base mb-[2px]`}>
                    {
                        data?.password?.length >= 6 &&
                        <IoIosCheckmark className="lg:text-[20px]" />
                    }
                </div>
                At least 6 Characters
            </div>
            <div className="flex items-center gap-[5px] lg:gap-[10px] leading-tight text-[14px] lg:text-[16px] mt-[15px]">
                <div className={`w-[12px] h-[12px] lg:w-[17px] lg:h-[17px] rounded-full ${data?.password === confirmPassword && "bg-[#026935]"} border border-[#026935] text-white flex items-center justify-center text-base mb-[2px]`}>
                    {
                        data?.password === confirmPassword &&
                        <IoIosCheckmark className="lg:text-[20px]" />
                    }
                </div>
                Both passwords must match
            </div>

            <div className="mt-[40px] flex items-center gap-[10px] lg:gap-[20px]">
                <input
                    type="checkbox"
                    className="w-[18px] h-[18px] accent-[#026935]"
                    onChange={(e) => setTermsAndConditionsAgreement(e.target.checked)}
                />
                <div className="text-[#121212] italic text-[14px] lg:text-base">
                    I agree to the terms and conditions of volunteering
                </div>
            </div>

            <div className="mt-[20px] flex flex-col lg:flex-row gap-[10px] lg:gap-[25px]">
                <div onClick={() => router.push("/signup/volunteer/emergency-contact")} className="cursor-pointer py-[8px] px-[31px] border-2 border-[#026935] text-[#026935] rounded-[10px] font-semibold w-max">
                    Previous
                </div>
                <button
                    disabled={!check || signingUp}
                    onClick={() => signup(setSigningUp)}
                    className={`cursor-pointer py-[10px] px-[33px] text-white rounded-[10px] font-semibold w-max ${check ? "bg-[#026935]" : "bg-gray-600"}`}
                >
                    {
                        signingUp ? "Signing Up..." : "Become a Volunteer"
                    }
                </button>
            </div>
            {
                signingUp && <div className="fixed top-0 right-0 w-full h-full bg-[#0000004d] z-50 flex items-center justify-center">
                    <AiOutlineLoading className="text-white text-[40px] lg:text-[60px] animate-spin" />
                </div>
            }
        </div>
    );
}