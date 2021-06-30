import React, { useState } from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faTimes, } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {

    
    const [blogPost, setBlogPost] = useState({});
    console.log("Blog:", blogPost)

    const [image, setImage] = useState(null);

    const handleBlur = (e) => {
        const newBlogPost = { ...blogPost };
        newBlogPost[e.target.name] = e.target.value;
        setBlogPost(newBlogPost);
    }

    const handleImage = (e) => {
        const newImage = e.target.files[0];
        setImage(newImage);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', blogPost.name);
        formData.append('postOwner', blogPost.postOwner);
        formData.append('category', blogPost.category);
        formData.append('description', blogPost.description);
        fetch('https://guarded-island-30446.herokuapp.com/admin/post-blog', {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log(data);
                    alert("Blog added successfully")
                }
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="md:ml-64">
            <div className="md:py-20 md:bg-gray-200 flex items-center justify-center">
                <div className="mt-10 md:mt-0 rounded-xl py-10 md:w-3/5 bg-gray-100 flex flex-col items-center justify-evenly">
                    <p>Post A Blog</p>
                    <form className="w-full flex items-center flex-col mt-5 md:mt-10" onSubmit={handleSubmit}>
                        <input 
                        onBlur={handleBlur}
                        className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-b-2 border-black" 
                        type="text" 
                        name="name"
                        placeholder="Blog Title"
                        required=""
                        /> 
                        <br />
                        <input 
                        onBlur={handleBlur}
                        className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-b-2 border-black" 
                        type="text" 
                        name="postOwner" 
                        placeholder="Post Owner"
                        required=""
                        /> 
                        <br />
                        <textarea 
                        onBlur={handleBlur}
                        className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-b-2 border-black" 
                        type="text" 
                        name="description" 
                        placeholder="Blog Description"
                        required=""
                        /> 
                        <br />
                        <input 
                        onBlur={handleBlur}
                        className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-b-2 border-black" 
                        type="text" 
                        name="category" 
                        placeholder="Category"
                        required=""
                        /> 
                        <br /> <br />
                        <div className="flex flex-wrap items-center w-10/12 md:w-4/6">
                            <label
                                className="fileUpload rounded-lg bg-black text-white px-3 py-2" for="file">
                                <span><FontAwesomeIcon icon={faCloud} /></span>
                                <span className="ml-2">Upload Image</span>
                            </label>
                            <p className="mt-3 md:mt-0 md:ml-3 text-sm font-medium">( h:290px <FontAwesomeIcon icon={faTimes} /> w:770px )</p>
                        </div>
                        <input onChange={handleImage}
                            className="w-10/12 md:w-4/6 mt-3 ml-2" type="file" name="image"/> <br />
                        <input
                            id="adminFile"
                            className="w-4/6 bg-black rounded-lg py-2 text-white text-lg font-bold submitBtn" type="submit"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Blog;