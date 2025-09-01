"use client"
import { faqs } from "@/constants/faqs";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Faq_and_Support() {
    return (
        <div className="px-[15px] lg:pl-0 poppins mt-[10px] w-full flex items-center justify-center">
            <div className="w-full max-w-[570px] flex flex-col items-center justify-center">
                <div className="font-semibold text-[32px]">FAQs & Support</div>
                <div className="text-center mt-[5px]">
                    Can’t find the answer here? Check out our <span className="underline">Help Center</span>.
                </div>
                <div className="w-full mt-[40px] mb-[40px] space-y-[40px]">
                    {
                        faqs.map((i, index) => (
                            <Faq_Container i={i} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

function Faq_Container({ i }: { i: any }) {
    return (
        <div>
            <div className="font-semibold">{i.title}</div>
            <div className="mt-[20px]">
                {
                    i.items.map((i: any, index: any) => (
                        <Faq_Item i={i} key={index} />
                    ))
                }
            </div>
        </div>
    );
}

function Faq_Item({ i }: { i: any }) {

    const [open, setOpen] = useState(false);

    return (
        <div className="py-[10px] border-b border-[#EAEAEA]">
            <div onClick={() => setOpen(!open)} className="flex items-center justify-between gap-[20px] cursor-pointer">
                <div className="font-medium">{i.question}</div>
                <div className={`text-[20px] ${open ? "rotate-180" : "rotate-0"}`}>
                    <IoIosArrowDown />
                </div>
            </div>
            <div className={`${open ? "h-max py-[20px]" : "h-0 py-0"} overflow-hidden whitespace-pre-line`}>
                {i.answer}
            </div>
        </div>
    );
}