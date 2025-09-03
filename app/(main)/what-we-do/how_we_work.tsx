import Image from "next/image";

export default function How_We_Work() {
    return (
        <div className="w-full">
            <div className="font-semibold text-[24px] lg:text-[36px] text-center">How we Work</div>
            <div className="mt-[15px] flex flex-col gap-[30px] lg:gap-[60px] lg:flex-row items-center justify-center w-full">
                <div>
                    <div className="font-medium text-[24px] lg:text-[32px]">How we make it happen</div>
                    <div className="w-full max-w-[460px] h-[calc(100vw-30px)] max-h-[460px] mt-[20px] lg:mt-[35px] relative rounded-[20px] overflow-hidden">
                        <Image src={'/images/what-we-do/6.jpg'} alt="vehsf" fill className="object-cover" />
                    </div>
                </div>
                <div className="w-full max-w-[500px]">
                    <div className="space-y-[15px]">
                        <div>
                            <div className="font-medium">Identify Needs</div>
                            <div className="text-[14px]">
                                We listen to communities to understand their most pressing challenges.
                            </div>
                        </div>
                        <div>
                            <div className="font-medium">Take Action</div>
                            <div className="text-[14px]">
                                We design and implement programs that bring real and lasting solutions.
                            </div>
                        </div>
                        <div>
                            <div className="font-medium">Empower People</div>
                            <div className="text-[14px]">
                                Our goal is to create sustainable change that strengthens communities.”
                            </div>
                        </div>
                        <div>
                            <div className="font-medium">Collaborate for Impact</div>
                            <div className="text-[14px]">
                                With the help of donors, partners, and volunteers, we multiply our reach and impact.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}