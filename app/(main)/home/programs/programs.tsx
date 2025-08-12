import Program_Item from "./program-item";


export default function Programs() {

    const programs = [
        {
            video: `/images/programs/1.jpg`,
            header: `Humanitarian Assistance
                    (Food, Shelter, Healthcare)`,
            body: `We respond to urgent needs by providing food, clean water, shelter, and healthcare 
            to vulnerable individuals affected by crises such as conflict, natural disasters, and displacement. 
            Our goal is to bring hope and restore dignity in times of distress.`
        },
        {
            video: `/images/programs/2.jpg`,
            header: `Economic Empowerment
                    (Skills Training, 
                    Microfinance, etc)`,
            body: `We equip individuals—especially women and youth—with practical skills and microfinance support to help them start small businesses, gain employment, and break free from poverty. Our programs foster self-reliance and long-term financial stability.`
        },
        {
            video: `/images/programs/3.jpg`,
            header: `Education
                    (Scholarship, Literacy 
                    Programs)`,
            body: `Education is a powerful tool for change. Through scholarships, literacy programs, and school support initiatives, we help children and adults access quality education, empowering them with the knowledge and opportunities to shape their future.`
        },
        {
            video: `/images/programs/4.jpg`,
            header: `Health
                    (Healthcare Services, 
                    Disease Prevention)`,
            body: `We provide access to essential healthcare services, health education, and disease prevention programs. Our focus includes maternal and child health, immunization, hygiene awareness, and mental health support to build healthier communities.`
        },
        {
            video: `/images/programs/5.jpg`,
            header: `Human Rights
                    (Advocacy, Awareness)`,
            body: `We stand for justice and dignity. Our advocacy efforts raise awareness on issues like child protection, gender-based violence, and the rights of the marginalized. We educate communities and influence policies to promote equality and human rights.`
        },
    ];

    return (
        <div className="w-full flex flex-col items-center justify-center px-[15px] lg:px-[50px]">
            <div className="font-semibold text-[24px] text-[#121212] lg:text-[36px] poppins">PROGRAMS</div>
            <div className="mt-[10px] w-full max-w-[1050px] p-[20px] lg:p-[60px] border border-[#00DD6D] bg-white border-dashed rounded-[20px] lg:rounded-[30px] flex flex-col gap-[50px] lg:gap-[100px]">
                {
                    programs.map((i, index) => (
                        <Program_Item key={index} i={i} reverse={index % 2 === 0 ? false : true} />
                    ))
                }
            </div>
        </div>
    );
}