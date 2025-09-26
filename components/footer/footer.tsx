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
                            <div>
                                <Link href={`/about`}>About Us</Link>
                            </div>
                            <div>
                                <Link href={`/what-we-do`}>What We Do</Link>
                            </div>
                            <div>
                                <Link href={`/explore-impact`}>Explore Impact</Link>
                            </div>
                            <div>
                                <Link href={`/news-and-blog`}>News / Blog</Link>
                            </div>
                            <div>
                                <Link href={`/contact-us`}>Contact Us</Link>
                            </div>
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
                            <div>
                                <a href="https://www.facebook.com/share/1FKdJnj6vC/">
                                    <FaFacebook />
                                </a>
                            </div>
                            <div>
                                <a href="https://www.instagram.com/veteransehsf/?utm_source=qr&r=nametag">
                                    <FaInstagram />
                                </a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/veterans-empowerment-humanitarian-society-foundation-018705382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                    <FaLinkedin />
                                </a>
                            </div>
                            <div>
                                <a href="https://x.com/official_vehsf?t=qDZFycnZNMNPGaU6WdZV-Q&s=08">
                                    <FaXTwitter />
                                </a>
                            </div>
                            <div>
                                <a href="https://youtube.com/@veteransehsf?si=lFf9cxXvIiGdaOaY">
                                    <FaYoutube />
                                </a>
                            </div>
                            <div>
                                <a href="https://www.tiktok.com/@veterans.vehsf?_r=1&_d=em7jja94hk89c4&sec_uid=MS4wLjABAAAAIECwn9nbrVa1GtoPsXEUkWIg_vg5P1sP8id6Rua7oBSgwLBrmaGtNd2QDN6wrEZq&share_author_id=7546123415276160018&sharer_language=en&source=h5_m&u_code=em7jjkej6ciba3&timestamp=1756969509&user_id=7546123415276160018&sec_user_id=MS4wLjABAAAAIECwn9nbrVa1GtoPsXEUkWIg_vg5P1sP8id6Rua7oBSgwLBrmaGtNd2QDN6wrEZq&item_author_type=1&utm_source=whatsapp&utm_campaign=client_share&utm_medium=android&share_iid=7546123392165480199&share_link_id=3295f52b-952b-4de1-b6f8-ba5f39d7c4e7&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b7360&social_share_type=5&enable_checksum=1">
                                    <FaTiktok />
                                </a>
                            </div>
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