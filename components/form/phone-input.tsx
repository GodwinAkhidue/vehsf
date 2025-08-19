"use client"
import countries from "world-countries";
import ReactCountryFlag from "react-country-flag";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Phone_Input() {

    const [phoneCountry, setPhoneCountry] = useState("NG");

    const dialCode = `${countries.find((i) => i.cca2 === phoneCountry)?.idd.root}${countries.find((i) => i.cca2 === phoneCountry)?.idd.suffixes?.[0]}`

    return (
        <div className="mt-[20px] lg:mt-[30px]">
            <div className="font-medium text-[14px] lg:text-base">Phone Number</div>
            <div className="mt-[10px] flex items-center gap-[10px]">
                <div className="relative flex items-center rounded-[7px] px-[15px] h-[57px] gap-[10px] border border-[#00000080] w-max shrink-0">
                    <select value={phoneCountry} onChange={(e) => {
                        setPhoneCountry(e.target.value)
                    }} className="absolute top-0 left-0 opacity-0 w-full">
                        {countries.map((c) => (
                            <option key={c.cca2} value={c.cca2}>
                                {c.name.common} ({c.idd.root}{c.idd.suffixes?.[0]})
                            </option>
                        ))}
                    </select>
                    <ReactCountryFlag countryCode={phoneCountry} svg style={{ width: "25px" }} />
                    <div>
                        {dialCode}
                    </div>
                    <IoIosArrowDown className="text-[20px]" />
                </div>

                <div className="border border-[#00000080] rounded-[7px] px-[25px] h-[57px] w-full flex items-center justify-center">
                    <input placeholder="123456789" type="phone" className="w-full h-full outline-none" />
                </div>
            </div>
        </div>
    );
}