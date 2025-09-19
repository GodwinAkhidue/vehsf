import Location_Input from "@/components/form/location-input";
import Connections from "./connections";

export default function Connect() {
    return (
        <div className="px-[15px] lg:pl-0 w-full poppins">
            <div className="font-semibold text-[24px] mt-[20px] mb-[10px]">Connect</div>
            <div className="font-medium mt-[10px]">
                Connect with NGOs, Donors and Volunteers in your area
            </div>
            <div>
                <div className="w-full max-w-[400px]">
                    {/* <Location_Input /> */}
                </div>
                <div className="cursor-pointer text-white bg-[#026935] px-[30px] py-[15px] rounded-[5px] w-max mt-[20px]">
                    Search
                </div>
            </div>
            <div className="mt-[30px] mb-[70px]">
                <Connections />
            </div>
        </div>
    );
}