"use client"

import { useEffect, useState } from "react";

export default function Navigation() {

    const [pages, setPages] = useState<any[]>([]);

    useEffect(() => {

        setPages([]);

        for (let index = 1; index <= 10; index++) {
            setPages((items) => [...items, index])
        }

    }, [])

    return (
        <div className="py-[40px] flex items-center justify-center gap-[20px] lg:gap-[50px]">
            <div className="text-[#026935] border border-[#026935] font-medium text-[14px] rounded-[5px] px-[15px] lg:px-[20px] py-[10px] cursor-pointer">
                Previous
            </div>
            <div className="flex gap-[15px] font-medium text-[12px] w-max max-w-[125px] lg:max-w-[220px] overflow-hidden cursor-pointer">
                {
                    pages.map((i, index) => (
                        <div key={index}>{i}</div>
                    ))
                }
            </div>
            <div className="text-[#026935] border border-[#026935] font-medium text-[14px] rounded-[5px] px-[15px] lg:px-[20px] py-[10px] cursor-pointer">
                Next
            </div>
        </div>
    );
}