import Image from "next/image";

export default function About() {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="py-[50px] lg:py-[80px] px-[15px] lg:px-[50px] poppins w-full max-w-[1000px] flex flex-col items-center justify-center">
                <div className="flex flex-col">
                    <div className="tracking-widest text-[18px] lg:text-[22px] text-[#121212]">About Us</div>
                    <div className="w-full h-[7px] bg-[#00DD6D] rounded-full"></div>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-between mt-[50px] lg:mt-[100px] w-full">
                    <div className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] overflow-hidden rounded-tr-[20px] rounded-bl-[20px] lg:rounded-tr-[30px] lg:rounded-bl-[30px] relative bg-black">
                        <Image src={"/images/home-who-we-are-image.jpg"} alt="vehsf" fill className="object-cover" />
                    </div>
                    <div className="mt-[50px] lg:mt-0 text-center lg:text-end w-[300px] lg:w-[480px]">
                        <div className="font-semibold italic text-[24px] lg:text-[36px]">Who We Are</div>
                        <div className="text-[14px] lg:text-[18px] mt-[5px]">
                            <b>VETERANS EMPOWERMENT HUMANITARIAN SOCIETY FOUNDATION</b> is a humanitarian
                            organization dedic⁠ated to empowering v‌eter​a⁠ns a⁠nd​ vulnerable pop‍ulati⁠ons
                            i⁠n Nigeria a⁠nd Africa.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}