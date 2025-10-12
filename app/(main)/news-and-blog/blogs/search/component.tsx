import Image from "next/image";
import { FiSearch } from "react-icons/fi";

export default function Search({ blogs }: { blogs: any }) {
  return (
    <div className="w-full max-w-[480px]">
      <div className="flex border-2 border-[#00FF26] w-full max-w-[300px] h-[42px]">
        <input
          className="w-full h-full px-[10px] outline-none"
          placeholder="Enter Keyword"
        />
        <div className="cursor-pointer w-[45px] h-full shrink-0 bg-[#00FF26] text-white flex items-center justify-center text-[20px]">
          <FiSearch />
        </div>
      </div>
      <div className="font-medium text-[22px] mt-[30px]">Latest Post</div>
      <div className="mt-[20px] space-y-[15px] w-full">
        {blogs &&
          blogs.length > 0 &&
          blogs
            .slice(0, 3)
            .map((i: any, index: any) => <Post_Item key={index} blog={i} />)}
      </div>
    </div>
  );
}

function Post_Item({ blog }: { blog: any }) {
  return (
    <div className="flex items-center gap-[15px] w-full">
      <div className="w-[45%] max-w-[170px] h-[120px] rounded-[10px] overflow-hidden relative shrink-0">
        {blog?.image?.url && (
          <Image
            src={blog.image.url}
            alt="vehsf"
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="text-[14px] font-medium">{blog?.title || ""}</div>
    </div>
  );
}
