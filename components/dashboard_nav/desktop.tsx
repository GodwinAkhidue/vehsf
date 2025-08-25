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


export default function Dashboard_Navigation_Desktop() {

    const [expandNav, setExpandNav] = useState(false);

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
        <div className={`mt-[10px] hidden lg:block bg-white border border-[#E6EDFF] rounded-r-[10px] ${expandNav ? "px-[40px] w-[250px]" : "px-[30px] w-[70px]"} transition-all duration-300 overflow-hidden py-[50px]`}>
            <div onClick={() => setExpandNav(!expandNav)} className="flex items-center gap-[20px] cursor-pointer">
                <IoMenu className="shrink-0 text-[20px]" />
                <div className="font-semibold text-[14px] whitespace-nowrap">
                    Main Menu
                </div>
            </div>
            <div className="flex flex-col gap-[20px] mt-[30px]">
                {
                    links.map((i, index) => (
                        <Link href={i.link} key={index} className="flex items-center gap-[20px]">
                            <i.icon className="text-[20px] shrink-0" />
                            <div className="text-[14px] font-semibold whitespace-nowrap">{i.name}</div>
                        </Link>
                    ))
                }
                <div className={`my-[10px] h-[1px] w-[190px] ${expandNav ? "bg-[#C4C4C4]" : "bg-transparent"}`}>

                </div>
                {
                    links2.map((i, index) => (
                        <Link href={i.link} key={index} className="flex items-center gap-[20px]">
                            <i.icon className="text-[20px] shrink-0" />
                            <div className="text-[14px] font-semibold whitespace-nowrap">{i.name}</div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}