"use client"
import { useSignupContext } from "@/context/auth/signup/context";
import { BiTrash } from "react-icons/bi";
import { RiAttachment2 } from "react-icons/ri";

export default function Resume_Cv() {
    const { resumeCv, setResumeCv } = useSignupContext();

    const upload_cv = (e: any) => {
        const file: any = e.target.files?.[0];
        const fileName = file.name;
        const formData = new FormData();
        formData.append("file", file);
        setResumeCv({ fileName, formData });
    }

    return (
        <div className="mt-[20px] lg:mt-[30px]">
            {
                resumeCv?.fileName ?
                    <div className="">
                        <div className="font-medium text-[14px] lg:text-base relative">Resume/CV</div>
                        <div className="mt-[10px] flex items-center gap-[15px]">
                            {resumeCv.fileName}
                            <div
                                className="cursor-pointer text-[24px]"
                                onClick={() => setResumeCv()}
                            >
                                <BiTrash />
                            </div>
                        </div>
                    </div> :
                    <div className="">
                        <div className="font-medium text-[14px] lg:text-base relative">Resume/CV</div>
                        <div className="px-[16px] py-[6px] flex items-center  relative justify-center gap-[8px] border border-[#026935] text-[#026935] mt-[10px] w-max rounded-full">
                            <div className="text-[12px]">Attach Document</div>
                            <RiAttachment2 />
                            <input
                                className="absolute top-0 left-0 w-full h-full opacity-0"
                                type="file"
                                accept=".pdf,.doc,.docx,.txt"
                                onChange={(e) => upload_cv(e)}
                            />
                        </div>
                    </div>
            }
        </div>
    );
}