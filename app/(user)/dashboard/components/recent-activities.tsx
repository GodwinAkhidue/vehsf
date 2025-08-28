export default function Recent_Activities() {

    return (
        <div className="border border-[#026935] border-dashed rounded-[15px] w-full p-[20px] lg:p-[35px] poppins mt-[20px]">

            <div className="font-semibold">Recent Activities</div>

            <div className="mt-[25px] flex items-center justify-between">
                <div className="border rounded-[5px] border-[#121212] text-[14px] font-medium py-[5px] px-[15px]">
                    <select className="min-w-[90px]">
                        <option>Sort by</option>
                    </select>
                </div>
                <div className="italic text-[14px] hover:underline cursor-pointer">See all</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mt-[25px]">
                <div>
                    <div className="mb-[10px] font-medium text-[14px] text-[#00000080]">Opportunity</div>
                    <div className="border border-[#BABABA] rounded-[10px] p-[15px] min-w-[115px]">
                        <div className="font-semibold">
                            Food Distribution
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mb-[10px] font-medium text-[14px] text-[#00000080]">Date & Time</div>
                    <div className="border border-[#BABABA] rounded-[10px] p-[15px] min-w-[115px] flex">
                        <div className="font-semibold">
                            10 Aug. 2025
                        </div>
                        <div className="h-[20px] w-[1px] bg-[#C4C4C4] mx-[10px]"></div>
                        <div className="font-semibold">
                            9:00 AM
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mb-[10px] font-medium text-[14px] text-[#00000080]">Hours Logged</div>
                    <div className="border border-[#BABABA] rounded-[10px] p-[15px] min-w-[115px]">
                        <div className="font-semibold">
                            5 Volunteer Hours
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mb-[10px] font-medium text-[14px] text-[#00000080]">Donations Made</div>
                    <div className="border border-[#BABABA] rounded-[10px] p-[15px] min-w-[115px]">
                        <div className="font-semibold">
                            $5000
                        </div>
                        <div className="text-[#9A9A9A] mt-[5px] font-medium text-[12px]">
                            Tree Planting
                        </div>
                        <div className="text-[#9A9A9A] mt-[5px] font-medium text-[12px]">
                            Campaign: 25 Jul. 2025
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}