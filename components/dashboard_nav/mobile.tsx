"use client"
import Link from "next/link";
import { useState } from "react";
import { BiDonateHeart } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";
import { IoMenu, IoSettingsOutline } from "react-icons/io5";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { MdOutlineLogout, MdOutlineSpaceDashboard } from "react-icons/md";
import { TiMessage } from "react-icons/ti";

export default function Dashboard_Navigation_Mobile() {

    const [showNav, setShowNav] = useState(false);

    const links = [
        {
            icon: MdOutlineSpaceDashboard,
            name: "Overview",
            link: "/dashboard"
        },
        {
            icon: BiDonateHeart,
            name: "Donations",
            link: "/dashboard/donations"
        },
        {
            icon: GrTransaction,
            name: "Transactions",
            link: "/dashboard/transactions"
        },
        {
            icon: FaCheckCircle,
            name: "Commitments",
            link: "/dashboard/commitments"
        },
        {
            icon: TiMessage,
            name: "Messages",
            link: "/dashboard/messages"
        },
        {
            icon: GoBell,
            name: "Notifications",
            link: "/dashboard/notifications"
        },
    ];

    const links2 = [
        {
            icon: IoSettingsOutline,
            name: "Settings",
            link: "/dashboard/settings"
        },
        {
            icon: LuMessageCircleQuestion,
            name: "FAQ & Support",
            link: "/dashboard/faq-and-support"
        },
        {
            icon: MdOutlineLogout,
            name: "Logout",
            link: "/dashboard"
        },
    ]

    return (
        <div className="bg-white text-[#121212] poppins lg:hidden">
            <div onClick={() => setShowNav(!showNav)} className={`${showNav ? "w-[120px] duration-300 delay-100 fixed" : "w-[22px] duration-200 absolute"} transition-all top-[23px] left-[15px] z-[52] text-[20px] cursor-pointer flex items-center gap-[5px] overflow-hidden`}>
                <IoMenu className="shrink-0" />
                <div className="font-semibold text-[16px] whitespace-nowrap">
                    Main Menu
                </div>
            </div>
            <div className={`fixed top-0 left-0 w-full h-full z-[51] ${showNav ? "visible" : "invisible"} transition-all duration-300`}>
                <div onClick={() => setShowNav(false)} className={`${showNav ? "bg-[#00000080] " : "bg-transparent"} transition-all duration-300 absolute top-0 left-0 w-full h-full cursor-pointer`}></div>
                <div className={`bg-white border border-[#E6EDFF] rounded-r-[10px] absolute top-0 ${showNav ? "left-0" : "-left-[100%]"} transition-all duration-300 w-full h-full max-w-[315px] pl-[15px] flex flex-col gap-[20px] pt-[70px]`}>
                    {
                        links.map((i, index) => (
                            <Link href={i.link} key={index} className="flex items-center gap-[5px]">
                                <i.icon className="text-[20px]" />
                                <div className="text-[14px] font-semibold">{i.name}</div>
                            </Link>
                        ))
                    }
                    <div className="my-[10px] h-[1px] bg-[#C4C4C4] w-[190px]">

                    </div>
                    {
                        links2.map((i, index) => (
                            <Link href={i.link} key={index} className="flex items-center gap-[5px]">
                                <i.icon className="text-[20px]" />
                                <div className="text-[14px] font-semibold">{i.name}</div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}