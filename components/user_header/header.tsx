"use client"
import { useEffect, useState } from "react";
import User_Header_Desktop from "./desktop/header";
import User_Header_Mobile from "./mobile/header";
import axios from "axios";
import { server_url } from "@/constants/server_url";

export default function User_Header() {

    const [profile, setProfile] = useState<any>();

    const get_profile_card_data = async () => {
        const api = axios.create({
            baseURL: server_url,
            withCredentials: true
        });

        try {
            const res = await api.get(`/api/user/profile-card`);
            if (res.data.success === true) {
                setProfile(res.data.profileCard)
            }
        } catch { }
    }

    useEffect(() => {
        get_profile_card_data()
    }, [])

    return (
        <div className="">
            <User_Header_Desktop profile={profile} />
            <User_Header_Mobile profile={profile} />
        </div>
    );
}