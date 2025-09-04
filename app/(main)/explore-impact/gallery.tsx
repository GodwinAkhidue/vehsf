import Image from "next/image";

export default function Gallery() {

    const topPhotos = [
        "/images/explore-impact/8.jpg",
        "/images/explore-impact/9.jpg",
        "/images/explore-impact/10.jpg",
        "/images/explore-impact/11.png",
    ];

    const otherPhotos = [
        "/images/explore-impact/12.png",
        "/images/explore-impact/13.jpg",
        "/images/explore-impact/14.jpg",
        "/images/explore-impact/15.jpg",
        "/images/explore-impact/16.jpg",
        "/images/explore-impact/17.jpg",
        "/images/explore-impact/18.jpg",
    ];

    return (
        <div className="flex flex-col items-center">
            <div className="font-semibold text-[24px] lg:text-[36px]">
                Gallery
            </div>
            <div className="w-full max-w-[675px] text-center mt-[10px] lg:mt-[20px]">
                A picture speaks louder than words. Explore photos and videos capturing lives
                transformed, communities rebuilt, and hope restored.
            </div>
            <div className="flex gap-[20px] lg:gap-[40px] mt-[25px] lg:mt-[35px]">
                <div className="w-[140px] h-[170px] lg:w-[200px] lg:h-[230px] relative rounded-t-full overflow-hidden">
                    <Image src={`/images/explore-impact/6.jpg`} alt="vehsf" fill className="object-cover" />
                </div>
                <div className="w-[150px] h-[175px] lg:w-[200px] lg:h-[230px] relative rounded-b-full overflow-hidden">
                    <Image src={`/images/explore-impact/7.jpg`} alt="vehsf" fill className="object-cover" />
                </div>
            </div>
            <div className="mt-[50px] lg:mt-[70px] w-full">
                <div className="text-[#00000080] font-semibold">Top Photos & Videos</div>
                <div className="mt-[15px] lg:mt-[25px] w-full overflow-x-auto flex gap-[20px] lg:gap-[30px]">
                    {
                        topPhotos.map((i, index) => (
                            <div key={index} className="w-[270px] h-[270px] rounded-[10px] overflow-hidden relative shrink-0">
                                <Image src={i} alt="vehsf" fill className="object-cover" />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="mt-[50px] lg:mt-[70px] w-full">
                <div className="text-[#00000080] font-semibold">Other Photos & Videos</div>
                <div className="mt-[15px] lg:mt-[25px] w-full overflow-x-auto flex gap-[20px] lg:gap-[30px] lg:grid lg:grid-cols-4">
                    {
                        otherPhotos.map((i, index) => (
                            <div key={index} className={`w-[270px] h-[270px] ${index === 4 ? "lg:col-span-2 lg:w-full" : ""} rounded-[10px] overflow-hidden relative shrink-0`}>
                                <Image src={i} alt="vehsf" fill className="object-cover" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}