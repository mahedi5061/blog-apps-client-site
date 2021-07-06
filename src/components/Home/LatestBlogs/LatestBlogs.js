import React, { useContext } from "react";
import { userBlogs } from "../../../App";
import LatestBlog from "../LatestBlog/LatestBlog";
import Category from "../../Shared/Category/Category";

const LatestBlogs = () => {
  const [blogs, setBlogs] = useContext(userBlogs);
   
  return (
    <>
      <h5 className="d-flex justify-content-center mt-5 blog text-decoration-underline">
        OUR BLOGS
      </h5>
      <div class="row">
        <div class="col-md-8">
          <div className="d-flex justify-content-center  my-5 py-5">
            <div className="row w-75">
              {blogs.map((blog) => (
                <LatestBlog blog={blog}></LatestBlog>
              ))}
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <Category></Category>
        </div>
      </div>
    </>
  );
};

export default LatestBlogs;
