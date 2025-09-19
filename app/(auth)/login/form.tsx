"use client"
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
import Login from "@/utils/login";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Form() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const [loggingIn, setLoggingIn] = useState(false);

    const login = () => {
        Login(email, password, toast, router, setLoggingIn);
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center px-[30px] poppins bg-white">
            <Link href={"/"} className="absolute top-[20px] left-[20px] flex gap-[10px] items-center">
                <BiArrowBack className="text-[24px]" />
                <div className="">Back to Homepage</div>
            </Link>
            <div>
                <Image src={"/images/logo.png"} alt="vehsf" width={999} height={999} className="w-[120px]" />
            </div>
            <div className="mt-[10px] font-semibold text-[24px]">Welcome back</div>
            <div className="w-full max-w-[340px] mt-[40px]">
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px]">
                    <FaUser className="text-[#00000080] text-[18px]" />
                    <input
                        placeholder="Enter email or username"
                        type="email"
                        className="w-full h-full outline-none"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[20px]">
                    <RiLock2Fill className="text-[#00000080] text-[22px]" />
                    <input
                        placeholder="Enter correct password"
                        type="password"
                        className="w-full h-full outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    disabled={loggingIn}
                    onClick={() => login()}
                    className={`cursor-pointer ${loggingIn ? "bg-gray-600" : "hover:bg-transparent bg-[#026935]"} border-2 border-[#026935] text-white hover:text-[#026935] transition-all duration-300 w-full flex items-center justify-center mt-[33px] rounded-[7px] gap-[10px] py-[10px] font-semibold`}
                >
                    {
                        loggingIn ?
                            <div>
                                Logging In...
                            </div> :
                            <div className="flex gap-[10px]">
                                Login
                                <MdLogin className="text-[24px]" />
                            </div>
                    }
                </button>
                <div className="flex items-center justify-center">
                    <Link href={'/forgot-password'} className="poppins font-medium text-[#424242] italic mt-[10px] hover:underline">Forgot Password?</Link>
                </div>
                <div className="poppins font-medium text-[#424242] italic text-center mt-[30px]">
                    Don't have an account? <Link href={"/signup"} className="font-bold hover:underline">Join Us</Link>
                </div>
            </div>
        </div>
    );
}