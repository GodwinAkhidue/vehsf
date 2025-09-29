import { server_url } from "@/constants/server_url";
import axios from "axios";

export default async function UpdatePassword
    (
        email: string,
        code: number,
        password: string,
        toast: any,
        setLoading: Function,
        router: any
    ) {
    setLoading(true);
    try {
        const result = await axios.post(`${server_url}/api/auth/updatePassword`, { email, code, password });
        if (result.data.success === true) {
            setLoading(false);
            toast.success("Password Changed");
            return router.push("/login");
        }
        setLoading(false);
        return toast.warn(result.data.message);
    } catch {
        setLoading(false);
        return toast.error("Could not connect with server");
    }
}