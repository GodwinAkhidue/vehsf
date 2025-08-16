import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="bg-[#E5E5E5] w-full flex flex-col items-center justify-center px-[15px] lg:px-[50px] py-[30px] lg:pt-[100px] lg:pb-[50px] poppins">
            <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-[50px]">
                <div>
                    <Image
                        src={"/images/logo.png"}
                        alt="vehsf"
                        width={999}
                        height={999}
                        className="w-[200px] lg:w-[250px]"
                    />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] lg:gap-[60px] w-full lg:w-max">
                    <div className="w-full flex flex-col items-center justify-center lg:items-start lg:justify-start">
                        <div className="font-semibold">Home</div>
                        <div className="flex flex-col items-center justify-center lg:items-start mt-[15px] gap-[7px]">
                            <div>About Us</div>
                            <div>What We Do</div>
                            <div>Explore Impact</div>
                            <div>News / Blog</div>
                            <div>Contact Us</div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center lg:items-start lg:justify-start">
                        <div className="font-semibold">More</div>
                        <div className="flex flex-col items-center justify-center lg:items-start mt-[15px] gap-[7px]">
                            <div>Project</div>
                            <div>Event</div>
                            <Link href={"/donate"}>Donate</Link>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center lg:items-start lg:justify-start">
                        <div className="flex lg:flex-col items-center justify-center lg:items-start mt-[15px] gap-[10px] lg:gap-[15px] text-[20px] lg:text-[24px]">
                            <div><FaFacebook /></div>
                            <div><FaInstagram /></div>
                            <div><FaLinkedin /></div>
                            <div><FaXTwitter /></div>
                            <div><FaYoutube /></div>
                            <div><FaTiktok /></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="font-semibold text-center lg:text-start">Stay up to date</div>
                    <div className="mt-[27px] flex h-[45px]">
                        <input placeholder="Your email" className="p-[10px] w-[200px] h-full border-y border-l border-[#00000080] rounded-l-[10px] outline-none" />
                        <button className="w-[100px] bg-[#026935] text-white hover:bg-white hover:text-[#026935] transition-all duration-300 h-full flex items-center justify-center font-semibold rounded-r-[10px]">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className="pt-[50px] lg:pt-[100px] text-gray-500 text-[12px] lg:text-[14px]">
                &copy; 2025, Temany Technologies
            </div>
        </div>
    );
}