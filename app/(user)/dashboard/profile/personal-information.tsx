"use client"
import { useUserContext } from "@/context/user/context";
import Remove_Profile_Picture from "@/utils/remove_profile_picture";
import Update_Personal_Information from "@/utils/update_personal_information";
import Update_User_Profile_Picture from "@/utils/update_user_profile_picture";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { toast } from "react-toastify";

export default function Personal_Information() {

    const { user, fetchUser } = useUserContext();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [isUpdatingProfilePicture, setIsUpdatingProfilePicture] = useState(false);
    const [isUpdatingPersonalInformation, setIsUpdatingPersonalInformation] = useState(false);

    useEffect(() => {
        if (user) {
            if (user.firstname) {
                setFirstname(user.firstname)
            }
            if (user.lastname) {
                setLastname(user.lastname)
            }
        }
    }, [user]);

    const update_Image = (e: any) => {

        const file: any = e.target.files?.[0]
        const formData = new FormData();
        formData.append("file", file);
        let id: any;

        if (user && user.profile_picture && user.profile_picture.public_id) {
            id = user.profile_picture.public_id;
        }

        Update_User_Profile_Picture(
            formData,
            toast,
            setIsUpdatingProfilePicture,
            fetchUser,
            id
        );

    }

    const delete_image = () => {
        if (user && user.profile_picture && user.profile_picture.public_id) {
            const id = user.profile_picture.public_id;
            Remove_Profile_Picture(
                toast,
                setIsUpdatingProfilePicture,
                fetchUser,
                id
            );
        }
    }

    const update_personal_information = () => {
        Update_Personal_Information(
            toast,
            setIsUpdatingPersonalInformation,
            fetchUser,
            firstname,
            lastname
        );
    }

    return (
        <div className="relative">
            <div className="text-[#121212] text-[24px] lg:text-[32px] font-semibold">Personal Information</div>
            <div className="mt-[25px] flex items-center gap-[10px] lg:gap-[20px] relative">
                <div className="w-[35px] lg:w-[56px] h-[35px] lg:h-[56px] rounded-full relative overflow-hidden shrink-0 border border-gray-400">
                    {
                        user && user.profile_picture && user.profile_picture.url &&
                        <Image src={user.profile_picture.url} alt="user" fill className="object-cover" />
                    }
                </div>
                <div className="text-[10px] lg:text-[14px] leading-tight text-white p-[10px] font-medium bg-[#026935] rounded-[5px] relative">
                    {user && user.profile_picture && user.profile_picture.public_id ? "Change Picture" : "Add Picture"}
                    <input
                        className="absolute top-0 left-0 w-full h-full opacity-0 z-10"
                        type="file"
                        accept="image/*"
                        onChange={(e) => update_Image(e)}
                    />
                </div>
                {
                    user && user.profile_picture && user.profile_picture.public_id &&
                    <button
                        className="text-[10px] lg:text-[14px] leading-tight text-[#F10000] p-[10px] font-medium bg-[#F1000040] rounded-[5px] cursor-pointer"
                        onClick={() => delete_image()}
                    >
                        Remove Picture
                    </button>
                }
                {
                    isUpdatingProfilePicture && <div className="absolute top-0 left-0 w-full h-full bg-[#00000080] flex items-center justify-center">
                        <AiOutlineLoading className="animate-spin text-white text-[24px]" />
                    </div>
                }
            </div>

            <div className="mt-[20px] lg:mt-[30px]">
                <div className="font-medium text-[14px] lg:text-base">Email address</div>
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px] bg-[#F1F1F1]">
                    <IoIosMail className="text-[#00000080] text-[18px]" />
                    <div className="text-[14px] text-[#9A9A9A]">{user && user.email && user.email}</div>
                </div>
            </div>
            <div className="mt-[30px] lg:mt-[40px]">
                <div className="font-medium text-[14px] lg:text-base">First Name</div>
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                    <FaUser className="text-[#00000080] text-[18px]" />
                    <input
                        className="text-[14px] w-full h-full outline-none"
                        type="text"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                </div>
            </div>
            <div className="mt-[30px] lg:mt-[40px]">
                <div className="font-medium text-[14px] lg:text-base">Last Name</div>
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                    <FaUser className="text-[#00000080] text-[18px]" />
                    <input
                        className="text-[14px] w-full h-full outline-none"
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                </div>
            </div>
            {
                isUpdatingPersonalInformation && <div className="absolute top-0 left-0 w-full h-full bg-[#00000080] flex items-center justify-center">
                    <AiOutlineLoading className="animate-spin text-white text-[24px]" />
                </div>
            }
            <div className="justify-self-end">
                <button
                    className="cursor-pointer text-white bg-[#026935] px-[30px] py-[15px] rounded-[5px] w-max mt-[20px]"
                    onClick={() => update_personal_information()}
                    disabled={isUpdatingPersonalInformation}
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
}