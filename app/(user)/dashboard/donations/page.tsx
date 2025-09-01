import Donation_Data from "./donation-data/donation-data";

export default function Donations_Page() {
    return (
        <div className="px-[15px] lg:pl-0 w-full poppins">
            <div className="font-semibold text-[24px] mt-[20px] mb-[10px]">Donation</div>
            <div className="w-full">
                <Donation_Data />
            </div>
        </div>
    );
}