import Location_Input from "@/components/form/location-input";

export default function Connect() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="font-semibold text-center text-[24px] lg:text-[36px]">
                Connect with Staff / Volunteers
            </div>
            <div className="w-full max-w-[350px]">
                {/* <Location_Input /> */}
            </div>
            <div className="cursor-pointer w-full max-w-[350px] rounded-[10px] py-[10px] text-white bg-[#026935] flex items-center justify-center mt-[30px]">
                Search
            </div>
        </div>
    );
}