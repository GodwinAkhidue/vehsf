import Image from "next/image";

export default function Blog_Item() {
    return (
        <div className="w-full max-w-[550px] ">
            <div className="w-full h-[65vw] max-h-[380px] relative rounded-[10px] overflow-hidden">
                <Image src={`/images/news-and-blog/5.jpg`} alt="vehsf" fill className="object-cover" />
                <div className="absolute z-10 top-0 right-0 bg-[#00FF26] p-[10px] font-semibold text-[14px]">
                    26 Sep
                </div>
            </div>
            <div className="font-medium text-[20px] lg:text-[24px] mt-[10px] lg:mt-[20px]">
                Transforming Lives: Delivering Clean Water to
                every Community
            </div>
            <div className="mt-[10px] lg:mt-[15px]">
                Breaking Barriers: Empowering Communities Through Change At VEHSF, we believe
                in creating lasting impact. From providing access to clean water and quality
                education to supporting healthcare initiatives and youth empowerment programs,
                our work focuses on transforming lives and uplifting underserved communities.
            </div>
            <div className="text-[#00FF26] mt-[15px]">
                Read More
            </div>
        </div>
    );
}