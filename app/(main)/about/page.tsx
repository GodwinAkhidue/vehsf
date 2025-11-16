import Image from "next/image";
import Our_Value from "./our_value";
import Where_It_All_Began from "./where_it_all_began";
import Want_To_Get_Involved from "./want_to_get_involved";
import Our_Team from "./our_team";

export default function About() {
    return (
        <div className="p-[15px] poppins flex justify-center">
            <div className="w-full max-w-[1145px]">
                <div className="text-[#254229] font-semibold text-center text-[32px] lg:text-[40px] mt-[30px] lg:mt-[50px]">
                    About Us
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center w-full mt-[30px]">
                    <div className="w-full max-w-[350px] h-[225px] lg:-mr-[20px] -mb-[20px] lg:-mb-0 border-[20px] border-[#0269350D] relative rounded-[30px] overflow-hidden">
                        <Image src={"/images/about/2.jpeg"} alt="vehsf" fill className="object-cover object-top" />
                    </div>
                    <div className="w-full max-w-[470px] h-[225px] lg:h-[300px] border-[20px] border-[#0269350D] relative rounded-[30px] overflow-hidden">
                        <Image src={"/images/about/1.jpeg"} alt="vehsf" fill className="object-cover object-top" />
                    </div>
                    <div className="w-full max-w-[350px] h-[225px] lg:-ml-[20px] -mt-[20px] lg:-mt-0 border-[20px] border-[#0269350D] relative rounded-[30px] overflow-hidden">
                        <Image src={"/images/about/3.jpeg"} alt="vehsf" fill className="object-cover object-top" />
                    </div>
                </div>
                <div className="font-medium text-base lg:text-[20px] mt-[30px] text-center">
                    Know who we are, what we do, and why it matters.
                </div>
                <div className="mt-[60px] lg:mt-[80px]">
                    <Our_Value />
                </div>
                <div className="mt-[70px] lg:mt-[100px]">
                    <Where_It_All_Began />
                </div>
                <div className="mt-[70px] lg:mt-[100px]">
                    <Want_To_Get_Involved />
                </div>
                <div className="my-[100px] lg:my-[150px]">
                    <Our_Team />
                </div>
            </div>
        </div>
    );
}