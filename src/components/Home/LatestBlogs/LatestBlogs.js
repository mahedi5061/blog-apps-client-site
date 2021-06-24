import React, { useContext } from 'react';
import { userBlogs } from '../../../App';
import LatestBlog from '../LatestBlog/LatestBlog'

const LatestBlogs = () => {
    const [blogs,setBlogs]=useContext(userBlogs)
    console.log(blogs)
    return (
        <>
        <h5 className="d-flex justify-content-center mt-5 blog text-decoration-underline">LATEST BLOGS</h5> 
           <div className="d-flex justify-content-center  my-5 py-5">
            <div className="row w-75"> 
            {
                blogs.map((blog=><LatestBlog blog={blog}></LatestBlog>))
            }
            </div>
           </div> 
        </>
    );
};

export default LatestBlogs;