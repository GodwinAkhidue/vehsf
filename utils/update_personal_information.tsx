import { server_url } from "@/constants/server_url";
import axios from "axios";

export default async function Update_Personal_Information(
    toast: any,
    setLoading: any,
    fetchUser: any,
    firstname: string,
    lastname: string
) {
    setLoading(true);

    const api = axios.create({ baseURL: server_url, withCredentials: true });

    const res =
        await api.post(
            `/api/user/update/personal-information`,
            {
                firstname, lastname
            }
        )

    if (!res.data.success || res.data.success !== true) {
        setLoading(false);
        return toast.warn("Could not update information");
    }

    setLoading(false);
    fetchUser();
    return toast.success("Updated!")
}