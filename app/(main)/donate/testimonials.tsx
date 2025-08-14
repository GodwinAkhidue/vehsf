"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function Testimonials() {

    const testimonials = [
        {
            img: "/images/testimonials/1.jpg",
            name: "Vincent Goodman",
            review: `Volunteering has an incredibly rewarding experience and true life changing`,
        },
        {
            img: "/images/testimonials/2.jpg",
            name: "Vincent Goodman",
            review: `Volunteering has an incredibly rewarding experience and true life changing`,
        },
        {
            img: "/images/testimonials/1.jpg",
            name: "Vincent Goodman",
            review: `Volunteering has an incredibly rewarding experience and true life changing`,
        },
        {
            img: "/images/testimonials/2.jpg",
            name: "Vincent Goodman",
            review: `Volunteering has an incredibly rewarding experience and true life changing`,
        },
        {
            img: "/images/testimonials/1.jpg",
            name: "Vincent Goodman",
            review: `Volunteering has an incredibly rewarding experience and true life changing`,
        },
        {
            img: "/images/testimonials/2.jpg",
            name: "Vincent Goodman",
            review: `Volunteering has an incredibly rewarding experience and true life changing`,
        },
    ];

    return (
        <div className="bg-[#D7FEEA] p-[40px] poppins flex flex-col items-center justify-center">
            <div className="text-[200px] leading-[70px] newsreader text-center">
                “
            </div>
            <div className="text-[20px] lg:text-[24px] -mt-[40px] text-center font-semibold">
                Testimonials
            </div>
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 5000
                }}
                loop={true}
                className="mt-[25px] w-[231px] lg:w-full"
                slidesPerView={'auto'}
                spaceBetween={15}
            >
                {
                    testimonials.map((i, index) => (
                        <SwiperSlide key={index} style={{ width: "216px" }}>
                            <div className="flex flex-col gap-[8px] items-center justify-center w-[216px]">
                                <div className="w-[122px] h-[122px] relative overflow-hidden rounded-full">
                                    <Image src={i.img} alt="vehsf" fill className="object-cover" />
                                </div>
                                <div className="font-semibold text-center">{i.name}</div>
                                <div className="text-[14px] text-center">{i.review}</div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    );
}