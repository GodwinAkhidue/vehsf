import Image from "next/image";

export default function Target_Groups() {

    const target_groups = [
        {
            icon: "/images/target-groups/veteran.svg",
            title: "VETERAN",
            body: "Former military personnel who may be facing challenges reintegrating into civilian life. Our programs aim to support them with healthcare, employment opportunities, housing, and emotional support."
        },
        {
            icon: "/images/target-groups/vulnerable-population.svg",
            title: `VULNERABLE POPULATION
                    (Women, Children, Elderly)`,
            body: "These are groups at higher risk of neglect, abuse, or poverty. We focus on providing protection, education, healthcare, and empowerment programs tailored to their specific needs."
        },
        {
            icon: "/images/target-groups/communities.svg",
            title: `COMMUNITIES IN NEED`,
            body: "These are underdeveloped or crisis-affected communities lacking basic services. Our interventions provide humanitarian aid, infrastructure development, and long-term sustainability support."
        },
    ];

    return (
        <div className="w-full flex items-center justify-center px-[15px] lg:px-[50px] py-[100px] lg:py-[150px] poppins">
            <div className="bg-[#F9F9F9] px-[20px] lg:px-[70px] py-[40px] rounded-[30px] w-full max-w-[400px] md:max-w-[800px] lg:max-w-[1265px] shadow-lg shadow-[#00000026] flex flex-col items-center justify-center">
                <div className="font-semibold text-[24px] text-[#121212] lg:text-[36px]">TARGET GROUPS</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[30px] gap-[30px] lg:gap-x-[90px]">
                    {
                        target_groups.map((i, index) => (
                            <div key={index} className="flex flex-col items-center text-center md:last:col-span-2 lg:last:col-span-1">
                                <div>
                                    <Image src={i.icon} alt="vehsf" width={99} height={99} className="w-[60px]" />
                                </div>
                                <div className="text-[#254229] font-semibold mt-[20px]">{i.title}</div>
                                <div className="mt-[15px] text-[14px]">{i.body}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}