// import React from 'react'

import { newBlogs } from "../data/data"
import BlogCard from "./BlogCard"

const BlogContainer = ({variant, number}:{variant:string,number?:number}) => {
  return (
    <div className="flex flex-col w-full">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-x-4  items-center justify-items-center ">
            {newBlogs.map((blog) => {
                return(
                    <BlogCard id={blog.id} image={blog.image} name={blog.title} key={blog.id} description={blog.summary} variant={variant}/>
                )
            }).slice(0, number ? number : newBlogs.length)}
        </div>
    </div>
  )
}

export default BlogContainer