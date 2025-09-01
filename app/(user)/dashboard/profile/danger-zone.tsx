

export default function Danger_Zone() {
    return (
        <div className="mt-[50px]">
            <div className="text-[#F10000] text-[24px] lg:text-[32px] font-semibold">Danger Zone</div>

            <div className="font-medium text-[14px] lg:text-base mt-[40px]">Delete Account</div>
            <div className="text-[12px] mt-[10px]">
                Permanently delete your account and remove all your data
            </div>

            <div className="cursor-pointer text-white bg-[#D40202] px-[30px] py-[15px] rounded-[5px] w-max mt-[20px]">
                Delete Account
            </div>
            <div className="font-medium text-[14px] lg:text-base mt-[40px]">Deactivate Account</div>
            <div className="text-[12px] mt-[10px]">
                Temporarily disable your account from operating
            </div>

            <div className="cursor-pointer text-white bg-[#D40202] px-[30px] py-[15px] rounded-[5px] w-max mt-[20px]">
                Deactivate Account
            </div>
        </div>
    );
}