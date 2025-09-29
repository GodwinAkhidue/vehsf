import { server_url } from "@/constants/server_url";
import axios from "axios";

export default async function SendVerificationCode
    (
        email: string,
        toast: any,
        startTimer: Function,
        setLoading: Function
    ) {

    setLoading(true);
    try {
        const result = await axios.post(`${server_url}/api/auth/verificationCode`, { email });
        if (result.data.success === true) {
            setLoading(false);
            startTimer();
            return toast.success("Email Sent");
        }
        setLoading(false);
        return toast.warn(result.data.message);
    } catch {
        setLoading(false);
        return toast.error("Could not connect with server");
    }

}