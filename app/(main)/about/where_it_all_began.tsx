import Image from "next/image";

export default function Where_It_All_Began() {
    return (
        <div className="w-full max-w-[1145px] overflow-x-hidden">
            <div className="font-semibold text-[24px] lg:text-[36px]">
                Where it all Began
            </div>
            <div className="font-medium text-[20px] lg:text-[28px] mt-[5px]">
                Who Are We?
            </div>
            <div className="mt-[20px] flex flex-col lg:flex-row w-full lg:justify-between gap-[30px]">
                <div className="w-full h-[calc(100vw-30px)] max-w-[485px] max-h-[485px] relative rounded-[10px] overflow-hidden">
                    <Image src={"/images/about/4.jpeg"} alt="vehsf" fill className="object-cover" />
                </div>
                <div className="w-full max-w-[465px] relative">
                    <div className="w-[2px] h-[80px] bg-[#00FF11] rounded-full absolute top-0 left-0"></div>
                    <div className="w-full">
                        <div className="ml-[15px]">
                            We are a non-profit organization dedicated to transforming lives
                            and empowering communities. Our journey began with a simple
                            vision — to create opportunities, spread hope, and make a lasting
                            impact in underserved communities.
                        </div>
                        <div className="text-[12px] mt-[10px] ml-[15px] text-[#000000CC] w-full">
                            Through partnerships, donations, and collective efforts, we’ve
                            been able to touch lives, provide essential resources, and
                            inspire change where it matters most.
                        </div>
                    </div>
                    <div className="mt-[30px] flex flex-col lg:flex-row gap-[15px]">
                        <div className="bg-[#EBFFEF] rounded-[15px] px-[10px] py-[20px]">
                            <div className="text-[20px] font-medium text-center">Mission</div>
                            <div className="text-[14px] mt-[20px] text-[#000000CC]">
                                To empower individuals and communities by providing
                                access to education, healthcare, and sustainable development
                                initiatives while fostering compassion and social
                                responsibility.
                            </div>
                        </div>
                        <div className="bg-[#EBFFEF] rounded-[15px] px-[10px] py-[20px]">
                            <div className="text-[20px] font-medium text-center">Vision</div>
                            <div className="text-[14px] mt-[20px] text-[#000000CC]">
                                Richard McClintock, a loripuLatin pprofessor att
                                Hampden-Sydney College in passage, in and going discovered
                                the undoubtable source.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}