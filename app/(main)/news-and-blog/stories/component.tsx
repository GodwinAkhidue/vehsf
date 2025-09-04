import Image from "next/image";

export default function Stories() {
    return (
        <div className="mt-[70px] lg:mt-[100px]">
            <div className="font-semibold text-[24px] lg:text-[36px] text-center">
                Stories that Inspire Change
            </div>
            <div className="mt-[50px] lg:mt-[70px] w-full space-y-[40px] lg:space-y-[60px]">

                <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-[20px]">
                    <div className="flex flex-col lg:flex-row items-center gap-[15px]">
                        <div className="w-[150px] h-[150px] lg:w-[210px] lg:h-[210px] relative rounded-[25px] overflow-hidden">
                            <Image src={`/images/news-and-blog/7.jpg`} alt="vehsf" fill className="object-cover" />
                        </div>
                        <div className="w-[200px] h-[200px] lg:w-[260px] lg:h-[260px] relative rounded-[25px] overflow-hidden">
                            <Image src={`/images/news-and-blog/8.jpg`} alt="vehsf" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="w-full max-w-[500px]">
                        <div className="font-semibold text-[20px] lg:text-[32px] text-center lg:text-start">From Struggle to School</div>
                        <div className="mt-[15px] text-[14px] text-center lg:text-start">
                            Meet Chiamaka, a 10-year-old whose life changed after our
                            education support program provided her with school supplies and
                            scholarships...
                        </div>
                        <div className="text-[14px] px-[10px] py-[5px] border border-[#026935] text-[#026935] w-max justify-self-center lg:justify-self-start mt-[15px] rounded-[5px]">
                            Read Full Story
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-between gap-[20px]">
                    <div className="flex flex-col lg:flex-row items-center gap-[15px]">
                        <div className="w-[150px] h-[150px] lg:w-[210px] lg:h-[210px] relative rounded-[25px] overflow-hidden">
                            <Image src={`/images/news-and-blog/7.jpg`} alt="vehsf" fill className="object-cover" />
                        </div>
                        <div className="w-[200px] h-[200px] lg:w-[260px] lg:h-[260px] relative rounded-[25px] overflow-hidden">
                            <Image src={`/images/news-and-blog/8.jpg`} alt="vehsf" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="w-full max-w-[500px]">
                        <div className="font-semibold text-[20px] lg:text-[32px] text-center lg:text-end">From Struggle to School</div>
                        <div className="mt-[15px] text-[14px] text-center lg:text-end">
                            Meet Chiamaka, a 10-year-old whose life changed after our
                            education support program provided her with school supplies and
                            scholarships...
                        </div>
                        <div className="text-[14px] px-[10px] py-[5px] border border-[#026935] text-[#026935] w-max justify-self-center lg:justify-self-end mt-[15px] rounded-[5px]">
                            Read Full Story
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}