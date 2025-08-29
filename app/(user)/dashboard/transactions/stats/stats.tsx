import { FaDollarSign, FaWallet } from "react-icons/fa6";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

export default function Stats() {
    return (
        <div className="flex flex-wrap justify-center lg:justify-start gap-[20px]">
            <div className="border border-[#E6EDFF] rounded-[8px] p-[20px] flex gap-[15px] items-center justify-center w-max">
                <div className="flex items-center justify-center text-[#026935] bg-[#00A32B0A] rounded-full w-[48px] h-[48px]">
                    <FaDollarSign />
                </div>
                <div>
                    <div className="font-medium text-[#737375]">Total Donations Made</div>
                    <div className="mt-[5px] font-bold text-[28px]">
                        $28,087.00
                    </div>
                </div>
            </div>
            <div className="border border-[#E6EDFF] rounded-[8px] p-[20px] flex gap-[15px] items-center justify-center w-max">
                <div className="flex items-center justify-center text-[#026935] bg-[#00A32B0A] rounded-full w-[48px] h-[48px]">
                    <FaWallet />
                </div>
                <div>
                    <div className="font-medium text-[#737375]">Total Donations Received</div>
                    <div className="mt-[5px] font-bold text-[28px]">
                        $23,000.00
                    </div>
                </div>
            </div>
            <div className="border border-[#E6EDFF] rounded-[8px] p-[20px] flex gap-[15px] items-center justify-center w-max">
                <div className="flex items-center justify-center text-[20px] text-[#026935] bg-[#00A32B0A] rounded-full w-[48px] h-[48px]">
                    <GoArrowDown />
                </div>
                <div>
                    <div className="font-medium text-[#737375]">Pending Donations</div>
                    <div className="mt-[5px] font-bold text-[28px]">
                        $23,000.00
                    </div>
                </div>
            </div>
            <div className="border border-[#E6EDFF] rounded-[8px] p-[20px] flex gap-[15px] items-center justify-center w-max">
                <div className="flex items-center justify-center text-[20px] text-[#026935] bg-[#00A32B0A] rounded-full w-[48px] h-[48px]">
                    <GoArrowUp />
                </div>
                <div>
                    <div className="font-medium text-[#737375]">Last Transaction Date</div>
                    <div className="mt-[5px] font-bold text-[28px]">
                        $23,000.00
                    </div>
                </div>
            </div>
        </div>
    );
}