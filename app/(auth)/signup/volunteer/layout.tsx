import Testimonials from "./testimonials/testimonials";

export default function Volunteer_Signup_Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex items-center justify-center px-[15px] py-[30px] lg:p-[50px]">
            <div className="flex flex-col lg:flex-row poppins gap-[60px] w-full max-w-[1440px]">
                <Testimonials />
                {children}
            </div>
        </div>
    );
}