"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import "./testimonials.css";

export default function Testimonials() {

    const testimonials = [
        {
            text: `Volunteering here has been one of the most fulfilling expereinces of my life. I’ve seen firsthand the impact we can make together.`,
            image: `/images/volunteer_signup/testimonials_1.png`,
            name: `Stella Adeleke`
        },
        {
            text: `Volunteering here has been one of the most fulfilling expereinces of my life. I’ve seen firsthand the impact we can make together.`,
            image: `/images/volunteer_signup/testimonials_1.png`,
            name: `Stella Adeleke`
        },
        {
            text: `Volunteering here has been one of the most fulfilling expereinces of my life. I’ve seen firsthand the impact we can make together.`,
            image: `/images/volunteer_signup/testimonials_1.png`,
            name: `Stella Adeleke`
        },
    ];

    return (
        <div className="poppins w-full max-w-[608px] shrink-0 hidden lg:block sticky bottom-0">
            <div>
                <Image src={"/images/logo.png"} alt="vehsf" width={999} height={999} className="w-[120px]" />
            </div>
            <div className="bg-[#026935] w-full rounded-[10px] p-[20px] lg:px-[72px] lg:py-[48px] mt-[5px] text-white">
                <div className="font-semibold text-[24px] lg:text-[48px] lg:leading-tight">
                    Share your Talent, Make a Difference
                </div>
                <div className="mt-[10px] text-[12px] lg:text-[18px] lg:mt-[26px] text-[#E2E1E8]">
                    Use this section to highlight the unique skills you bring—whether it’s teaching,
                    organizing, healthcare, or creative work—so we can match you with the right
                    opportunities to create impact.
                </div>
                <div className="w-full mt-[30px] lg:mt-[65px] relative h-[200px] rounded-[10px] overflow-hidden">
                    <Image src={"/images/volunteer_signup/2.jpg"} alt="vehsf" fill className="object-cover" />
                    <div className="w-full h-full relative z-10 bg-[#00000080]">

                    </div>
                </div>
                <div className="mt-[30px] lg:mt-[65px] w-full">
                    <div className="newsreader text-[200px] text-[#F9F9F9] text-center leading-tight">“</div>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{
                            clickable: true,
                            renderBullet: (_, className) => {
                                return `<span class="${className} volunteer-page-testimonials-pagination-el"></span>`;
                            },
                        }}
                        className="w-full h-full -mt-[150px]"
                        slidesPerView={1}
                        spaceBetween={15}
                        loop={true}
                        autoplay={{
                            delay: 5000
                        }}
                    >
                        {
                            testimonials.map((i, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-[#1FB83E99] rounded-[15px] p-[25px]">
                                        <div className="text-[14px] lg:text-base font-normal text-[#F0F0F3]">
                                            {i.text}
                                        </div>
                                        <div className="mt-[24px] flex gap-[10px] items-center">
                                            <div className="w-[56px] h-[49px] relative">
                                                <Image src={i.image} alt="vehsf" fill className="object-cover" />
                                            </div>
                                            <div>
                                                <div className="text-[14px] text-[#F6F6F8] font-medium">{i.name}</div>
                                                <div className="text-[10px] text-[#F0F0F3]">Volunteer</div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
}