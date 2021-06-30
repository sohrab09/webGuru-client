import React, { useEffect, useState } from 'react';
import BlogSidebar from '../BlogSidebar/BlogSidebar/BlogSidebar'


const Blog = () => {

    const [blogs, setBlogs] = useState([])
    console.log("Blogs:", blogs)
    useEffect(() => {
        fetch("http://localhost:5000/blogs")
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
            })
    }, [])

    return (
        <section className="flex justify-center">
            <div className="w-11/12 grid md:grid-cols-3 mt-5">
                <div className="md:col-start-1 md:col-end-3">
                    {
                        blogs.map((blog) => (
                            <div>
                                <div className="h-64 sm:h-72 2xl:h-96 overflow-hidden flex justify-center items-center rounded-lg md:rounded-none mt-10">
                                    <img
                                        className="img-fluid"
                                        src={`data:image/png;base64,${blog.image.img}`}
                                        alt="" />
                                </div>
                                <div className="mt-5">
                                    <div className="flex justify-between">
                                        <a className="text-2xl font-bold text-blue-900" href="/">{blog.name}</a>
                                        <h1 className="text-gray-400">{blog.category}</h1>
                                    </div>
                                    <h1 className="mt-3 text-lg font-semibold text-red-500">{blog.postOwner}.</h1>
                                    <p className="mt-3">{blog.description}</p> <hr />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="mb-10 sm:mt-5 md:mt-10 bg-white md:ml-3 rounded-lg">
                    <BlogSidebar />
                </div>
            </div>
        </section>
    );
};

export default Blog;