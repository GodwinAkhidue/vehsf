import axios from "axios";
import { server_url } from "@/constants/server_url";

export default async function Get_All_Skills(
    setLoading: Function, toast: any, setSkills: Function
) {
    setLoading(true);

    try {
        await axios.get(`${server_url}/api/skills/get-all`)
            .then((res) => {
                if (res.data.success === true) {
                    setSkills(res.data.skills);
                }
            })
    } catch (error) {
        console.log(error);
        toast.error("Could not connect to server")
    }

    setLoading(false)
}