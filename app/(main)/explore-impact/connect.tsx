"use client";
import Connect_Item from "@/components/connect/connect_item";
import Location_Input from "@/components/form/location-input";
import { server_url } from "@/constants/server_url";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Connect() {
  const [state, setState] = React.useState("");
  const [lga, setLga] = React.useState("");
  const [connections, setConnections] = useState([]);
  const [searching, setSearching] = useState(false);

  const fetchConnections = async () => {
    setSearching(true);
    try {
      const result = await axios.post(`${server_url}/api/connect/search`, {
        state,
        lga,
      });

      if (result.data.message) {
        return toast.warn(result.data.message);
      }

      const users = result.data.users;
      setConnections(users);
    } catch {
      toast.error("Network Error");
    } finally {
      setSearching(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="font-semibold text-center text-[24px] lg:text-[36px]">
        Connect with Staff / Volunteers
      </div>
      <div className="w-full max-w-[350px]">
        <Location_Input
          state={state}
          setState={setState}
          lga={lga}
          setLga={setLga}
          heading=""
        />
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        {connections &&
          connections.length > 0 ?
          connections.map((i: any, index: any) => (
            <Connect_Item user={i} key={index} />
          )) : <div className="">No Items Found</div>
        }
      </div>
      <button 
        disabled={searching}
        onClick={fetchConnections}
        className="cursor-pointer w-full max-w-[350px] rounded-[10px] py-[10px] text-white bg-[#026935] flex items-center justify-center mt-[30px]"
      >
        {searching ? "Searching...":"Search"}
      </button>
    </div>
  );
}
