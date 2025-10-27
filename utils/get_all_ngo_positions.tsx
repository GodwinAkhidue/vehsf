import axios from "axios";
import { server_url } from "@/constants/server_url";

export default async function Get_All_Ngo_Positions(
    setLoading: Function, toast: any, setPositions: Function
) {
    setLoading(true);

    try {
        await axios.get(`${server_url}/api/ngo-positions/get-all`)
            .then((res) => {
                if (res.data.success === true) {
                    setPositions(res.data.positions);
                }
            })
    } catch (error) {
        console.log(error);
        toast.error("Could not connect to server")
    }

    setLoading(false)
}