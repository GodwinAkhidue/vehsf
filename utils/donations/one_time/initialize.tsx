import { server_url } from "@/constants/server_url";
import axios from "axios";

export default async function Initialize_One_Time_Donation(
    toast: any, data: any, setLoading: any, router: any
) {
    setLoading(true);
    try {
        const response =
            await axios.post(
                `${server_url}/api/donations/paystack/oneTime/initialize`,
                { data }
            )
        setLoading(false);
        if (response.data.success === true) {
            return router.push(response.data.data.url)
        }
        return toast.warn(response.data.message)
    } catch {
        setLoading(false);
        return toast.error("Network Error");
    }
}