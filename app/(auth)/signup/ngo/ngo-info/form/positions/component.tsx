"use client";
import { useEffect, useState, createRef } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { toast } from "react-toastify";
import { IoReload } from "react-icons/io5";
import { useSignupContext } from "@/context/auth/signup/context";
import Get_All_Ngo_Positions from "@/utils/get_all_ngo_positions";

export default function Positions() {
  const [skills, setSkills] = useState<any>();
  const [isFetchingSkills, setIsFetchingSkills] = useState(false);
  const { data, setData } = useSignupContext();

  const get_all_skills = async () => {
    await Get_All_Ngo_Positions(setIsFetchingSkills, toast, setSkills);
  };

  useEffect(() => {
    get_all_skills();
  }, []);

  const select_position = (name: any) => {
    setData((prev: any) =>
      prev.skills.includes(name)
        ? {
            ...prev,
          }
        : {
            ...prev,
            ngo_position: name,
          }
    );
  };

  return (
    <div className="mt-[30px] lg:mt-[40px] relative">
      <div className="font-medium text-[14px] lg:text-base">Position</div>
      <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
        {isFetchingSkills ? (
          "Loading..."
        ) : skills ? (
          <select
            value={data.ngo_position}
            onChange={(e) => select_position(e.target.value)}
            className="w-full outline-none"
          >
            <option value="">Select Position</option>
            {skills &&
              skills.length > 0 &&
              skills.map((i: any, index: any) => (
                <option key={index} value={i.name}>
                  {i.name}
                </option>
              ))}
          </select>
        ) : (
          <button
            onClick={get_all_skills}
            className="flex w-full items-center gap-1 cursor-pointer"
          >
            Could not get data. Retry <IoReload />
          </button>
        )}
      </div>
    </div>
  );
}
