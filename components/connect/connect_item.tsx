import Image from "next/image";
import { FaPhone } from "react-icons/fa";

export default function Connect_Item({ user }: { user: any }) {
  return (
    <div className="flex items-center gap-[50px] bg-[#F5F5F5] rounded-[5px] py-[12px] px-[15px]">
      <div className="flex items-center gap-[15px]">
        <div className="w-[48px] h-[48px] rounded-full overflow-hidden relative shrink-0">
          {user?.profile_picture?.url && (
            <Image
              src={user.profile_picture.url}
              alt={user.firstname}
              fill
              className="object-cover"
            />
          )}
        </div>
        <div className="">
          <div className="font-semibold">{`${user?.firstname || ""} ${
            user?.lastname || ""
          }`}</div>
          <div className="mt-[5px] text-[#707991] text-[14px]">
            {user?.role || ""}
          </div>
        </div>
      </div>
      {user?.phone && (
        <a href={`tel:${user?.phone?.code || ""}${user?.phone.number || ""}`}>
          <FaPhone className="text-[#026935]" />
        </a>
      )}
    </div>
  );
}
