import Link from "next/link";
import Form_1 from "./form/form_1/form_1";

export default function Volunteer_Signup() {
    return (
        <div className="w-full">
            <div className="text-[#100F14] font-semibold text-[24px] lg:text-[32px]">Create an Account</div>
            <div className="mt-[10px] lg:mt-[20px] text-[#49475A] text-[14px] lg:text-base">
                Already have an account? <Link href={`/login`} className="text-[#026935] font-semibold underline">Login</Link>
            </div>
            <Form_1 />
        </div>
    );
}