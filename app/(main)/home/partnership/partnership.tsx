import Image from "next/image";

export default function Partnership() {
    const partnerships = [
        {
            img: `/images/partnership/1.jpg`,
            heading: `Government Agencies`,
            body: `We partner with government bodies to expand our reach and align with national development goals.`
        },
        {
            img: `/images/partnership/2.jpg`,
            heading: `NGOs`,
            body: `We collaborate with other NGOs to share resources, strengthen impact, and reach more communities in need.`
        },
        {
            img: `/images/partnership/3.jpg`,
            heading: `Private Sector Organisations`,
            body: `We partner with businesses to support social impact projects through funding, expertise, and community development initiatives.`
        },
        {
            img: `/images/partnership/4.jpg`,
            heading: `International Organisations`,
            body: `We collaborate with global bodies to enhance resources, share best practices, and expand the impact of our humanitarian efforts across borders.`
        },
    ];

    return (
        <div className="w-full bg-[#D7FEEA] flex flex-col items-center justify-center px-[15px] lg:px-[50px] py-[50px] lg:py-[100px] mt-[50px] lg:mt-[100px] poppins">
            <div className="font-semibold text-[24px] text-[#121212] lg:text-[36px]">PARTNERSHIP</div>
            <div className="w-max mt-[30px] lg:mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px]">
                {
                    partnerships.map((i, index) => (
                        <div key={index} className="w-[307px] h-[265px] rounded-[30px] overflow-hidden relative flex items-center justify-center group">
                            <div className="w-full h-full group-hover:w-[120%] group-hover:h-[120%] transition-all duration-300 absolute z-0">
                                <Image src={i.img} alt="vehsf" fill className="object-cover" />
                            </div>
                            <div className="relative z-10 w-full h-full text-white bg-gradient-to-b from-transparent to-[#32323281] flex flex-col items-start justify-end p-[30px]">
                                <div className="text-[22px] font-semibold">{i.heading}</div>
                                <div className="text-[12px] mt-[5px]">{i.body}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}