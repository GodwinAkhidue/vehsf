"use client"
import Image from "next/image";
import { createRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ url, showModal }: { url: any, showModal: boolean }) {

    const router = useRouter();

    const slides = [
        {
            img: "/images/volunteer_signup/modal_img_1.jpg",
            heading: "Join our volunteer network",
            body: `Sign up to offer your skills, time, and passion to make a lasting difference on communities in need`
        },
        {
            img: "/images/volunteer_signup/modal_img_2.jpg",
            heading: "Join our volunteer network",
            body: `As a volunteer, you will get opportunities to participate in field project awareness, campaigns, and community empowerment programs`
        },
    ];

    const sliderRef = createRef<HTMLDivElement>();

    const [sliderWidth, setSliderWidth] = useState(0);

    useEffect(() => {
        if (!sliderRef.current) return;

        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                setSliderWidth(entry.contentRect.width);
            }
        });

        observer.observe(sliderRef.current);

        return () => observer.disconnect();
    }, []);

    const nextSlide = () => {
        sliderRef?.current?.scrollBy({
            left: sliderWidth,
            behavior: "smooth"
        })
    }

    const prevSlide = () => {
        sliderRef?.current?.scrollBy({
            left: -sliderWidth,
            behavior: "smooth"
        })
    }

    return (
        <div className={`fixed z-50 top-0 ${showModal ? "visible opacity-100" : "invisible opacity-0"} transition-all duration-300 left-0 w-full h-full bg-[#00000080] flex items-center justify-center px-[15px]`}>
            <div className={`w-full max-w-[530px] bg-[#F9F9F9] rounded-[20px] p-[30px] poppins`}>
                <div ref={sliderRef} className="flex overflow-hidden">
                    {
                        slides.map((i, index) => (
                            <div
                                key={index}
                                className={`w-full h-full shrink-0 flex flex-col items-center justify-center text-[#121212]`}
                            >
                                <div className="w-[180px] h-[56px] md:w-[277px] md:h-[86px] rounded-[20px] relative overflow-hidden">
                                    <Image src={i.img} alt="" fill className="object-cover" />
                                    <div className="relative z-10 bg-[#00000080] w-full h-full">

                                    </div>
                                </div>
                                <div className="font-semibold text-[20px] text-center mt-[15px]">
                                    {i.heading}
                                </div>
                                <div className="font-medium text-[14px] text-center mt-[10px]">
                                    {i.body}
                                </div>
                                {
                                    index < (slides.length - 1) ?
                                        <div onClick={() => nextSlide()} className="cursor-pointer py-[10px] px-[33px] bg-[#026935] text-white rounded-[10px] mt-[10px] font-semibold">
                                            Next
                                        </div> :
                                        <div className="flex gap-[15px]">
                                            <div onClick={() => prevSlide()} className="cursor-pointer py-[10px] px-[25px] lg:px-[33px] border-2 border-[#026935] text-[#026935] rounded-[10px] mt-[10px] font-semibold">
                                                Previous
                                            </div>
                                            <div onClick={() => router.push("/signup/volunteer")} className="cursor-pointer py-[10px] px-[25px] lg:px-[33px] bg-[#026935] text-white rounded-[10px] mt-[10px] font-semibold">
                                                Continue
                                            </div>
                                        </div>
                                }
                                <div onClick={() => router.push(url)} className="font-medium italic text-[14px] mt-[20px] cursor-pointer hover:underline">
                                    Skip this
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
}