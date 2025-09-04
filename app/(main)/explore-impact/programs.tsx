import Image from "next/image";

export default function Programs() {
    return (
        <div>
            <div className="text-[24px] lg:text-[36px] font-semibold text-center">
                Our Programs Making a Difference
            </div>
            <div className="mt-[40px] lg:mt-[80px] space-y-[15px]">
                <div className="flex gap-[10px] lg:gap-[20px] h-[112px] lg:h-[331px]">
                    <div className="w-[35%] shrink-0 h-full relative self-stretch">
                        <Image src={`/images/explore-impact/2.jpg`} alt="vehsf" fill className="object-cover" />
                    </div>
                    <div className="w-full p-[20px] lg:px-[80px] lg:py-[90px] bg-[#00B44B] text-white">
                        <div className="font-semibold text-[24px] lg:text-[32px] relative line-clamp-2 lg:line-clamp-1">
                            Education for All
                            <div className="absolute bottom-0 left-0 h-[2px] w-[77px] bg-[#FFBE18]"></div>
                        </div>
                        <div className="hidden lg:block text-[14px] line-clamp-4 mt-[15px]">
                            Helping Children access quality education and learning resources.
                            At the heart of our mission is the belief that education is a
                            fundamental right, not a privilege. We are committed to creating
                            opportunities that break barriers and bridge gaps, ensuring that
                            everyone, regardless of age, gender, background, or location -
                            has access to quality learning resources.
                        </div>
                    </div>
                </div>
                <div className="flex flex-row-reverse gap-[10px] lg:gap-[20px] h-[112px] lg:h-[331px]">
                    <div className="w-[35%] shrink-0 h-full relative self-stretch">
                        <Image src={`/images/explore-impact/3.png`} alt="vehsf" fill className="object-cover" />
                    </div>
                    <div className="w-full p-[20px] lg:px-[80px] lg:py-[90px] bg-[#FFBE18]">
                        <div className="font-semibold text-[24px] lg:text-[32px] relative line-clamp-2 lg:line-clamp-1">
                            Clean Water Initiative
                            <div className="absolute bottom-0 left-0 h-[2px] w-[77px] bg-black"></div>
                        </div>
                        <div className="hidden lg:block text-[14px] line-clamp-4 mt-[15px]">
                            Providing safe and clean drinking water to underserved communities.
                            Access to clean and safe drinking water is not just a necessity -
                            it’s basic human right. Yet, millions of people around the world
                            still face daily challenges due to water scarcity, contamination,
                            and poor sanitation. Our clean water initiative is designed to bring
                            hope, health, and dignity to underserved communities.
                        </div>
                    </div>
                </div>
                <div className="flex gap-[10px] lg:gap-[20px] h-[112px] lg:h-[331px]">
                    <div className="w-[35%] shrink-0 h-full relative self-stretch">
                        <Image src={`/images/explore-impact/4.jpg`} alt="vehsf" fill className="object-cover" />
                    </div>
                    <div className="w-full p-[20px] lg:px-[80px] lg:py-[90px] bg-[#00B44B] text-white">
                        <div className="font-semibold text-[24px] lg:text-[32px] relative line-clamp-2 lg:line-clamp-1">
                            Health & Nutrition Drive
                            <div className="absolute bottom-0 left-0 h-[2px] w-[77px] bg-[#FFBE18]"></div>
                        </div>
                        <div className="hidden lg:block text-[14px] line-clamp-4 mt-[15px]">
                            Organising free medical outreaches and food distribution campaigns.
                            Good health and proper nutrition form the foundation of a thriving community.
                            Yet, millions of children and families still suffer malnutrition, preventable
                            diseases, and limited access to quality healthcare. Our Health & Nutrition
                            Drive is dedicated to restoring hope, improving lives, and building healthier
                            futures.
                        </div>
                    </div>
                </div>
                <div className="flex flex-row-reverse gap-[10px] lg:gap-[20px] h-[112px] lg:h-[331px]">
                    <div className="w-[35%] shrink-0 h-full relative self-stretch">
                        <Image src={`/images/explore-impact/5.jpg`} alt="vehsf" fill className="object-cover" />
                    </div>
                    <div className="w-full p-[20px] lg:px-[80px] lg:py-[90px] bg-[#FFBE18]">
                        <div className="font-semibold text-[24px] lg:text-[32px] relative line-clamp-2 lg:line-clamp-1">
                            Youth Empowerment Programs
                            <div className="absolute bottom-0 left-0 h-[2px] w-[77px] bg-black"></div>
                        </div>
                        <div className="hidden lg:block text-[14px] line-clamp-4 mt-[15px]">
                            Training and equipping young people with skills for better future.
                            The youth are the heartbeat of every community and the leaders of
                            tomorrow. Yet, many young people are held back by poverty,
                            unemployment, lack of opportunities, and limited access to education.
                            Our Youth Empowerment Programs are designed to unlock their potential,
                            build confidence, and equip them with the tools they need to succeed.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}