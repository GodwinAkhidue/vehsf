import Past_Commitments from "./past-commitments";
import Upcoming_Commitments from "./upcoming-commitments";


export default function Commitments() {
    return (
        <div className="px-[15px] lg:pl-0 w-full poppins">
            <div className="font-semibold text-[24px] mt-[20px] mb-[10px]">My Commitments</div>
            <div className="mt-[15px] w-full">
                <Upcoming_Commitments />
            </div>
            <div className="mt-[30px] mb-[70px] lg:mb-[120px] w-full">
                <Past_Commitments />
            </div>
        </div>
    );
}