export default function Form() {
    return (
        <div className="w-full max-w-[850px] justify-self-center mt-[50px] lg:mt-[70px] grid grid-cols-1 lg:grid-cols-2 gap-[15px]">
            <input placeholder="Full Name" className="border border-[#00000026] w-full rounded-[10px] h-[45px] px-[15px]" />
            <input placeholder="Email" className="border border-[#00000026] w-full rounded-[10px] h-[45px] px-[15px]" />
            <input placeholder="Subject" className="border border-[#00000026] w-full rounded-[10px] h-[45px] px-[15px] lg:col-span-2" />
            <textarea placeholder="Write Message" className="border border-[#00000026] w-full rounded-[10px] h-[180px] p-[15px] lg:col-span-2" />
            <div className="cursor-pointer w-full py-[15px] bg-[#026935] rounded-[10px] text-white flex items-center lg:col-span-2 justify-center font-medium text-[14px]">
                Send Message
            </div>
        </div>
    );
}