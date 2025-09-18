import Theme_Switch from "@/components/theme_switch/theme_switch";
import Image from "next/image";

export default function User_Header_Mobile({ profile }: { profile: any }) {

    return (
        <div className="w-screen shadow-lg flex lg:hidden items-center justify-center bg-[#F9FFFC] relative z-50">

            <div className="pr-[15px] pl-[35px] lg:pl-[35px] py-[10px] lg:pr-[50px] w-screen overflow-hidden flex items-center justify-between gap-[10px]">

                <div className="flex items-center gap-[10px] bg-[#FAFFFD] p-[5px] rounded-full w-full">
                    <div className="w-[35px] h-[35px] rounded-full border-2 border-[#026935] shrink-0">
                        <div className="w-full h-full border-2 border-white relative rounded-full overflow-hidden">
                            {
                                profile?.profile_picture && profile?.profile_picture?.url &&
                                <Image src={profile?.profile_picture?.url} alt="user" fill className="object-cover" />
                            }
                        </div>
                    </div>
                    <div className="font-semibold poppins text-[12px] truncate w-[100px]">
                        {profile?.firstname && profile?.lastname && `${profile.firstname} ${profile.lastname}`}
                    </div>
                </div>

                <div className="flex items-center gap-[15px] shrink-0">
                    <div className="">
                        <Theme_Switch />
                    </div>
                    <button className="cursor-pointer border border-[#026935] text-[#026935] py-[5px] px-[10px] font-medium poppins text-[12px] rounded-[5px]">
                        Donate Now
                    </button>

                </div>

            </div>

        </div>
    );
}