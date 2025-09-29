"use client"
import { MdAlternateEmail } from "react-icons/md";
import { IoHourglassOutline, IoKeypadSharp } from "react-icons/io5";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState, useEffect } from "react";
import SendVerificationCode from "@/utils/send_verification_code";
import { toast } from "react-toastify";
import { IoIosCheckmark } from "react-icons/io";
import UpdatePassword from "@/utils/update_password";
import { useRouter } from "next/navigation";

export default function Forgot_Password_Form() {

    const [hasSentCode, setHasSentCode] = useState(false);
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isSendingCode, setIsSendingCode] = useState(false);
    const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);
    const [showpwd, setShowpwd] = useState(false);
    const [showConfpwd, setShowConfpwd] = useState(false);
    const [check, setCheck] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (hasSentCode && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setHasSentCode(false);
        }

        return () => clearInterval(timer);
    }, [hasSentCode, timeLeft]);

    const startTimer = () => {
        setTimeLeft(60);
        setHasSentCode(true);
    };

    const sendCode = () => {
        SendVerificationCode(email, toast, startTimer, setIsSendingCode);
    }

    useEffect(() => {
        setCheck(
            password.length >= 6 &&
            password === confirmPassword
        );
    }, [
        password,
        confirmPassword
    ]);

    const router = useRouter();

    const updatePassword = () => {
        UpdatePassword(email, Number(code), password, toast, setIsUpdatingPassword, router);
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center px-[30px] poppins bg-white">
            <Link href={"/login"} className="absolute top-[20px] left-[20px] flex gap-[10px] items-center">
                <BiArrowBack className="text-[24px]" />
                <div className="">Back to Login</div>
            </Link>
            <div>
                <Image src={"/images/logo.png"} alt="vehsf" width={999} height={999} className="w-[120px]" />
            </div>
            <div className="mt-[10px] font-semibold text-[24px]">Forgot Password</div>
            <div className="w-full max-w-[340px] mt-[40px]">
                <div className="flex items-center gap-[10px]">
                    <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px]">
                        <MdAlternateEmail className="text-[#00000080] text-[18px]" />
                        <input
                            placeholder="Enter email"
                            type="text"
                            className="w-full h-full outline-none"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={() => sendCode()}
                        disabled={isSendingCode || hasSentCode}
                        className={`cursor-pointer ${isSendingCode || hasSentCode ? "bg-gray-400" : "bg-[#026935] hover:bg-transparent border-2 border-[#026935] hover:text-[#026935]"} text-white transition-all duration-300 w-[220px] h-[57px] flex items-center justify-center rounded-[7px] font-semibold`}
                    >
                        {
                            hasSentCode ?
                                (
                                    <div className="flex items-center gap-[5px]">
                                        <IoHourglassOutline />
                                        <span>
                                            {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
                                        </span>
                                    </div>) :
                                (
                                    isSendingCode ?
                                        "Sending..." :
                                        "Send Code"
                                )
                        }
                    </button>
                </div>
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[20px]">
                    <IoKeypadSharp className="text-[#00000080] text-[18px]" />
                    <input
                        placeholder="Enter code"
                        type="number"
                        className="w-full h-full outline-none"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                </div>
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[20px]">
                    <input
                        placeholder="New Password"
                        type={showpwd ? "text" : "password"}
                        className="w-full h-full outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div onClick={() => setShowpwd(!showpwd)} className="text-[20px] cursor-pointer">
                        {
                            showpwd ? <FiEye /> : <FiEyeOff />
                        }
                    </div>
                </div>
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[20px]">
                    <input
                        placeholder="Confirm New Password"
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
                <div className="flex items-center gap-[5px] lg:gap-[10px] leading-tight text-[14px] lg:text-[16px] mt-[20px]">
                    <div className={`w-[12px] h-[12px] lg:w-[17px] lg:h-[17px] rounded-full ${password?.length >= 6 && "bg-[#026935]"} border border-[#026935] text-white flex items-center justify-center text-base mb-[2px]`}>
                        {
                            password.length >= 6 &&
                            <IoIosCheckmark className="lg:text-[20px]" />
                        }
                    </div>
                    At least 6 Characters
                </div>
                <div className="flex items-center gap-[5px] lg:gap-[10px] leading-tight text-[14px] lg:text-[16px] mt-[15px]">
                    <div className={`w-[12px] h-[12px] lg:w-[17px] lg:h-[17px] rounded-full ${password === confirmPassword && "bg-[#026935]"} border border-[#026935] text-white flex items-center justify-center text-base mb-[2px]`}>
                        {
                            password === confirmPassword &&
                            <IoIosCheckmark className="lg:text-[20px]" />
                        }
                    </div>
                    Both passwords must match
                </div>
                <button
                    disabled={!check && isUpdatingPassword}
                    onClick={() => updatePassword()}
                    className={`cursor-pointer ${check && !isUpdatingPassword ? "bg-[#026935] hover:bg-transparent border-2 border-[#026935] hover:text-[#026935]" : "bg-gray-600"} text-white transition-all duration-300 w-full flex items-center justify-center mt-[33px] rounded-[7px] gap-[10px] py-[10px] font-semibold`}
                >
                    {
                        isUpdatingPassword ? "Updating..." : "Update Password"
                    }
                </button>
            </div>
        </div>
    );
}