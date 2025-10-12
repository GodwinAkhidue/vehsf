"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import { server_url } from "@/constants/server_url";
import { toast } from "react-toastify";

export default function Impact() {
  const [impact, setImpact] = React.useState([]);

  const fetchImpact = async () => {
    try {
      const result = await axios.get(
        `${server_url}/api/explore-impact/get-some`
      );
      if (result.data.success) {
        setImpact(result.data.articles);
      } else {
        toast.warn(result.data.message);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchImpact();
  }, []);

  // const impact = [
  //     {
  //         img: `/images/impact/1.jpg`,
  //         title: `Improved Life of  Veterans & Vulnerable Populations`,
  //         body: `With a vision to expand our impact, we are scaling our programs to neighboring African countries. This includes forming partnerships, conducting community assessments, and launching pilot projects that address shared regional challenges in health, education, and economic empowerment.`,
  //     },
  //     {
  //         img: `/images/impact/2.jpg`,
  //         title: `Empowered Communities`,
  //         body: `By Providing tools, education, and opportunities, communities are now better equipped to sustain themselves and thrive independtly.`,
  //     },
  //     {
  //         img: `/images/impact/3.jpg`,
  //         title: `Promotional Human Right and Diginity`,
  //         body: `Our programs have raised awareness and upheld the rights of individuals, ensuring they are treated with respect and fairness.`,
  //     },
  // ];

  return (
    <div className="w-full flex flex-col items-center justify-center px-[15px] lg:px-[50px] py-[50px] lg:py-[100px] poppins">
      <div className="relative font-semibold text-[24px] lg:text-[36px] flex items-center justify-center">
        IMPACT
        <div className="absolute -bottom-[8px]">
          <Image
            src={"/images/credo/credo-underline.svg"}
            alt="vehsf"
            width={999}
            height={999}
            className="w-[70px] lg:w-[98px]"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] mt-[50px] lg:mt-[95px]">
        {impact.map((i: any, index) => (
          <div key={index} className="w-[284px]">
            <div className="w-full h-[142px] relative rounded-[20px] overflow-hidden">
              <Image
                src={i.image.url}
                alt="vehsf"
                fill
                className="object-cover"
              />
              <div className="relative z-10 w-full h-full flex items-center justify-center text-white text-[40px] bg-[#00000033]">
                {/* <FaPlay /> */}
              </div>
            </div>
            <div className="mt-[15px] newsreader text-[28px] font-bold text-[#254229] leading-tight">
              {i.title}
            </div>
            <div className="poppins mt-[10px] line-clamp-3">{i.content}</div>
            {/* <button className="text-[#026935] font-semibold poppins mt-[15px] flex items-center gap-[5px] cursor-pointer">
              See more <IoIosArrowForward className="text-[20px]" />
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
}
