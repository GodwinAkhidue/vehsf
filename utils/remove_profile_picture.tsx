import { server_url } from "@/constants/server_url";
import axios from "axios";

export default async function Remove_Profile_Picture(
    toast: any,
    setLoading: any,
    fetchUser: any,
    id: any
) {
    setLoading(true);

    const api = axios.create({ baseURL: server_url, withCredentials: true });

    const res2 =
        await api.post(
            `/api/user/update/profile-picture`,
            {
                profilepicture: ""
            }
        )

    if (!res2.data.success || res2.data.success !== true) {
        setLoading(false);
        return toast.warn("Could not remove image");
    }

    await api.delete(`/api/cloudinary/delete/public_id/${encodeURIComponent(id)}`);

    setLoading(false);
    fetchUser();
    return toast.success("Removed!")
}