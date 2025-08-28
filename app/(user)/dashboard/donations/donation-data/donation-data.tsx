import Navigation from "../navigation/navigation";

export default function Donation_Data() {

    const data = [
        {
            name: "Okon Patrick",
            donation_type: "Monthly",
            donation_purpose: "Food Distribution",
            amount: 300,
            date: "20/08/2025",
            status: "Approved"
        },
        {
            name: "Tosin Akin-Ade",
            donation_type: "Monthly",
            donation_purpose: "Tree Planting",
            amount: 500,
            date: "14/08/2025",
            status: "Pending"
        },
        {
            name: "Tosin Akin-Ade",
            donation_type: "Monthly",
            donation_purpose: "Tree Planting",
            amount: 500,
            date: "12/08/2025",
            status: "Cancelled"
        },
        {
            name: "Tosin Akin-Ade",
            donation_type: "Monthly",
            donation_purpose: "Tree Planting",
            amount: 500,
            date: "12/08/2025",
            status: "Cancelled"
        },
        {
            name: "Tosin Akin-Ade",
            donation_type: "Monthly",
            donation_purpose: "Tree Planting",
            amount: 500,
            date: "12/08/2025",
            status: "Cancelled"
        },
        {
            name: "Tosin Akin-Ade",
            donation_type: "Monthly",
            donation_purpose: "Tree Planting",
            amount: 500,
            date: "12/08/2025",
            status: "Cancelled"
        },
        {
            name: "Tosin Akin-Ade",
            donation_type: "Monthly",
            donation_purpose: "Tree Planting",
            amount: 500,
            date: "12/08/2025",
            status: "Cancelled"
        },
        {
            name: "Tosin Akin-Ade",
            donation_type: "Monthly",
            donation_purpose: "Tree Planting",
            amount: 500,
            date: "12/08/2025",
            status: "Cancelled"
        },
        {
            name: "Tosin Akin-Ade",
            donation_type: "Monthly",
            donation_purpose: "Tree Planting",
            amount: 500,
            date: "12/08/2025",
            status: "Cancelled"
        },
        {
            name: "Tosin Akin-Ade",
            donation_type: "Monthly",
            donation_purpose: "Tree Planting",
            amount: 500,
            date: "12/08/2025",
            status: "Cancelled"
        },
    ];

    return (
        <div className="w-full">
            <div className="w-full poppins">

                <div className="border border-[#E6EDFF] rounded-[5px] p-[10px] overflow-x-auto w-full">
                    <div className="font-semibold">Donation Data</div>
                    <table className="mt-[20px] lg:w-full">
                        <thead className="text-[14px] font-semibold">
                            <tr className="">
                                <th className="p-[10px] whitespace-nowrap text-left">S/N</th>
                                <th className="p-[10px] whitespace-nowrap text-left">Name</th>
                                <th className="p-[10px] whitespace-nowrap text-left">Donation Type</th>
                                <th className="p-[10px] whitespace-nowrap text-left">Donation Purpose</th>
                                <th className="p-[10px] whitespace-nowrap text-left">Amount</th>
                                <th className="p-[10px] whitespace-nowrap text-left">Date</th>
                                <th className="p-[10px] whitespace-nowrap text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((i, index) => (
                                    <tr key={index} className="text-[14px]">
                                        <td className="p-[10px] whitespace-nowrap">{index + 1}</td>
                                        <td className="p-[10px] whitespace-nowrap">{i.name}</td>
                                        <td className="p-[10px] whitespace-nowrap">{i.donation_type}</td>
                                        <td className="p-[10px] whitespace-nowrap">{i.donation_purpose}</td>
                                        <td className="p-[10px] whitespace-nowrap">${i.amount}</td>
                                        <td className="p-[10px] whitespace-nowrap">{i.date}</td>
                                        <td className="p-[10px] whitespace-nowrap">{i.status}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <Navigation />

            </div>
        </div>
    );
}