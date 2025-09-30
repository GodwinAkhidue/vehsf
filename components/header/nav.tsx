"use client"
import { server_url } from "@/constants/server_url";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Nav({ showNav, setShowNav }: { showNav: boolean, setShowNav: Function }) {

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {

        const api = axios.create({
            baseURL: server_url,
            withCredentials: true
        });

        api.get(`/api/auth/validateSession`)
            .then((res) => {
                if (res.data.success === true) {
                    setLoggedIn(true);
                }
            })

    }, [])

    const urls = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "About Us",
            url: "/about"
        },
        {
            name: "What We Do",
            url: "/what-we-do"
        },
        {
            name: "Explore Impact",
            url: "/explore-impact"
        },
        {
            name: "News / Blog",
            url: "/news-and-blog"
        },
        {
            name: "Contact Us",
            url: "/contact-us"
        },
    ]

    return (
        <div className={`fixed xl:static top-0 right-0 w-full xl:w-max h-full z-50 ${showNav ? "visible" : "invisible xl:visible"} poppins`}>

            <div onClick={() => setShowNav(false)} className={`z-0 absolute top-0 right-0 w-full h-full ${showNav ? "bg-[#0000004d]" : "bg-transparent"} transition-all duration-300 xl:hidden`}>

            </div>

            <div
                className={`z-10 absolute xl:static top-0 
                    ${showNav ? "right-0" : "-right-[260px]"} transition-all duration-300 w-full max-w-[260px] xl:max-w-full h-full bg-[#F9FFFC] rounded-l-[10px] p-[15px] xl:flex xl:items-center xl:gap-[30px]`
                }
            >

                <div className="w-full flex justify-end xl:hidden">
                    <button
                        onClick={() => { setShowNav(false) }}
                        className="text-[26px] text-[#026935]"
                    >
                        <IoClose />
                    </button>
                </div>

                <div className="flex flex-col xl:flex-row gap-[30px] py-[30px] pl-[5px] xl:p-0">
                    {
                        urls.map((i, index) => (
                            <div className="relative group" key={index}>
                                <Link href={i.url}>{i.name}</Link>
                                <div className="absolute -bottom-[5px] left-0 h-[3px] w-0 group-hover:w-full transition-all duration-300 bg-[#026935] rounded-full"></div>
                            </div>
                        ))
                    }
                </div>

                <div className="pl-[5px] flex flex-col xl:flex-row xl:items-center xl:p-0">
                    <div className="text-[#026935] font-semibold xl:hidden">
                        <Link href={"/donate"}>Donate</Link>
                    </div>
                    {
                        loggedIn ?
                            <Link href={"/dashboard"} className={`border border-[#026935] bg-transparent text-[#026935] hover:bg-[#026935] hover:text-[#f9f9f9] font-semibold px-[30px] py-[10px] rounded-full w-max transition-all duration-300 mt-[20px] xl:mt-0 xl:ml-[12px] cursor-pointer`}>
                                Dashboard
                            </Link> :
                            <div className="flex flex-col">
                                <Link href={"/login"} className={`border border-[#026935] bg-[#026935] text-[#f9f9f9] hover:bg-transparent hover:text-[#026935] font-semibold px-[30px] py-[10px] rounded-full w-max transition-all duration-300 mt-[25px] xl:mt-0 cursor-pointer`}>
                                    Login
                                </Link>
                                <Link href={"/signup"} className={`border border-[#026935] bg-transparent text-[#026935] hover:bg-[#026935] hover:text-[#f9f9f9] font-semibold px-[30px] py-[10px] rounded-full w-max transition-all duration-300 mt-[20px] xl:mt-0 xl:ml-[12px] cursor-pointer`}>
                                    Join Us
                                </Link>
                            </div>
                    }
                    <div className="text-[#026935] font-semibold hidden xl:block xl:ml-[30px] relative group">
                        <Link href={"/donate"}>Donate</Link>
                        <div className="absolute -bottom-[5px] left-0 h-[3px] w-0 group-hover:w-full transition-all duration-300 bg-[#026935] rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}