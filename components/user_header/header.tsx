"use client"
import User_Header_Desktop from "./desktop/header";
import User_Header_Mobile from "./mobile/header";
import { useUserContext } from "@/context/user/context";

export default function User_Header() {

    const { user } = useUserContext();

    return (
        <div className="">
            <User_Header_Desktop profile={user} />
            <User_Header_Mobile profile={user} />
        </div>
    );
}