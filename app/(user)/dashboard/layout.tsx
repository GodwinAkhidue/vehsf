import type { Metadata } from "next";
import Footer from "@/components/footer/footer";
import User_Header from "@/components/user_header/header";
import Dashboard_Navigation from "@/components/dashboard_nav/nav";
import Dashboard_Notifications from "@/components/notifications/page";

export const metadata: Metadata = {
    title: "VEHSF",
    description: "Veterans Empowerment Humanitarian Society Foundation",
};

export default function Dashboard_Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <User_Header />
            <div className="flex lg:gap-[10px]">
                <Dashboard_Navigation />
                {children}
                <Dashboard_Notifications />
            </div>
            <Footer />
        </>
    );
}
