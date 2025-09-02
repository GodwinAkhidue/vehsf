import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

export default function Our_Value() {
    return (
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between w-full gap-[50px]">

            <div className="w-full max-w-[360px]">
                <div className="font-semibold text-[24px] lg:text-[36px] relative">
                    Our Value
                    <div className="w-[50px] lg:w-[77px] h-[2px] bg-[#15FF00] rounded-full absolute bottom-0 left-0"></div>
                </div>
                <div className="mt-[30px] lg:mt-[40px] space-y-[20px]">
                    <div>
                        <div className="flex items-center gap-[10px]">
                            <div className="w-[22px] h-[22px] bg-[#00FF261A] text-[#00FF26] flex items-center justify-center rounded-full">
                                <FaCheck />
                            </div>
                            <div className="font-medium lg:text-[20px]">
                                Empowering Communities
                            </div>
                        </div>
                        <div className="text-[12px] mt-[5px]">
                            We are committed to creating lasting change by
                            empowering individuals and communities through
                            meaningful projects and initiatives.
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-[10px]">
                            <div className="w-[22px] h-[22px] bg-[#00FF261A] text-[#00FF26] flex items-center justify-center rounded-full">
                                <FaCheck />
                            </div>
                            <div className="font-medium lg:text-[20px]">
                                Transparent Impact
                            </div>
                        </div>
                        <div className="text-[12px] mt-[5px]">
                            We ensure complete transparency in every donation
                            and activity so our donors, partners, and volunteers
                            see exactly how their contributions make a difference.
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-[10px]">
                            <div className="w-[22px] h-[22px] bg-[#00FF261A] text-[#00FF26] flex items-center justify-center rounded-full">
                                <FaCheck />
                            </div>
                            <div className="font-medium lg:text-[20px]">
                                Compassion-Driven
                            </div>
                        </div>
                        <div className="text-[12px] mt-[5px]">
                            Our work is rooted in empathy, compassion, and the drive
                            to uplift lives, ensuring that every effort counts where it
                            matters most.
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[615px] h-[70vw] max-h-[470px] flex relative">
                <div className="w-[65%] h-[85%] relative rounded-[5px] overflow-hidden self-end z-10">
                    <Image src={`/images/about/5.jpg`} alt="vehsf" fill className="object-cover" />
                </div>
                <div className="w-[65%] h-[85%] absolute top-0 right-0 z-0 rounded-[5px] overflow-hidden self-end">
                    <Image src={`/images/about/4.jpg`} alt="vehsf" fill className="object-cover" />
                </div>
            </div>

        </div>
    );
}