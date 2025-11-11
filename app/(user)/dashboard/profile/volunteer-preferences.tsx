"use client";
import { CiClock2 } from "react-icons/ci";
import Skills from "./skills/component";
import { useUserContext } from "@/context/user/context";
import { useEffect, useState } from "react";
import axios from "axios";
import { server_url } from "@/constants/server_url";
import { toast } from "react-toastify";

export default function Volunteer_Preferences() {
  const { user, fetchUser } = useUserContext();
  const [selectedSkills, setSelectedSkills] = useState<any[]>([]);
  const [availability, setAvailability] = useState<any>();
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (user) {
      setSelectedSkills(user?.skills || []);
      setAvailability(user?.availability || "Weekdays");
    }
  }, [user]);

  const update = async () => {
    setSaving(true);
    await axios
      .create({ withCredentials: true })
      .post(`${server_url}/api/user/update/volunteer-preferences`, {
        skills: selectedSkills,
        availability,
      })
      .then((res) => {
        if (res.data.success === true) {
          toast.success("Updated");
          fetchUser();
        } else {
          toast.warn(res.data.message);
        }
      })
      .catch(() => {
        toast.error("Network Error");
      })
      .finally(() => setSaving(false));
  };

  return (
    <div className="mt-[50px]">
      <div className="text-[#121212] text-[24px] lg:text-[32px] font-semibold">
        Volunteer Preferences
      </div>

      <div className="font-medium text-[14px] lg:text-base mt-[40px]">
        Volunteer Interest
      </div>
      <div className="text-[12px] mt-[10px]">
        Search and select the areas where you love to offer your time, skills,
        and support as a volunteer
      </div>
      <Skills
        selectedSkills={selectedSkills}
        setSelectedSkills={setSelectedSkills}
      />

      <div className="font-medium text-[14px] lg:text-base mt-[40px]">
        Availability
      </div>
      <div className="text-[12px] mt-[10px]">
        Specify your preferred volunteering schedule so we can match you with
        opportunities that fit your availability
      </div>

      <div className="mt-[20px] lg:mt-[30px]">
        <div className="border border-[#00000080] rounded-[7px] px-[25px] py-[15px] flex items-center w-full gap-[10px] mt-[10px]">
          <CiClock2 className="text-[#00000080] text-[18px] lg:text-[24px]" />
          <select
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="w-full h-full outline-none"
          >
            <option value="Weekdays">Weekdays</option>
            <option value="Weekends">Weekends</option>
          </select>
        </div>
      </div>

      <button
        disabled={saving}
        onClick={() => update()}
        className={`cursor-pointer block text-white ${
          saving ? "bg-gray-500" : "bg-[#026935]"
        } px-[30px] py-[15px] rounded-[5px] w-max mt-[20px] justify-self-end`}
      >
        {saving ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
}
