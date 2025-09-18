"use client"

import { useState } from "react";

export default function Language_Spoken({
    languagesSpoken, setLanguagesSpoken
}: {
    languagesSpoken: any,
    setLanguagesSpoken: any
}) {

    const languages = [
        "English",
        "French",
        "Spanish",
        "Igbo",
        "Hausa",
        "Yoruba",
        "Chinese",
        "Hindi",
        "Arabic",
        "Portuguese",
        "Russian"
    ];

    const [limit, setLimit] = useState(6);

    return (
        <div className="mt-[20px] lg:mt-[30px]">
            <div className="font-medium text-[14px] lg:text-base">Language(s) Spoken</div>
            <div className="mt-[10px] flex flex-wrap gap-[8px]">
                {
                    languages.slice(0, limit).map((i: any, index) => (
                        <div
                            key={index}
                            className={`px-[16px] py-[8px] rounded-full font-medium border border-[#026935] text-[#026935] ${languagesSpoken.includes(i) && "bg-[#026935] text-white"} cursor-pointer`}
                            onClick={() => {
                                setLanguagesSpoken(i)
                            }}
                        >
                            {i}
                        </div>
                    ))
                }
                {
                    limit < languages.length &&
                    <div
                        onClick={() => setLimit(languages.length)}
                        className="px-[16px] py-[8px] font-medium text-[#026935] cursor-pointer hover:underline"
                    >
                        Other
                    </div>
                }
            </div>
        </div>
    )
}