import Program_Item from "./program-item";
import { programs } from "@/constants/programs";

export default function Programs() {

    return (
        <div className="w-full flex flex-col items-center justify-center px-[15px] lg:px-[50px]">
            <div className="font-semibold text-[24px] text-[#121212] lg:text-[36px] poppins">PROGRAMS</div>
            <div className="mt-[10px] w-full max-w-[1050px] p-[20px] lg:p-[60px] border border-[#00DD6D] bg-white border-dashed rounded-[20px] lg:rounded-[30px] flex flex-col gap-[50px] lg:gap-[100px]">
                {
                    programs.map((i, index) => (
                        <Program_Item key={index} i={i} reverse={index % 2 === 0 ? false : true} />
                    ))
                }
            </div>
        </div>
    );
}