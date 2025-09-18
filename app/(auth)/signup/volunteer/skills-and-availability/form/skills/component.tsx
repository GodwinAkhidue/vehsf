"use client"
import Get_All_Skills from "@/utils/get_all_skills";
import { useEffect, useState, createRef } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { FaHandHoldingUsd } from "react-icons/fa";
import { toast } from "react-toastify";
import Selected_Skill_Item from "./selected_skill_item";
import { IoReload } from "react-icons/io5";
import { useSignupContext } from "@/context/auth/signup/context";

export default function Skills() {
    const [skills, setSkills] = useState<any>();
    const [filteredSkills, setFilteredSkills] = useState<any>();
    const [skillSearchValue, setSkillSearchValue] = useState("");
    const [displaySkillList, setDisplaySkillList] = useState(false);
    const [isFetchingSkills, setIsFetchingSkills] = useState(false);
    const [isHoveringOverList, setIsHoveringOverList] = useState(false);
    const [inputIsFocused, setInputIsFocused] = useState(false);
    const inputRef = createRef<HTMLInputElement>();
    const { data, setData } = useSignupContext();

    const get_all_skills = async () => {
        await Get_All_Skills(setIsFetchingSkills, toast, setSkills);
    }

    const add_new_skill = (name: any) => {
        setData(
            (prev: any) => (
                prev.skills.includes(name) ?
                    {
                        ...prev
                    } :
                    {
                        ...prev,
                        skills: [
                            ...prev.skills,
                            name
                        ]
                    }
            )
        );
        setIsHoveringOverList(false);
        setSkillSearchValue("")
    }

    const list_toggle = () => {
        if (inputIsFocused) {
            setDisplaySkillList(true);
        } else {
            if (!isHoveringOverList) {
                setDisplaySkillList(false);
            }
        }
    }

    useEffect(() => {
        list_toggle();
    }, [inputIsFocused, isHoveringOverList]);

    useEffect(() => {
        get_all_skills();
    }, [])

    useEffect(() => {
        if (skills && skills.length > 0) {
            if (!skillSearchValue) {
                return setFilteredSkills(skills)
            }
            const filter = skills.filter(
                (i: any) => i.name.toLowerCase().includes(skillSearchValue.toLowerCase())
            );
            return setFilteredSkills(filter)
        }
    }, [skills, skillSearchValue])

    return (
        <div className="mt-[30px] lg:mt-[40px] relative">
            <div className="font-medium text-[14px] lg:text-base">Skills</div>
            <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                <FaHandHoldingUsd className="text-[#00000080] text-[18px]" />
                <input
                    ref={inputRef}
                    placeholder="Search your Skills"
                    type="text"
                    className="w-full h-full outline-none"
                    value={skillSearchValue}
                    onChange={(e) => setSkillSearchValue(e.target.value)}
                    onFocus={() => setInputIsFocused(true)}
                    onBlur={() => setInputIsFocused(false)}
                />
            </div>
            {
                data?.skills && data?.skills.length > 0 &&
                <div className="mt-[20px] flex flex-wrap w-full gap-x-[20px] gap-y-[10px]">
                    {
                        data.skills.map((i: any, index: any) => (
                            <Selected_Skill_Item
                                name={i}
                                key={index}
                                delete_skill={(name: any) => setData(
                                    (prev: any) => (
                                        {
                                            ...prev,
                                            skills: prev.skills.filter((i: any) => i !== name)

                                        }
                                    )
                                )}
                            />
                        ))
                    }
                </div>
            }
            <div
                onMouseEnter={() => setIsHoveringOverList(true)}
                onMouseLeave={() => setIsHoveringOverList(false)}
                className={`w-full absolute bg-white top-[95px] ${displaySkillList ? "block" : "hidden"} h-max min-h-[50px] max-h-[300px] overflow-y-auto border border-[#00000080] z-10 rounded-[7px]`}
            >
                {
                    isFetchingSkills ?
                        <div className="w-full h-[50px] flex items-center justify-center">
                            <AiOutlineLoading className="animate-spin text-[24px]" />
                        </div> :
                        <div className="h-max">
                            {
                                filteredSkills ? filteredSkills.length > 0 && filteredSkills.map((i: any, index: any) => (
                                    <div
                                        key={index}
                                        className="border-b border-[#0000005d] p-[10px] cursor-pointer hover:bg-[#026935] hover:text-white"
                                        onClick={() => add_new_skill(i.name)}
                                    >
                                        {i.name}
                                    </div>
                                )) :

                                    <div className="w-full h-[100px] flex flex-col items-center justify-center">
                                        <div>Could not fetch skills</div>
                                        <div
                                            onClick={() => get_all_skills()}
                                            className="mt-[10px] cursor-pointer border bg-gray-100 flex items-center gap-[10px] border-gray-400 rounded-[10px] px-[10px] py-[5px]"
                                        >
                                            <IoReload />
                                            Retry
                                        </div>
                                    </div>
                            }
                        </div>
                }
            </div>
        </div>
    );
}