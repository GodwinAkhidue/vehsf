"use client"
import { Suspense } from "react";
import For_You from "./components/for-you";
import News_and_Updates from "./components/news-and-update";
import Recent_Activities from "./components/recent-activities";
import Upcoming_Events from "./components/upcoming-events";
import Volunteer_Statistics from "./components/volunteer_statistics";


export default function Dashboard() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Page />
        </Suspense>
    );
}

const Page = () => {

    return (
        <div className="p-[15px] w-full lg:flex lg:flex-row-reverse gap-[10px] lg:p-0 lg:pr-[10px]">
            <div className="flex flex-col gap-[20px] lg:mt-[10px]">
                <For_You />
                <News_and_Updates />
            </div>
            <div className="w-full">
                <div className="font-semibold text-[24px] mt-[20px] mb-[7px]">Welcome back, Tosin</div>
                <Upcoming_Events />
                <Recent_Activities />
                <Volunteer_Statistics />
            </div>
        </div>
    );
}