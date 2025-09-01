"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Personal_Information from "./personal-information";
import { AiFillCloseCircle } from "react-icons/ai";
import Security_And_Privacy from "./security-and-privacy";
import Volunteer_Preferences from "./volunteer-preferences";
import Danger_Zone from "./danger-zone";

export default function Profile() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Page />
        </Suspense>
    );
}

function Page() {

    const searchParams = useSearchParams();
    const profile = searchParams.get("profile");
    const router = useRouter();

    const removeQuery = () => {
        const params = new URLSearchParams(searchParams.toString());

        if (profile) {
            params.delete("profile");
        }

        router.push(`?${params.toString()}`);
    };

    return (
        <div className={`fixed top-0 left-0 w-full h-full z-[60] ${profile ? "visible" : "invisible"} transition-all duration-300 poppins`}>
            <div onClick={() => removeQuery()} className={`${profile ? "bg-[#00000080]" : "bg-transparent"} transition-all duration-300 absolute top-0 left-0 w-full h-full`}></div>
            <div className={`absolute ${profile ? "top-[50%]" : "top-[150%]"} transition-all duration-300 left-[50%] -translate-[50%] w-[85vw] h-[600px] max-w-[750px] bg-white rounded-[20px] p-[20px] py-[40px] lg:p-[50px]`}>
                <div onClick={() => removeQuery()} className="text-[#F10000] text-[24px] fixed top-[10px] right-[10px] cursor-pointer">
                    <AiFillCloseCircle />
                </div>
                <div className="h-full overflow-y-auto">
                    <Personal_Information />
                    <Security_And_Privacy />
                    <Volunteer_Preferences />
                    <Danger_Zone />
                </div>
            </div>
        </div>
    );
}