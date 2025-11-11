import { IoClose } from "react-icons/io5";

export default function Selected_Skill_Item(
    {
        name,
        delete_skill
    }:
        {
            name: any,
            delete_skill: Function
        }
) {

    const delete_item = () => {
        delete_skill(name);
    }

    return (
        <div className="font-medium gap-[10px] text-[#495A47] rounded-full flex items-center bg-[#F4F3FFE5] px-[16px] py-[8px]">
            {name && name}
            <button
                onClick={() => delete_item()}
                className="text-[20px] cursor-pointer">
                <IoClose />
            </button>
        </div>
    );
}