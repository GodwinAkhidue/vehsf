"use client"
import 'swiper/css';
import 'swiper/css/effect-fade';
import { createRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Email_Code from "./email_code";
import New_Password from './new_password';

export default function Forgot_Password_Page() {

    const pageRef = createRef<HTMLDivElement>();
    const searchParams = useSearchParams();
    const a = searchParams.get("a")

    useEffect(() => {
        if (a == "code") {
            return pageRef?.current?.scrollBy({
                left: 9999,
                behavior: "smooth"
            });
        }
        return pageRef?.current?.scrollBy({
            left: -9999,
            behavior: "smooth"
        });
    }, [a])

    return (
        <div ref={pageRef} className="flex w-full h-screen overflow-hidden">
            <div className="w-max flex">
                <Email_Code />
                <New_Password />
            </div>
        </div>
    );
}