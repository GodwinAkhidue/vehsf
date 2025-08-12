import Image from "next/image";

export default function Loading() {
    return (
        <div className="w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-50 bg-white">
            <Image src={"/images/logo.png"} alt="vehsf" width={999} height={999} className="w-[200px] lg:w-[250px] animate-pulse" />
        </div>
    );
}