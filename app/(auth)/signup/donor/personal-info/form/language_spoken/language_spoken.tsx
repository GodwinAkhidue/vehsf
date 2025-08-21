export default function Language_Spoken() {

    const languages = [
        "English",
        "French",
        "Spanish",
        "Igbo",
        "Hausa",
        "Yoruba"
    ];

    return (
        <div className="mt-[20px] lg:mt-[30px]">
            <div className="font-medium text-[14px] lg:text-base">Language(s) Spoken</div>
            <div className="mt-[10px] flex flex-wrap gap-[8px]">
                {
                    languages.map((i, index) => (
                        <div key={index} className="px-[16px] py-[8px] rounded-full font-medium border border-[#026935] text-[#026935]">
                            {i}
                        </div>
                    ))
                }
                <div className="px-[16px] py-[8px] font-medium text-[#026935]">
                    Other
                </div>
            </div>
        </div>
    )
}