

export default function Upcoming_Commitments() {

    const data = [
        {
            name: "Charity Walk",
            date: "Mar. 20, 2025",
            status: "Pending"
        },
        {
            name: "Charity Walk",
            date: "Mar. 20, 2025",
            status: "Pending"
        },
        {
            name: "Charity Walk",
            date: "Mar. 20, 2025",
            status: "Pending"
        },
    ]

    return (
        <div className="border border-[#BABABA] p-[30px] rounded-[15px] w-full">
            <div className="font-semibold">Upcoming Commitments</div>
            <div className="mt-[15px] flex flex-wrap gap-[20px]">
                {
                    data.map((i, index) => (
                        <div key={index} className="border border-[#E6EDFF] rounded-[5px] py-[10px] px-[30px] flex items-center gap-[25px]">
                            <div className="">
                                <div className="font-medium text-[14px]">{i.name}</div>
                                <div className="mt-[5px] text-[#737375] text-[12px]">{i.date}</div>
                            </div>
                            <div className="bg-[#BA950026] text-[#BA9500] text-[14px] font-medium h-max rounded-[5px] px-[10px] py-[5px]">
                                {i.status}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}