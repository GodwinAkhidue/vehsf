import Image from "next/image";

export default function ProfileCard({ profile }: { profile: any }) {
    return (
        <div className="flex items-center gap-[10px] bg-[#FAFFFD] p-[20px] ml-[20px] shrink-0 rounded-full">
            <div className="font-semibold poppins text-[14px]">
                {profile?.firstname && profile?.lastname && `${profile.firstname} ${profile.lastname}`}
            </div>
            <div className="w-[35px] h-[35px] rounded-full border-2 border-[#026935]">
                <div className="w-full h-full border-2 border-white relative rounded-full overflow-hidden">
                    {
                        profile?.profile_picture && profile?.profile_picture?.url &&
                        <Image src={profile?.profile_picture?.url} alt="user" fill className="object-cover" />
                    }
                </div>
            </div>
        </div>
    );
}