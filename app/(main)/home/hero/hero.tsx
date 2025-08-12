import Image from "next/image";
import { FaDonate } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";

export default function Hero() {

    const volunteers = [
        "/images/hero/volunteers/1.jpg",
        "/images/hero/volunteers/2.jpg",
        "/images/hero/volunteers/3.jpg",
        "/images/hero/volunteers/4.jpg",
        "/images/hero/volunteers/5.jpg",
        "/images/hero/volunteers/6.jpg",
        "/images/hero/volunteers/7.jpg",
        "/images/hero/volunteers/8.jpg",
        "/images/hero/volunteers/9.jpg",
    ]

    const children = [
        "/images/hero/children/1.png",
        "/images/hero/children/2.png",
        "/images/hero/children/3.png",
        "/images/hero/children/4.png",
        "/images/hero/children/5.png",
    ]

    const volunteers2 = [
        "/images/hero/volunteers/6.jpg",
        "/images/hero/volunteers/7.jpg",
        "/images/hero/volunteers/8.jpg",
        "/images/hero/volunteers/9.jpg",
        "/images/hero/volunteers/5.jpg",
    ]

    return (
        <div className="w-full flex items-center justify-center -mt-[5px] lg:-mt-[25px]">
            <div className="px-[15px] lg:px-[50px] w-full max-w-[1400px]">
                <div className="w-full relative overflow-hidden rounded-b-[30px] lg:pt-[50px]">
                    <Image src={"/images/hero/hero-bg.svg"} alt="vehsf" fill className="object-cover" />

                    <div className="relative z-10 flex flex-col lg:flex-row">

                        <div className="w-full px-[20px] lg:pl-[100px] flex flex-col items-center lg:items-start py-[40px] lg:py-[60px] lg:pt-[60px]">
                            <div className="w-full max-w-[200px] lg:max-w-[300px] h-[70px] lg:h-[100px] rounded-full relative overflow-hidden">
                                <Image src={"/images/hero/hero-image-1.png"} alt="vehsf" fill className="object-top-left object-cover" />
                            </div>
                            <div className="text-[#f9f9f9] mt-[30px] lg:mt-[60px] lg:text-[52px] mulish text-[30px] font-bold text-center leading-tight lg:text-start">
                                We care for children with special needs
                            </div>
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-[20px] poppins mt-[30px] lg:mt-[50px]">
                                <button className="bg-[#f9f9f9] text-[#026935] border border-[#f9f9f9] rounded-[10px] px-[15px] py-[10px] lg:px-[25px] lg:text-[20px] hover:bg-transparent hover:text-white transition-all duration-300 flex items-center gap-[5px] lg:gap-[10px] font-semibold cursor-pointer">
                                    Donate <FaDonate className="text-[20px]" />
                                </button>
                                <button className="border border-[#f9f9f9] px-[15px] py-[10px] lg:px-[25px] hover:bg-[#f9f9f9] hover:text-[#026935] lg:text-[20px] transition-all duration-300 text-[#f9f9f9] font-semibold rounded-[10px] cursor-pointer">
                                    What We Do
                                </button>
                                <button className="flex items-center gap-[5px] lg:gap-[10px] cursor-pointer">
                                    <div className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] relative overflow-hidden rounded-full">
                                        <Image src={"/images/hero/play-video-thumbnail.jpg"} alt="vehsf" fill className="object-cover" />
                                        <div className="relative z-10 w-full h-full flex items-center justify-center text-[#f9f9f9]">
                                            <FaPlay />
                                        </div>
                                    </div>
                                    <div className="font-semibold text-[#f9f9f9] lg:text-[20px]">Play Video</div>
                                </button>

                            </div>
                        </div>

                        <div className="w-full flex justify-center">
                            <div className="relative flex items-center justify-center overflow-y-hidden poppins w-full max-w-[300px] lg:max-w-[500px]">
                                <Image src={"/images/hero/vector.svg"} alt="vehsf" width={999} height={999} className="w-[250px] lg:w-[530px] absolute bottom-0 right-0 z-0" />
                                <Image src={"/images/hero/vector2.svg"} alt="vehsf" width={999} height={999} className="w-[250px] lg:w-[530px] absolute bottom-0 right-[15px] z-10" />
                                <Image src={"/images/hero/boy.png"} alt="vehsf" width={999} height={999} className="w-[200px] lg:w-[440px] -mb-[10%] lg:-mb-[25%] relative z-20" loading="lazy" />
                                <div className="absolute bottom-0 lg:left-0 bg-[#ffffff2f] border border-white backdrop-blur-md text-white z-30 px-[20px] py-[15px] lg:px-[40px] lg:py-[28px] flex flex-col rounded-t-[10px] lg:rounded-t-[47px] lg:overflow-hidden">
                                    <div className="font-semibold text-[30px] lg:text-[60px] leading-tight">500</div>
                                    <div className="lg:text-[30px]">Active Volunteers</div>
                                    <div className="flex mt-[5px] lg:mt-[10px]">
                                        {
                                            volunteers.map((i, index) => (
                                                <div key={index} className="w-[25px] h-[25px] lg:w-[38px] lg:h-[38px] relative rounded-full overflow-hidden border border-white first:-ml-0 -ml-[5px]">
                                                    <Image src={i} alt="vehsf" fill className="object-cover" loading="lazy" />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
                <div className="w-full flex items-center justify-center">
                    <div className="px-[35px] pt-[40px] pb-[20px] bg-white flex flex-wrap items-center justify-center gap-[5px] lg:gap-[30px] shadow-md shadow-gray-400 -mt-[22px] rounded-b-[20px] w-full lg:w-[80vw] max-w-[1000px]">
                        <div className="flex items-center justify-center">
                            <div className="flex">
                                {
                                    children.map((i, index) => (
                                        <div key={index} className="w-[25px] h-[25px] lg:w-[38px] lg:h-[38px] relative rounded-full overflow-hidden border border-white first:-ml-0 -ml-[5px]">
                                            <Image src={i} alt="vehsf" fill className="object-cover" loading="lazy" />
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="h-[1px] lg:w-[54px] bg-black ml-[5px] lg:ml-[15px] lg:mr-[5px]"></div>
                            <div className="poppins text-[12px] whitespace-nowrap italic">Over <span className="font-bold">300</span> children under our care</div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="flex">
                                {
                                    volunteers2.map((i, index) => (
                                        <div key={index} className="w-[25px] h-[25px] lg:w-[38px] lg:h-[38px] relative rounded-full overflow-hidden border border-white first:-ml-0 -ml-[5px]">
                                            <Image src={i} alt="vehsf" fill className="object-cover" loading="lazy" />
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="h-[1px] lg:w-[54px] bg-black ml-[5px] lg:ml-[15px] lg:mr-[5px]"></div>
                            <div className="poppins text-[12px] whitespace-nowrap italic">Over <span className="font-bold">62</span> donations collected </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}