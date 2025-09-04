import Blog_Item from "./blog-item/component";
import Search from "./search/component";

export default function Blogs() {
    return (
        <div className="mt-[60px] lg:mt-[80px] flex flex-col items-center lg:items-start lg:flex-row gap-[60px] lg:justify-between w-full">
            <div className="gap-[20px] lg:gap-[40px] flex flex-col items-center justify-center ">
                <Blog_Item />
                <Blog_Item />
            </div>
            <Search />
        </div>
    );
}