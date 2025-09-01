"use client"
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiDonateHeart } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { MdOutlineLogout, MdOutlineSpaceDashboard } from "react-icons/md";


export default function Dashboard_Navigation_Desktop() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Page />
        </Suspense>
    );
}

const Page = () => {

    const [expandNav, setExpandNav] = useState(true);

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
            icon: IoIosPeople,
            name: "Connect",
            link: "/dashboard/connect"
        },
    ];

    const links2 = [
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

    const router = useRouter();
    const searchParams = useSearchParams();
    const notification = searchParams.get("notification");
    const profile = searchParams.get("profile");

    const addQuery = () => {
        const params = new URLSearchParams(searchParams.toString());

        if (notification) {
            params.delete("notification");
        } else {
            params.set("notification", "true"); // add or update query param
        }

        router.push(`?${params.toString()}`);
    };

    const addQueryProfile = () => {
        const params = new URLSearchParams(searchParams.toString());

        if (profile) {
            params.delete("profile");
        } else {
            params.set("profile", "true"); // add or update query param
        }

        router.push(`?${params.toString()}`);
    };

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
                <button onClick={() => addQuery()} className="flex items-center gap-[20px] cursor-pointer">
                    <GoBell className="text-[20px] shrink-0" />
                    <div className="text-[14px] font-semibold whitespace-nowrap">Notifications</div>
                </button>
                <div className={`my-[10px] h-[1px] w-[190px] ${expandNav ? "bg-[#C4C4C4]" : "bg-transparent"}`}>

                </div>
                <button onClick={() => addQueryProfile()} className="flex items-center gap-[20px] cursor-pointer">
                    <AiOutlineUser className="text-[20px] shrink-0" />
                    <div className="text-[14px] font-semibold whitespace-nowrap">Profile</div>
                </button>
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