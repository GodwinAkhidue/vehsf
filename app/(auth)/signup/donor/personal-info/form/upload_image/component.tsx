"use client"
import { useSignupContext } from "@/context/auth/signup/context";
import Image from "next/image";
import { BiTrash } from "react-icons/bi";
import { RiAttachment2 } from "react-icons/ri";

export default function Upload_Image() {

    const { profilePicture, setProfilePicture } = useSignupContext();

    // const upload_image = async (e: any) => {
    //     try {
    //         const res =
    //             await axios.post(
    //                 `${server_url}/api/cloudinary/upload/form-data`,
    //                 formData
    //             )
    //         console.log(res.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const upload_image = (e: any) => {
        const file: any = e.target.files?.[0]
        const localUrl = URL.createObjectURL(file);
        const formData = new FormData();
        formData.append("file", file)
        setProfilePicture({ localUrl, formData });
    }



    return (
        <div className="mt-[20px] lg:mt-[30px]">
            {
                profilePicture?.localUrl ?
                    <div>
                        <div className="font-medium text-[14px] lg:text-base relative">Profile Picture</div>
                        <div className="flex items-center gap-[15px]">
                            <div className="w-[80px] h-[80px] rounded-full overflow-hidden relative mt-[10px]">
                                <Image src={profilePicture.localUrl} alt="profile picture" fill className="object-cover" />
                            </div>
                            <div
                                className="cursor-pointer text-[24px]"
                                onClick={() => setProfilePicture()}
                            >
                                <BiTrash />
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="font-medium text-[14px] lg:text-base relative">Upload Profile Picture</div>
                        <div className="px-[16px] py-[6px] flex items-center  relative justify-center gap-[8px] border border-[#026935] text-[#026935] mt-[10px] w-max rounded-full">
                            <div className="text-[12px]">Upload Image</div>
                            <RiAttachment2 />
                            <input
                                className="absolute top-0 left-0 w-full h-full opacity-0"
                                type="file"
                                accept="image/*"
                                onChange={(e) => upload_image(e)}
                            />
                        </div>
                        <div className="text-[#00000080] text-[14px] italic mt-[5px]">(Optional)</div>
                    </div>
            }
        </div>
    );
}