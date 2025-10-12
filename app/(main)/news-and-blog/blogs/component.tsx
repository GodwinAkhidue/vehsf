"use client";
import { useEffect, useState } from "react";
import Blog_Item from "./blog-item/component";
import Search from "./search/component";
import axios from "axios";
import { server_url } from "@/constants/server_url";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const result = await axios.get(
        `${server_url}/api/news-and-blogs/get-all`
      );

      const articles = result.data.articles;
      setBlogs(articles);
    } catch {}
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="mt-[60px] lg:mt-[80px] flex flex-col items-center lg:items-start lg:flex-row gap-[60px] lg:justify-between w-full">
      <div className="gap-[20px] lg:gap-[40px] flex flex-col items-center justify-center ">
        {blogs &&
          blogs.length > 0 &&
          blogs.map((i: any, index: any) => <Blog_Item key={index} blog={i} />)}
      </div>
      <Search blogs={blogs} />
    </div>
  );
}
