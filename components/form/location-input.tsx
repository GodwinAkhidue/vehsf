"use client"
import { nigeria_states_lga } from "@/lib/nigeria_states_lga";
import { useState } from "react";

export default function Location_Input() {
    const [state, setState] = useState("");

    const states = Object.keys(nigeria_states_lga);

    const lgas = nigeria_states_lga[state as keyof typeof nigeria_states_lga];

    return (
        <div>
            <div className="mt-[20px] lg:mt-[30px]">
                <div className="font-medium text-[14px] lg:text-base">Location</div>
                <div className="flex gap-[10px] mt-[10px]">
                    <div className="border border-[#00000080] rounded-[7px] px-[25px] h-[57px] flex items-center w-full gap-[10px]">
                        <select value={state} onChange={(e) => setState(e.target.value)} className="w-full h-full outline-none">
                            <option>State</option>
                            {
                                states.map((i, index) => (
                                    <option key={index} value={i}>{i}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="border border-[#00000080] rounded-[7px] px-[25px] h-[57px] flex items-center w-full gap-[10px]">
                        <select className="w-full h-full outline-none">
                            <option>LGA</option>
                            {
                                lgas && lgas.map((i, index) => (
                                    <option key={index} value={i}>{i}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}