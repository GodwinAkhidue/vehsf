"use client"
import { FaUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { programs } from "@/constants/programs";
import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import Initialize_One_Time_Donation from "@/utils/donations/one_time/initialize";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Complete_One_Time_Donation from "@/utils/donations/one_time/complete";

export default function Donate() {

    const amounts = [50000, 100000, 150000, 200000, 250000];
    const [customAmount, setCustomAmount] = useState(false);

    const format = (amount: number) => {
        const formatted = new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        }).format(amount);

        return formatted;
    };

    const donationTypes = [
        "One time",
        // "Monthly",
        // "Quarterly"
    ];

    const paymentMethods = [
        "PayStack",
    ]

    const [data, setData] = useState({
        amount: 0,
        donationType: donationTypes[0],
        donationPurpose: "",
        paymentMethod: paymentMethods[0],
        firstname: "",
        lastname: "",
        email: ""
    });

    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const initialize_one_time_donation = async () => {
        if (data.paymentMethod === "PayStack") {
            Initialize_One_Time_Donation(
                toast, data, setLoading, router
            );
        }
    }

    const searchParams = useSearchParams();

    const reference = searchParams.get("reference");

    useEffect(() => {
        if (reference) {
            Complete_One_Time_Donation(
                toast, reference, setLoading, router
            );
        }
    }, [reference])

    return (
        <div className="w-full flex items-center justify-center px-[15px] lg:px-[50px] -mt-[30px] lg:-mt-[60px] mb-[100px] lg:mb-[150px] z-20 relative">
            <div className="w-full max-w-[1050px] bg-[#EBFFF5] p-[20px] lg:p-[60px] rounded-[30px] border border-black border-dashed flex flex-col items-center justify-center">
                <div className="bg-[#F9F9F9] p-[20px] lg:p-[30px] border border-[#026935] border-dashed rounded-[20px] w-full max-w-[600px]">
                    <div className="font-semibold text-[18px] lg:text-[24px] lg:leading-tight text-center">
                        Why you donate
                    </div>
                    <div className="mt-[10px] text-center text-[14px] lg:text-[20px]">
                        We make the most of every money you give.
                        Your donation help us provide essential resources
                        and support of those in need
                    </div>
                </div>

                <div className="font-bold text-[18px] mt-[30px] lg:mt-[50px] text-center lg:text-[24px]">
                    Donate Now
                </div>

                <div className="mt-[20px] lg:mt-[30px] flex flex-wrap gap-[15px] lg:gap-[20px] items-center justify-center">
                    {
                        amounts.map((i, index) => (
                            <div
                                key={index}
                                className={`border-2 border-[#026935] ${data.amount === i ? "text-white bg-[#026935]" : "text-[#026935] bg-transparent"} font-semibold rounded-[10px] px-[15px] py-[7px] lg:px-[25px] lg:py-[10px] text-[14px] lg:text-base cursor-pointer`}
                                onClick={() => {
                                    setCustomAmount(false);
                                    setData((prev: any) => ({
                                        ...prev,
                                        amount: i
                                    }))
                                }}
                            >
                                {format(i)}
                            </div>
                        ))
                    }
                    <div
                        className={`${customAmount ? "text-white bg-[#026935]" : "text-[#026935] bg-transparent"} border-2 border-[#026935] font-semibold rounded-[10px] px-[15px] py-[7px] lg:px-[25px] lg:py-[10px] text-[14px] lg:text-base cursor-pointer`}
                        onClick={() => {
                            setCustomAmount(true);
                            setData((prev: any) => ({
                                ...prev,
                                amount: ""
                            }))
                        }}
                    >
                        Custom Amount
                    </div>
                </div>

                {
                    customAmount &&
                    <div className="mt-[20px] lg:mt-[30px]">
                        <div className="border-b border-[#026935] px-[25px] py-[15px] flex items-center w-full gap-[10px]">
                            <div className="text-[#026935] text-[18px]">
                                &#8358;
                            </div>
                            <input
                                placeholder="Enter Amount"
                                type="number"
                                className="w-full h-full outline-none"
                                value={data.amount}
                                onChange={(e) => {
                                    setData((prev: any) => ({
                                        ...prev,
                                        amount: e.target.value
                                    }))
                                }}
                            />
                        </div>
                    </div>
                }

                <div className="mt-[30px] lg:mt-[50px] flex flex-col lg:flex-row lg:justify-between w-full gap-[30px]">
                    {/* Donation Type */}
                    <div>
                        <div className="text-[18px] lg:text-[20px] font-semibold text-center lg:text-start">
                            Donation Type
                        </div>
                        <div className="mt-[15px] flex gap-[10px]">
                            {
                                donationTypes.map((i, index) => (
                                    <div
                                        key={index}
                                        className="text-[14px] flex items-center gap-[5px] font-medium cursor-pointer"
                                        onClick={() => {
                                            setData((prev: any) => (
                                                {
                                                    ...prev,
                                                    donationType: i
                                                }
                                            ))
                                        }}
                                    >
                                        <div className={`w-[11px] h-[11px] rounded-full border border-[#026935] ${data.donationType === i ? "bg-[#026935]" : "bg-transparent"}`}></div>
                                        {i}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* Donation Purpose */}
                    <div>
                        <div className="text-[18px] lg:text-[20px] font-semibold text-center lg:text-end">
                            Donation Purpose
                        </div>
                        <div className="mt-[15px] w-full flex items-center justify-center">
                            <select
                                className="w-[180px] border-2 border-[#026935] p-[10px] text-[14px] font-medium rounded-[5px] outline-none"
                                value={data.donationPurpose}
                                onChange={(e) => {
                                    setData((prev: any) => (
                                        {
                                            ...prev,
                                            donationPurpose: e.target.value
                                        }
                                    ))
                                }}
                            >
                                <option value={""}>Select Purpose</option>
                                {
                                    programs.map((i, index) => (
                                        <option key={index} value={i.header}>{i.header}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>

                <div className="lg:w-full">
                    <div className="text-[18px] lg:text-[20px] font-semibold text-center lg:text-start mt-[30px]">
                        Select Payment Method
                    </div>
                    <div className="mt-[15px] flex gap-[10px]">
                        {
                            paymentMethods.map((i, index) => (
                                <div key={index} className="text-[14px] flex items-center gap-[5px] font-medium">
                                    <div className={`w-[11px] h-[11px] rounded-full border border-[#026935] ${data.paymentMethod === i ? "bg-[#026935]" : "bg-transparent"}`}></div>
                                    {i}
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="lg:w-full">
                    <div className="text-[18px] lg:text-[20px] font-semibold text-center lg:text-start mt-[30px] lg:mt-[50px]">
                        Personal Information
                    </div>
                    <div className="mt-[15px] flex flex-col lg:flex-row items-center justify-center gap-[10px] lg:gap-[20px]">
                        <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px]">
                            <FaUser className="text-[#00000080] text-[18px]" />
                            <input
                                placeholder="First Name"
                                type="text"
                                className="w-full h-full outline-none"
                                value={data.firstname}
                                onChange={(e) => {
                                    setData((prev: any) => ({
                                        ...prev,
                                        firstname: e.target.value
                                    }))
                                }}
                            />
                        </div>
                        <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px]">
                            <FaUser className="text-[#00000080] text-[18px]" />
                            <input
                                placeholder="Last Name"
                                type="text"
                                className="w-full h-full outline-none"
                                value={data.lastname}
                                onChange={(e) => {
                                    setData((prev: any) => ({
                                        ...prev,
                                        lastname: e.target.value
                                    }))
                                }}
                            />
                        </div>
                        <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px]">
                            <MdAlternateEmail className="text-[#00000080] text-[18px]" />
                            <input
                                placeholder="Email Address"
                                type="text"
                                className="w-full h-full outline-none"
                                value={data.email}
                                onChange={(e) => {
                                    setData((prev: any) => ({
                                        ...prev,
                                        email: e.target.value
                                    }))
                                }}
                            />
                        </div>
                    </div>
                    <button
                        disabled={loading}
                        onClick={() => initialize_one_time_donation()}
                        className="cursor-pointer bg-[#026935] hover:bg-transparent border-2 border-[#026935] text-white hover:text-[#026935] transition-all duration-300 w-full max-w-[300px] flex items-center justify-center justify-self-center mt-[30px] lg:mt-[40px] rounded-[7px] gap-[10px] py-[10px] font-semibold"
                    >
                        Continue Donation
                    </button>
                </div>

            </div>
            {
                loading && <div className="fixed top-0 right-0 w-full h-full bg-[#0000004d] z-50 flex items-center justify-center">
                    <AiOutlineLoading className="text-white text-[40px] lg:text-[60px] animate-spin" />
                </div>
            }
        </div>
    );
}