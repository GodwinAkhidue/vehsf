"use client"
import countries from "world-countries";
import ReactCountryFlag from "react-country-flag";
import { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface Phone {
    number: any,
    setNumber: any,
    code: any,
    setCode: any,
    country: any,
    setCountry: any
}

export default function Phone_Input(
    {
        number,
        setNumber,
        code,
        setCode,
        country,
        setCountry
    }: Phone
) {


    useEffect(() => {

        const dialCode = `${countries.find((i) => i.cca2 === country)?.idd.root}${countries.find((i) => i.cca2 === country)?.idd.suffixes?.[0]}`
        setCode(dialCode)

    }, [country])

    return (
        <div className="mt-[20px] lg:mt-[30px]">
            <div className="font-medium text-[14px] lg:text-base">Phone Number</div>
            <div className="mt-[10px] flex items-center gap-[10px]">
                <div className="relative flex items-center rounded-[7px] px-[15px] h-[57px] gap-[10px] border border-[#00000080] w-max shrink-0">
                    <select value={country} onChange={(e) => {
                        setCountry(e.target.value)
                    }} className="absolute z-10 top-0 left-0 opacity-0 w-full h-full">
                        {countries.map((c) => (
                            <option key={c.cca2} value={c.cca2}>
                                {c.name.common} ({c.idd.root}{c.idd.suffixes?.[0]})
                            </option>
                        ))}
                    </select>
                    <ReactCountryFlag countryCode={country} svg style={{ width: "25px" }} />
                    <div>
                        {code}
                    </div>
                    <IoIosArrowDown className="text-[20px]" />
                </div>

                <div className="border border-[#00000080] rounded-[7px] px-[25px] h-[57px] w-full flex items-center justify-center">
                    <input
                        name="phone"
                        placeholder="123456789"
                        type="number"
                        className="w-full h-full outline-none"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}