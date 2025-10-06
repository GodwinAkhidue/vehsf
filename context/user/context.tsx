"use client"
import { server_url } from "@/constants/server_url";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext<any>(undefined);

export function UserWrapper({ children }: { children: React.ReactNode }) {

    const [user, setUser] = useState<any>();

    const api = axios.create({
        baseURL: server_url,
        withCredentials: true
    })

    const fetchUser = async () => {
        await api.get(`/api/auth/validateSession`)
            .then((res) => {
                if (res.data.success === true) {
                    setUser(res.data.user);
                }
            })
    }

    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <UserContext.Provider value={{ user, fetchUser }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    const context = useContext(UserContext);
    return context;
}