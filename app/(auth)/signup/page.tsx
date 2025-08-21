"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "./modal/modal";

export default function Signup_Page() {

    const [joinoption, setJoinoption] = useState({ name: "", url: "" });

    const joinoptions = [
        {
            name: "Volunteer",
            url: "/signup/volunteer/personal-info"
        },
        {
            name: "NGO",
            url: "/signup/ngo/personal-info"
        },
        {
            name: "Donor",
            url: "/signup/donor/personal-info"
        },
    ];

    const [showModal, setShowModal] = useState(false);

    const Continue = () => {
        if (joinoption.url) {
            setShowModal(true);
        } else {
            alert("Select an option");
        }
    }

    return (
        <div className="flex flex-row-reverse w-full h-screen">
            <div className="w-full h-full flex flex-col items-center justify-center px-[30px] poppins bg-white">
                <div>
                    <Image src={"/images/logo.png"} alt="vehsf" width={999} height={999} className="w-[120px]" />
                </div>
                <div className="mt-[10px] font-semibold text-[24px]">Join as a</div>
                <div className="w-full max-w-[340px] mt-[40px]">
                    <div className="flex items-center justify-center gap-[15px] lg:gap-[30px]">
                        {
                            joinoptions.map((i, index) => (
                                <div
                                    onClick={() => setJoinoption(i)}
                                    key={index}
                                    className={`px-[20px] py-[10px] rounded-full border 
                                            ${joinoption.name === i.name ? "bg-[#026935] border-[#026935] text-white" : "border-[#121212] text-[#121212] hover:opacity-60  bg-transparent"} 
                                        transition-all duration-200 text-[14px] font-medium cursor-pointer`
                                    }
                                >
                                    {i.name}
                                </div>
                            ))
                        }
                    </div>
                    <button
                        onClick={() => Continue()}
                        className="cursor-pointer bg-[#026935] hover:bg-transparent border-2 border-[#026935] text-white hover:text-[#026935] transition-all duration-300 w-full flex items-center justify-center mt-[33px] rounded-[7px] gap-[10px] py-[10px] font-semibold"
                    >
                        Continue
                    </button>
                    <div className="poppins font-medium text-[#424242] italic text-center mt-[10px]">
                        Don't want to continue? <Link href={"/"} className="font-bold hover:underline">Go back home</Link>
                    </div>
                </div>
            </div>
            <div className="h-full hidden lg:block w-[50vw] shrink-0">
                <div className="flex items-center justify-center w-full h-full">
                    <Image src={"/images/signup_collage.svg"} alt="vehsf" width={448} height={473} className="w-[448px]" />
                </div>
            </div>
            <Modal url={joinoption.url} showModal={showModal} />
        </div>
    );
}