import { server_url } from "@/constants/server_url";
import axios from "axios";

export default async function Update_User_Profile_Picture(
    formData: any,
    toast: any,
    setLoading: any,
    fetchUser: any,
    oldImageId: any
) {
    setLoading(true);

    const api = axios.create({ baseURL: server_url, withCredentials: true });

    if (!formData) {
        setLoading(false);
        return toast.warn("No image found")
    }

    const res =
        await api.post(
            `/api/cloudinary/upload/form-data`,
            formData
        )

    if (!res.data.success || res.data.success !== true) {
        setLoading(false);
        return toast.warn("Could not upload image");
    }

    const profile_picture = res.data.file;

    const res2 =
        await api.post(
            `/api/user/update/profile-picture`,
            {
                profilepicture: profile_picture
            }
        )

    if (!res2.data.success || res2.data.success !== true) {
        setLoading(false);
        return toast.warn("Could not update image");
    }

    if (oldImageId) {
        await api.delete(`/api/cloudinary/delete/public_id/${encodeURIComponent(oldImageId)}`);
    }

    setLoading(false);
    fetchUser();
    return toast.success("Updated!")
}