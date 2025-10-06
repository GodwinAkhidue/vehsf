"use client"
import Update_Password_Profile from "@/utils/update_password_profile";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { toast } from "react-toastify";

export default function Security_And_Privacy() {

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

    const update_password_profile = () => {
        if (newPassword !== confirmNewPassword) {
            return toast.warn("new-password and confirm-new-password must match");
        }
        Update_Password_Profile(toast, setIsUpdatingPassword, oldPassword, newPassword);
    }

    return (
        <div className="mt-[50px] relative">
            <div className="text-[#121212] text-[24px] lg:text-[32px] font-semibold">Security & Privacy</div>

            <div className="font-medium text-[14px] lg:text-base mt-[40px]">Password Management</div>
            <div className="mt-[20px] lg:mt-[40px]">
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                    <input
                        placeholder="Enter Old Password"
                        type="password"
                        className="w-full h-full outline-none"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className="mt-[20px] lg:mt-[30px]">
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                    <input
                        placeholder="Enter New Password"
                        type="password"
                        className="w-full h-full outline-none"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className="mt-[20px] lg:mt-[30px]">
                <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
                    <input
                        placeholder="Confirm New Password"
                        type="password"
                        className="w-full h-full outline-none"
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                </div>
            </div>

            {
                isUpdatingPassword && <div className="absolute top-0 left-0 w-full h-full bg-[#00000080] flex items-center justify-center">
                    <AiOutlineLoading className="animate-spin text-white text-[24px]" />
                </div>
            }

            <div className="justify-self-end">
                <button
                    onClick={() => update_password_profile()}
                    className="cursor-pointer text-white bg-[#026935] px-[30px] py-[15px] rounded-[5px] w-max mt-[20px]"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
}