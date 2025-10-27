"use client";
import { IoIosCheckmark } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useSignupContext } from "@/context/auth/signup/context";
import { ngo_positions } from "@/lib/ngo_positions";
import Location_Input from "@/components/form/location-input";
import Positions from "./positions/component";

export default function Form() {
  const router = useRouter();

  const { data, setData } = useSignupContext();

  return (
    <div className="w-full ">
      <div className="mt-[30px] lg:mt-[40px] flex gap-[10px] lg:gap-[20px] flex-wrap">
        <div className="flex items-center gap-[5px] lg:gap-[10px] leading-tight text-[14px] lg:text-[16px] font-semibold">
          <div className="w-[12px] h-[12px] lg:w-[17px] lg:h-[17px] rounded-full bg-[#026935] text-white flex items-center justify-center text-base mb-[2px]">
            <IoIosCheckmark className="lg:text-[20px]" />
          </div>
          Personal Information
        </div>
        <div className="flex items-center gap-[5px] lg:gap-[10px] leading-tight text-[14px] lg:text-[16px] font-semibold">
          <div className="w-[12px] h-[12px] lg:w-[17px] lg:h-[17px] rounded-full bg-[#026935] text-white flex items-center justify-center text-base mb-[2px]">
            <IoIosCheckmark className="lg:text-[20px]" />
          </div>
          NGO Information
        </div>
        <div className="flex items-center gap-[5px] lg:gap-[10px] leading-tight text-[14px] lg:text-[16px] opacity-50 font-semibold">
          <div className="w-[12px] h-[12px] lg:w-[17px] lg:h-[17px] rounded-full border-2 lg:border-[3px] border-[#026935] flex items-center justify-center text-base mb-[2px]"></div>
          Create
        </div>
      </div>

      <Positions />

      <Location_Input
        heading="NGO Location"
        state={data.location.state}
        setState={(e: any) =>
          setData((prev: any) => ({
            ...prev,
            location: {
              ...prev.location,
              state: e,
            },
          }))
        }
        lga={data.location.lga}
        setLga={(e: any) =>
          setData((prev: any) => ({
            ...prev,
            location: {
              ...prev.location,
              lga: e,
            },
          }))
        }
      />

      <div className="mt-[40px] flex gap-[25px]">
        <div
          onClick={() => router.push("/signup/ngo/personal-info")}
          className="cursor-pointer py-[8px] px-[31px] border-2 border-[#026935] text-[#026935] rounded-[10px] font-semibold w-max"
        >
          Previous
        </div>
        <div
          onClick={() => router.push("/signup/ngo/create")}
          className="cursor-pointer py-[10px] px-[33px] bg-[#026935] text-white rounded-[10px] font-semibold w-max"
        >
          Next
        </div>
      </div>
    </div>
  );
}
