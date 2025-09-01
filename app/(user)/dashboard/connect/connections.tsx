import Image from "next/image";
import { FaPhone } from "react-icons/fa";


export default function Connections() {

    const data = [
        {
            name: "Charity Walk",
            date: "Mar. 20, 2025",
            status: "Pending"
        },
        {
            name: "Charity Walk",
            date: "Mar. 20, 2025",
            status: "Pending"
        },
        {
            name: "Charity Walk",
            date: "Mar. 20, 2025",
            status: "Pending"
        },
    ]

    return (
        <div className="border border-[#BABABA] p-[30px] rounded-[15px] w-full">
            <div className="mt-[15px] flex flex-wrap gap-[20px]">
                {
                    data.map((i, index) => (
                        <div key={index} className="flex items-center gap-[50px] bg-[#F5F5F5] rounded-[5px] py-[12px] px-[15px]">
                            <div className="flex items-center gap-[15px]">
                                <div className="w-[48px] h-[48px] rounded-full overflow-hidden relative shrink-0">
                                    <Image src={"/images/connect/1.jpg"} alt={i.name} fill className="object-cover" />
                                </div>
                                <div className="">
                                    <div className="font-semibold">Jessica Drew</div>
                                    <div className="mt-[5px] text-[#707991] text-[14px]">Volunteer</div>
                                </div>
                            </div>
                            <div>
                                <FaPhone className="text-[#026935]" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}