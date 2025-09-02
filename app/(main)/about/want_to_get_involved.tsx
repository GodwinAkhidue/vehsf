export default function Want_To_Get_Involved() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="font-semibold text-[24px] lg:text-[36px] text-center">
                Want to get Involved?
            </div>
            <div className="mt-[10px] text-center max-w-[800px]">
                Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one
                of the more obscure Latin words from a Lorem Ipsum
                passage, and going discovered the undoubtable
                source.
            </div>
            <div className="flex flex-col lg:flex-row w-full items-center justify-center mt-[40px] lg:mt-[80px]">
                <div className="bg-[#BDFFC94D] w-full p-[40px] max-w-[360px] h-[285px] flex flex-col items-center justify-center gap-[30px] rounded-[10px] shadow-md shadow-[#00000040]">
                    <div className="font-medium text-[28px] text-[#000000CC] text-center">
                        Be a Member,
                        Volunteer, or Donor
                    </div>
                    <div className="cursor-pointer rounded-[10px] bg-[#026935] text-[#F9F9F9] py-[10px] w-[200px] text-center text-[20px]">
                        Join Us
                    </div>
                </div>
                <div className="bg-[#ECFFEF4D] w-full p-[40px] max-w-[360px] h-[285px] flex flex-col items-center justify-center gap-[30px] rounded-[10px] shadow-md shadow-[#00000040]">
                    <div className="font-medium text-[28px] text-[#000000CC] text-center">
                        The Long Journey to End Poverty begins here
                    </div>
                    <div className="cursor-pointer rounded-[10px] border-2 border-[#026935] text-[#026935] py-[10px] w-[200px] text-center text-[20px]">
                        Donate
                    </div>
                </div>
            </div>
        </div>
    );
}