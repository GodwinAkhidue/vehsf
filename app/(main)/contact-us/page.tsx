import Image from "next/image";
import Form from "./form/component";

export default function Contact_Us() {
    return (
        <div className="poppins">
            <div className="px-[15px] py-[30px] lg:py-[60px] w-full">
                <div className="font-semibold text-center text-[32px] lg:text-[42px] text-[#254229]">
                    Contact Us
                </div>
                <div className="w-full max-w-[715px] h-[110px] rounded-full overflow-hidden relative mt-[20px] justify-self-center">
                    <Image src={'/images/contact_us/1.jpg'} alt="vehsf" fill className="object-cover" />
                </div>
                <div className="text-[14px] lg:text-base text-center mt-[20px] justify-self-center w-full max-w-[675px]">
                    Have questions? suggestions, or want to collaborate? We are here to listen.
                    Whether you are looking to support our projects, partner with us, or simply
                    learn more about our impact, our team is just a message away.
                </div>
                <Form />
                <div className="text-center text-[#475A4D] mt-[20px]">
                    Want to be part of this movement? <span className="text-[#026935] font-semibold underline">Signup</span>
                </div>
                <div className="mt-[50px] lg:mt-[70px] flex gap-[20px] items-center justify-center w-full">
                    <div className="h-[1px] w-full bg-[#C4C4C4] max-w-[500px]"></div>
                    <div className="text-[14px]">or</div>
                    <div className="h-[1px] w-full bg-[#C4C4C4] max-w-[500px]"></div>
                </div>
                <div className="mt-[50px] lg:mt-[70px] bg-[#F9F9F9] border border-[#026935] border-dashed p-[20px] w-max rounded-[10px] justify-self-center flex flex-col lg:flex-row items-center gap-[20px] lg:gap-[50px] xl:gap-[100px]">
                    <div className="border border-[#E6EDFF] px-[20px] py-[10px] flex items-center gap-[10px] rounded-full">
                        <Image src={`/images/contact_us/instagram.png`} alt="ig" width={99} height={99} className="w-[16px] h-[16px]" />
                        <div className="text-[14px]">Follow us on Instagram</div>
                    </div>
                    <div className="border border-[#E6EDFF] px-[20px] py-[10px] flex items-center gap-[10px] rounded-full">
                        <Image src={`/images/contact_us/facebook.png`} alt="fb" width={99} height={99} className="w-[16px] h-[16px]" />
                        <div className="text-[14px]">Follow us on Facebook</div>
                    </div>
                    <div className="border border-[#E6EDFF] px-[20px] py-[10px] flex items-center gap-[10px] rounded-full">
                        <Image src={`/images/contact_us/linkedin.png`} alt="linkedin" width={99} height={99} className="w-[16px] h-[16px]" />
                        <div className="text-[14px]">Connect with us on LinkedIn</div>
                    </div>
                </div>
                <div className="mt-[50px] lg:mt-[70px] mb-[80px] lg:mb-[100px] bg-[#F9F9F9] border border-[#E6EDFF] p-[30px] lg:px-[60px] rounded-[10px] w-max justify-self-center">
                    <div className="flex items-center gap-[10px] justify-self-center">
                        <Image src={`/images/contact_us/globe.png`} alt="globe" width={99} height={99} className="w-[46px]" />
                        <div className="font-medium text-[24px] lg:text-[28px]">Find Us</div>
                    </div>
                    <div className="text-center mt-[10px] text-[14px]">
                        Bamidele Otiko Street, Off David Ejoor Street,
                        Near Ibeto Hotel Gudu District, Abuja, FCT.
                    </div>
                    <div className="w-full max-w-[600px] h-[50vw] max-h-[300px] relative overflow-hidden rounded-[20px] mt-[35px]">
                        <Image src={`/images/contact_us/map.png`} alt="map" fill className="object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
}