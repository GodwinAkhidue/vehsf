export default function Stats() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[15px]">
            <div className="flex flex-col items-center justify-center">
                <div className="text-[#2DD317] font-medium text-[40px] lg:text-[60px]">7000+</div>
                <div className="text-[14px] lg:text-[22px]">Families Impacted</div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="text-[#2DD317] font-medium text-[40px] lg:text-[60px]">1200+</div>
                <div className="text-[14px] lg:text-[22px]">Children Educated</div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="text-[#2DD317] font-medium text-[40px] lg:text-[60px]">500+</div>
                <div className="text-[14px] lg:text-[22px]">Volunteers Mobilized</div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="text-[#2DD317] font-medium text-[40px] lg:text-[60px]">50+</div>
                <div className="text-[14px] lg:text-[22px]">Healthcare Programs</div>
            </div>
        </div>
    );
}