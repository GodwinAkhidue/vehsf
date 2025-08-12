"use client"
import Image from "next/image";
import Link from "next/link";
import { CgMenuRightAlt } from "react-icons/cg";
import Nav from "./nav";
import { useState } from "react";

export default function Header() {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className="w-full shadow-lg flex items-center justify-center bg-[#F9FFFC] relative z-50">

            <div className="pl-[5px] pr-[15px] lg:pl-[35px] lg:py-[20px] lg:pr-[50px] w-full max-w-[1400px] flex items-center justify-between">

                <div>
                    <Link href={"/"}>
                        <Image
                            src={"/images/logo.png"}
                            alt="vehsf"
                            width={999}
                            height={999}
                            className="w-[100px] lg:w-[140px]"
                        />
                    </Link>
                </div>

                <div className="xl:hidden">
                    <button onClick={() => setShowNav(true)} className="text-[26px] text-[#026935] cursor-pointer">
                        <CgMenuRightAlt />
                    </button>
                </div>

                <Nav showNav={showNav} setShowNav={setShowNav} />

            </div>

        </div>
    );
}