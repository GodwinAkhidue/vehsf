import { FaHandHoldingUsd } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

export default function Volunteer_Preferences() {
    return (
        <div className="mt-[50px]">
            <div className="text-[#121212] text-[24px] lg:text-[32px] font-semibold">Volunteer Preferences</div>

            <div className="font-medium text-[14px] lg:text-base mt-[40px]">Volunteer Interest</div>
            <div className="text-[12px] mt-[10px]">
                Search and select the areas where you love to offer your time, skills, and support as a volunteer
            </div>

            <div className="mt-[30px] lg:mt-[40px]">
                <div className="font-medium text-[14px] lg:text-base">Skills</div>
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                    <FaHandHoldingUsd className="text-[#00000080] text-[18px]" />
                    <input placeholder="Search your Skills" type="text" className="w-full h-full outline-none" />
                </div>
            </div>

            <div className="font-medium text-[14px] lg:text-base mt-[40px]">Availability</div>
            <div className="text-[12px] mt-[10px]">
                Specify your preferred volunteering schedule so we can match you with opportunities that fit your availability
            </div>

            <div className="mt-[20px] lg:mt-[30px]">
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                    <CiClock2 className="text-[#00000080] text-[18px] lg:text-[24px]" />
                    <select className="w-full h-full outline-none">
                        <option value="male">Weekdays</option>
                        <option value="female">Weekends</option>
                    </select>
                </div>
            </div>

            <div className="cursor-pointer text-white bg-[#026935] px-[30px] py-[15px] rounded-[5px] w-max mt-[20px] justify-self-end">
                Save Changes
            </div>
        </div>
    );
}