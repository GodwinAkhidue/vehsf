"use client";
import { useRouter } from "next/navigation";
import Dashboard_Navigation_Desktop from "./desktop";
import Dashboard_Navigation_Mobile from "./mobile";
import { toast } from "react-toastify";
import axios from "axios";
import { server_url } from "@/constants/server_url";

export default function Dashboard_Navigation() {
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.get(`${server_url}/api/auth/logout`).then(() => {
        router.push("/");
      });
    } catch {
      toast.error("Network Error");
    }
  };

  return (
    <div>
      <Dashboard_Navigation_Mobile logout={logout} />
      <Dashboard_Navigation_Desktop logout={logout} />
    </div>
  );
}
