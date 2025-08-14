"use client";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function Scroll_Top_Arrow() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY >= 500)
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

    return (
        <div className={`fixed right-[20px] lg:right-[40px] ${showButton ? "bottom-[20px] lg:bottom-[40px]" : "-bottom-[100px]"} transition-all duration-300 z-50`}>
            <button onClick={() => scrollToTop()} className="bg-[#026935] text-white p-[12px] rounded-[5px] shadow-md">
                <IoIosArrowUp className="text-[24px] lg:text-[28px]" />
            </button>
        </div>
    );
}
