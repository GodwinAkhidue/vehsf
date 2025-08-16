"use client"
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { BiArrowBack } from "react-icons/bi";

export default function Signup_Page() {

    const slides = [
        "/images/login-slides/1.jpg",
        "/images/login-slides/2.jpg",
        "/images/login-slides/3.jpg",
        "/images/login-slides/4.jpg",
        "/images/login-slides/5.jpg",
        "/images/login-slides/6.jpg",
        "/images/login-slides/7.jpg",
        "/images/login-slides/8.jpg",
    ];

    const joinoptions = [
        {
            name: "Volunteer",
            url: "/signup/volunteer"
        },
        {
            name: "NGO",
            url: "/signup/ngo"
        },
        {
            name: "Donor",
            url: "/signup/donor"
        },
    ];

    return (
        <div className="flex flex-row-reverse w-full h-screen">
            <div className="w-full h-full flex flex-col items-center justify-center px-[30px] poppins bg-white">
                <Link href={"/"} className="absolute top-[20px] left-[20px] flex gap-[10px] items-center">
                    <BiArrowBack className="text-[24px]" />
                    <div className="">Back to Homepage</div>
                </Link>
                <div>
                    <Image src={"/images/logo.png"} alt="vehsf" width={999} height={999} className="w-[120px]" />
                </div>
                <div className="mt-[10px] font-semibold text-[24px]">Join as a</div>
                <div className="w-full max-w-[340px] mt-[40px]">
                    <div className="flex items-center justify-center gap-[30px]">
                        {
                            joinoptions.map((i, index) => (
                                <div key={index} className="px-[20px] py-[10px] rounded-full border border-[#121212] text-[#121212] hover:opacity-60 transition-all duration-200 text-[14px] font-medium cursor-pointer">
                                    {i.name}
                                </div>
                            ))
                        }
                    </div>
                    <button className="cursor-pointer bg-[#026935] hover:bg-transparent border-2 border-[#026935] text-white hover:text-[#026935] transition-all duration-300 w-full flex items-center justify-center mt-[33px] rounded-[7px] gap-[10px] py-[10px] font-semibold">
                        Continue
                    </button>
                    <div className="poppins font-medium text-[#424242] italic text-center mt-[10px]">
                        Don't want to continue? <Link href={"/"} className="font-bold hover:underline">Go back home</Link>
                    </div>
                </div>
            </div>
            <div className="h-full hidden lg:block w-[500px]">
                <Swiper
                    effect={'fade'}
                    modules={[EffectFade, Autoplay]}
                    className="w-full h-full"
                    autoplay={{
                        delay: 5000
                    }}
                    loop={true}
                >
                    {
                        slides.map((i, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-full h-full relative">
                                    <Image src={i} alt="vehsf" fill className="object-cover" />
                                    <div className="relative z-10 w-full h-full bg-black opacity-70">

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
}