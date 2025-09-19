import axios from "axios";
import { server_url } from "@/constants/server_url";

export default async function Login(
    email: any,
    password: any,
    toast: any,
    router: any,
    setLoading: any
) {

    setLoading(true);

    const api = axios.create({
        baseURL: server_url,
        withCredentials: true
    });

    try {

        const result = await api.post(`/api/auth/login`, { email, password });
        if (result.data.success === true) {
            toast.success("Login Successful");
            setLoading(false);
            return router.push("/dashboard");
        }
        setLoading(false);
        return toast.warn(result.data.message)

    } catch {
        setLoading(false);
        return toast.error("Could not connect to server")
    }
}