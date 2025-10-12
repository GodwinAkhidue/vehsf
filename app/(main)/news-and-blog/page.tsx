import Image from "next/image";
import Blogs from "./blogs/component";
import Stories from "./stories/component";
import Link from "next/link";

export default function News_and_Blog() {
  return (
    <div className="px-[15px] py-[30px] lg:py-[60px] flex justify-center poppins">
      <div className="w-full max-w-[1050px]">
        <div className="flex items-center justify-center gap-[25px]">
          <div className="hidden lg:flex w-[240px] h-[240px] rounded-[20px] overflow-hidden relative">
            <Image
              src={"/images/news-and-blog/1.jpg"}
              alt="vehsf"
              fill
              className="object-cover"
            />
          </div>
          <div className="hidden lg:flex w-[120px] h-[160px] rounded-[20px] overflow-hidden relative">
            <Image
              src={"/images/news-and-blog/2.jpg"}
              alt="vehsf"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-[#254229] text-[32px] lg:text-[42px] font-semibold">
            News/Blog
          </div>
          <div className="hidden lg:flex w-[120px] h-[160px] rounded-[20px] overflow-hidden relative">
            <Image
              src={"/images/news-and-blog/3.jpg"}
              alt="vehsf"
              fill
              className="object-cover"
            />
          </div>
          <div className="hidden lg:flex w-[240px] h-[240px] rounded-[20px] overflow-hidden relative">
            <Image
              src={"/images/news-and-blog/4.jpg"}
              alt="vehsf"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="text-center mt-[10px] max-w-[520px] justify-self-center">
          Stay up to date with our latest news, inspiring stories, upcoming
          events, and impact reports as we work together to change lives and
          transform communities
        </div>
        <Blogs />
        <Stories />
        <div className="my-[80px] w-full flex items-center justify-center">
          <div className="bg-[#F9F9F9] rounded-[20px] w-full max-w-[800px] p-[20px] lg:p-[50px] flex flex-col items-center justify-center">
            <div className="w-[180px] h-[56px] md:w-[277px] md:h-[86px] rounded-[20px] relative overflow-hidden">
              <Image
                src={`/images/explore-impact/19.jpg`}
                alt="vehsf"
                fill
                className="object-cover"
              />
              <div className="relative z-10 bg-[#00000080] w-full h-full"></div>
            </div>
            <div className="text-[18px] lg:text-[22px] font-semibold text-center mt-[15px] lg:mt-[25px]">
              Be Part of the Impact
            </div>
            <div className="mt-[20px] lg:mt-[25px] text-[#121212B2] text-center w-full max-w-[480px]">
              Every success story starts with someone who decided to make a
              difference. That someone can be you
            </div>
            <div className="flex flex-col lg:flex-row gap-[20px] items-center justify-center text-[14px] lg:text-base mt-[20px] lg:mt-[40px]">
              <Link
                href={"/signup"}
                className="px-[11px] py-[6px] bg-[#F1F1F1] rounded-[5px] block"
              >
                Become a Volunteer
              </Link>
              <div className="flex gap-[20px] items-center justify-center">
                <Link
                  href={"/donate"}
                  className="block px-[10px] py-[5px] border border-[#026935] text-[#026935] rounded-[5px]"
                >
                  Get involved
                </Link>
                <Link
                  href={"/donate"}
                  className="block px-[11px] py-[6px] bg-[#026935] text-[#F9F9F9] rounded-[5px]"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
