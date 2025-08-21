import Testimonials from "./testimonials/testimonials";
import Form from "./form/form";
import Link from "next/link";

export default function Personal_Information() {
    return (
        <div className="w-full flex items-start justify-center px-[15px] py-[30px] lg:p-[50px]">
            <div className="flex flex-col lg:flex-row poppins gap-[60px] w-full max-w-[1440px]">
                <Testimonials />
                <div className="w-full">
                    <div className="text-[#100F14] font-semibold text-[24px] lg:text-[32px]">Create an Account</div>
                    <div className="mt-[10px] lg:mt-[20px] text-[#49475A] text-[14px] lg:text-base">
                        Already have an account? <Link href={`/login`} className="text-[#026935] font-semibold underline">Login</Link>
                    </div>
                    <Form />
                </div>
            </div>
        </div>
    );
}