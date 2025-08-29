import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

export default function Table() {

    const data = [
        {
            id: "456789356",
            date: "Sep 9, 2024, 04:30pm",
            from: "fadel@email.com",
            type: "income",
            amount: 500,
            purpose: "Education Programs",
            status: "Pending"
        },
        {
            id: "456789356",
            date: "Sep 9, 2024, 04:30pm",
            from: "fadel@email.com",
            type: "income",
            amount: 500,
            purpose: "Education Programs",
            status: "Pending"
        },
        {
            id: "456789356",
            date: "Sep 9, 2024, 04:30pm",
            from: "fadel@email.com",
            type: "income",
            amount: 500,
            purpose: "Education Programs",
            status: "Pending"
        },
        {
            id: "456789356",
            date: "Sep 9, 2024, 04:30pm",
            from: "fadel@email.com",
            type: "income",
            amount: 500,
            purpose: "Education Programs",
            status: "Pending"
        },
    ];

    return (
        <div className="w-full">
            <div className="flex gap-[20px] flex-col lg:flex-row lg:justify-between w-full items-center justify-center">
                <div className="flex flex-col lg:flex-row lg:justify-start gap-[20px] items-center justify-center">
                    <div className="bg-[#E6F0E6] rounded-[5px] flex gap-[10px] items-center p-[10px]">
                        <IoSearchOutline />
                        <input className="h-full w-[130px] outline-none" placeholder="Search Transactions" />
                    </div>
                    <div className="py-[10px] px-[20px] border border-[#CBCAD7] gap-[60px] flex items-center rounded-[5px]">
                        <div>Date Range</div>
                        <IoIosArrowDown />
                    </div>
                    <div className="py-[10px] px-[20px] border border-[#CBCAD7] gap-[60px] flex items-center rounded-[5px]">
                        <div>Type</div>
                        <IoIosArrowDown />
                    </div>
                </div>
                <div className="cursor-pointer text-white bg-[#026935] px-[20px] py-[10px] rounded-[5px]">
                    Make New Donation
                </div>
            </div>
            <div className="w-full overflow-x-scroll">
                <table className="mt-[20px] mb-[40px] lg:w-full border-x border-[#F5F5F5]">
                    <thead className="text-[#737375] font-medium bg-[#F5F5F5] p-[20px]">
                        <tr className="">
                            <th className="p-[20px] whitespace-nowrap text-left">Ref ID</th>
                            <th className="p-[20px] whitespace-nowrap text-left">Transaction Date</th>
                            <th className="p-[20px] whitespace-nowrap text-left">From</th>
                            <th className="p-[20px] whitespace-nowrap text-left"> Type </th>
                            <th className="p-[20px] whitespace-nowrap text-left">Amount</th>
                            <th className="p-[20px] whitespace-nowrap text-left">Purpose</th>
                            <th className="p-[20px] whitespace-nowrap text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((i, index) => (
                                <tr key={index} className="text-[14px] border-b border-[#F5F5F5]">
                                    <td className="p-[20px] whitespace-nowrap">{i.id}</td>
                                    <td className="p-[20px] whitespace-nowrap">{i.date}</td>
                                    <td className="p-[20px] whitespace-nowrap">{i.from}</td>
                                    <td className="p-[20px] whitespace-nowrap">{i.type}</td>
                                    <td className="p-[20px] whitespace-nowrap">${i.amount}</td>
                                    <td className="p-[20px] whitespace-nowrap">{i.purpose}</td>
                                    <td className="p-[20px] whitespace-nowrap">
                                        <div className="px-[10px] py-[5px] w-max rounded-full bg-[#FFBD2E0A] text-[#FFBD2E] font-medium">
                                            {i.status}
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}