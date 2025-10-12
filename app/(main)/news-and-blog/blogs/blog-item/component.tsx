import Image from "next/image";

export default function Blog_Item({ blog }: { blog: any }) {
  const formatDate = (date: any) => {
    const newDate = new Date(date);
    const format = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(newDate);
    return format;
  };

  return (
    <div className="w-full max-w-[550px] ">
      <div className="w-full h-[65vw] max-h-[380px] relative rounded-[10px] overflow-hidden">
        {blog?.image?.url && (
          <Image
            src={blog.image.url}
            alt="vehsf"
            fill
            className="object-cover"
          />
        )}
        <div className="absolute z-10 top-0 right-0 bg-[#00FF26] p-[10px] font-semibold text-[14px]">
          {blog?.created_at && formatDate(blog.created_at)}
        </div>
      </div>
      <div className="font-medium text-[20px] lg:text-[24px] mt-[10px] lg:mt-[20px]">
        {blog?.title}
      </div>
      <div className="mt-[10px] lg:mt-[15px]">{blog?.content}</div>
    </div>
  );
}
