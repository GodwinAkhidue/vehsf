import Image from "next/image";

export default function Core_Values() {
    const core_values = [
        {
            icon: "/images/core-values/compassion.svg",
            title: "COMPASSION"
        },
        {
            icon: "/images/core-values/empathy.svg",
            title: "EMPATHY"
        },
        {
            icon: "/images/core-values/humanity.svg",
            title: "HUMANITY"
        },
        {
            icon: "/images/core-values/integrity.svg",
            title: "INTEGRITY"
        },
        {
            icon: "/images/core-values/accountability.svg",
            title: "ACCOUNTABILITY"
        },
    ];

    return (
        <div className="w-full flex flex-col items-center justify-center px-[15px] lg:px-[50px] py-[50px] lg:py-[100px] poppins">
            <div className="font-semibold text-[24px] text-[#121212] lg:text-[36px]">CORE VALUES</div>
            <div className="w-full max-w-[950px] mt-[30px] bg-[#F9F9F9] rounded-[15px] lg:rounded-[25px] p-[20px] lg:px-[80px] lg:py-[30px] shadow-lg shadow-[#0000001A] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-[20px] gap-y-[40px]">
                {
                    core_values.map((i, index) => (
                        <div key={index} className="flex flex-col items-center justify-between gap-[20px] h-full last:col-span-2 md:last:col-span-4 lg:last:col-span-1">
                            <div>
                                <Image src={i.icon} alt="title" width={99} height={99} className="w-[60px]" />
                            </div>
                            <div className="font-medium">{i.title}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}