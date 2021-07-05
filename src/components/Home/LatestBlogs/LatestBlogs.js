import React, { useContext } from "react";
import { userBlogs } from "../../../App";
import LatestBlog from "../LatestBlog/LatestBlog";
import BlogImage from "../../../Images/blog-17-770x510.jpg";

const LatestBlogs = () => {
  const [blogs, setBlogs] = useContext(userBlogs);
  console.log(blogs);
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
          <div class="card about-section m-5 p-5">
            <h3 class="font-sans p-2 text-center">About me</h3>
            <img
              class="card-img-top mx-auto"
              src={BlogImage}
              style={{ width: "20rem" }}
              alt="Card image cap"
            />
            <div class="card-body ">
              <p class="card-text text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <hr></hr>
              <h5 class="card-title text-center">Category</h5>
              <hr></hr>
              <div class="row">
                <div class="col-md-6 text-center font-safari">
                  <h6>Life</h6>
                  <h6>style</h6>
                  <h6>Tech</h6>
                </div>
                <div class="col-md-6 text-center">
                  <h6>Music</h6>
                  <h6>Sports</h6>
                  <h6>Cinema</h6>
                </div>
              </div>
              <hr></hr>
              <h5 class="card-title text-center">Follow us</h5>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestBlogs;
