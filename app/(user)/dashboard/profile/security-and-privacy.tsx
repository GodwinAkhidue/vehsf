export default function Security_And_Privacy() {
    return (
        <div className="mt-[50px]">
            <div className="text-[#121212] text-[24px] lg:text-[32px] font-semibold">Security & Privacy</div>

            <div className="font-medium text-[14px] lg:text-base mt-[40px]">Password Management</div>
            <div className="mt-[20px] lg:mt-[40px]">
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                    <input placeholder="Enter Old Password" type="text" className="w-full h-full outline-none" />
                </div>
            </div>
            <div className="mt-[20px] lg:mt-[30px]">
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                    <input placeholder="Enter New Password" type="text" className="w-full h-full outline-none" />
                </div>
            </div>
            <div className="mt-[20px] lg:mt-[30px]">
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                    <input placeholder="Confirm New Password" type="email" className="w-full h-full outline-none" />
                </div>
            </div>
            <div className="cursor-pointer text-white bg-[#026935] px-[30px] py-[15px] rounded-[5px] w-max mt-[20px] justify-self-end">
                Save Changes
            </div>
        </div>
    );
}