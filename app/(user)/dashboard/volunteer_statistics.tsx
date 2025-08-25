import { FaRegCircleCheck } from "react-icons/fa6";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineEventAvailable } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";

export default function Volunteer_Statistics() {

    return (
        <div className="border border-[#026935] border-dashed rounded-[15px] w-full p-[20px] lg:p-[35px] poppins mt-[30px] mb-[60px] lg:mb-[80px]">

            <div className="font-semibold">Volunteer Statistics</div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[25px] border-[#E6EDFF] border rounded-[10px] p-[20px]">
                <div className="flex items-center">
                    <div>
                        <div className="flex justify-between">
                            <div>
                                <div className="font-semibold text-[28px]">120</div>
                                <div className="mt-[5px]">Total Volunteers</div>
                            </div>
                            <div className="p-[10px] text-[24px] text-[#34E245] rounded-[10px] shadow-lg shadow-[#7FB57C1F] h-max">
                                <IoPeopleOutline />
                            </div>
                        </div>
                        <div className="flex mt-[10px] text-[#81B57C] text-[14px] gap-[10px]">
                            <FiArrowUpRight className="text-[#81B57C] text-[20px]" />
                            <div>10.2</div>
                            <div>+1.01% this week</div>
                        </div>
                    </div>
                    <div className="hidden lg:block h-[100px] w-[1px] bg-[#E6FFE8] ml-[30px]">

                    </div>
                </div>
                <div className="flex items-center">
                    <div>
                        <div className="flex justify-between">
                            <div>
                                <div className="font-semibold text-[28px]">15</div>
                                <div className="mt-[5px]">Total Donations</div>
                            </div>
                            <div className="p-[10px] text-[24px] text-[#34E245] rounded-[10px] shadow-lg shadow-[#7FB57C1F] h-max">
                                <TbMoneybag />
                            </div>
                        </div>
                        <div className="flex mt-[10px] text-[#81B57C] text-[14px] gap-[10px]">
                            <FiArrowUpRight className="text-[#81B57C] text-[20px]" />
                            <div>3.1</div>
                            <div>+0.49% this week</div>
                        </div>
                    </div>
                    <div className="hidden lg:block h-[100px] w-[1px] bg-[#E6FFE8] ml-[30px]">

                    </div>
                </div>
                <div className="flex items-center">
                    <div>
                        <div className="flex justify-between">
                            <div>
                                <div className="font-semibold text-[28px]">3</div>
                                <div className="mt-[5px]">Upcoming Commitments</div>
                            </div>
                            <div className="p-[10px] text-[24px] text-[#34E245] rounded-[10px] shadow-lg shadow-[#7FB57C1F] h-max">
                                <FaRegCircleCheck />
                            </div>
                        </div>
                        <div className="flex mt-[10px] text-[#FF3B30] text-[14px] gap-[10px]">
                            <FiArrowDownLeft className="text-[#FF3B30] text-[20px]" />
                            <div>2.56</div>
                            <div>-0.91% this week</div>
                        </div>
                    </div>
                    <div className="hidden lg:block h-[100px] w-[1px] bg-[#E6FFE8] ml-[30px]">

                    </div>
                </div>
                <div className="flex items-center">
                    <div>
                        <div className="flex justify-between">
                            <div>
                                <div className="font-semibold text-[28px]">45</div>
                                <div className="mt-[5px]">Total Events</div>
                            </div>
                            <div className="p-[10px] text-[24px] text-[#34E245] rounded-[10px] shadow-lg shadow-[#7FB57C1F] h-max">
                                <MdOutlineEventAvailable />
                            </div>
                        </div>
                        <div className="flex mt-[10px] text-[#81B57C] text-[14px] gap-[10px]">
                            <FiArrowUpRight className="text-[#81B57C] text-[20px]" />
                            <div>7.2</div>
                            <div>+1.51% this week</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}