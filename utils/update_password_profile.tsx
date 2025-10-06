import { server_url } from "@/constants/server_url";
import axios from "axios";

export default async function Update_Password_Profile(
    toast: any,
    setLoading: any,
    oldPassword: string,
    newPassword: string
) {
    setLoading(true);

    const api = axios.create({ baseURL: server_url, withCredentials: true });

    try {

        const res =
            await api.post(
                `/api/user/update/password`,
                {
                    oldPassword, newPassword
                }
            )

        if (res.data.success === true) {
            setLoading(false);
            return toast.success("Updated!")
        }

        setLoading(false);
        return toast.warn(res.data.message)

    } catch {
        setLoading(false);
        return toast.error("Network Error!")
    }
}