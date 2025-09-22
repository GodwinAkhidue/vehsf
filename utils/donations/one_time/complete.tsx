import { server_url } from "@/constants/server_url";
import axios from "axios";

export default async function Complete_One_Time_Donation(
    toast: any, reference: any, setLoading: any, router: any
) {
    setLoading(true);
    try {
        const response =
            await axios.post(
                `${server_url}/api/donations/paystack/oneTime/complete`,
                { reference }
            )
        setLoading(false);
        if (response.data.success === true) {
            toast.success("Donation Received, Thank you for your donation");
            return setTimeout(() => {
                router.push("/")
            }, 3000);
        }
        return toast.warn(response.data.message)
    } catch {
        setLoading(false);
        return toast.error("Network Error");
    }
}