import { FaCalendarAlt } from "react-icons/fa";
import { FaFileExport, FaFileInvoice } from "react-icons/fa6";
import Stats from "./stats/stats";
import Table from "./table/table";

export default function Transactions_Page() {

    return (
        <div className="px-[15px] lg:pl-0 w-full poppins">
            <div className="font-semibold text-[24px] mt-[20px] mb-[10px]">Transactions History</div>
            <div className="flex flex-col items-center justify-center gap-[20px] lg:justify-between lg:flex-row mt-[15px]">
                <div className="rounded-[8px] bg-[#F5F5F5] px-[16px] py-[10px] text-[#737375] flex items-center gap-[10px] font-medium w-max">
                    <div>Sept 9, 2024 - Sept 15, 2024</div>
                    <FaCalendarAlt />
                </div>
                <div className="flex flex-col lg:flex-row gap-[20px] items-center">
                    <div className="rounded-[8px] bg-[#F5F5F5] px-[16px] py-[10px] text-[#737375] flex items-center gap-[10px] font-medium w-max">
                        <div>Export CSV</div>
                        <FaFileExport />
                    </div>
                    <div className="rounded-[8px] bg-[#F5F5F5] px-[16px] py-[10px] text-[#737375] flex items-center gap-[10px] font-medium w-max">
                        <div>Download Invoice</div>
                        <FaFileInvoice />
                    </div>
                </div>
            </div>
            <div className="mt-[25px]">
                <Stats />
            </div>
            <div className="mt-[40px]">
                <Table />
            </div>
        </div>
    );
}