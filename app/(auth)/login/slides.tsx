"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from 'next/image';

export default function Slides() {

    const slides = [
        "/images/login-slides/1.jpg",
        "/images/login-slides/2.jpg",
        "/images/login-slides/3.jpg",
        "/images/login-slides/4.jpg",
        "/images/login-slides/5.jpg",
        "/images/login-slides/6.jpg",
        "/images/login-slides/7.jpg",
        "/images/login-slides/8.jpg",
    ];

    return (
        <div className="h-full hidden lg:block w-[500px]">
            <Swiper
                effect={'fade'}
                modules={[EffectFade, Autoplay]}
                className="w-full h-full"
                autoplay={{
                    delay: 5000
                }}
                loop={true}
            >
                {
                    slides.map((i, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full h-full relative">
                                <Image src={i} alt="vehsf" fill className="object-cover" />
                                <div className="relative z-10 w-full h-full bg-black opacity-70">

                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}