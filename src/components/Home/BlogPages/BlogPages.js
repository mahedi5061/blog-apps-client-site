import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { userBlogs } from "../../../App";
import Footer from "../Footer/Footer";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const BlogPages = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useContext(userBlogs);
  const blogsData = blogs.find((blog) => blog._id === id);
  const PF = "http://localhost:5000/images/";
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <div class="mx-auto w-75">
        <img
          src={PF + blogsData?.photo}
          class="card-img-top pt-2"
          style={{ height: "400px" }}
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">
            {blogsData?.title}
            <span class="float-end">
              <FontAwesomeIcon icon={faEdit} style={{color:"green"}}/>{" "}
              <FontAwesomeIcon icon={faTrashAlt} style={{color:"red"}}/>
            </span>
          </h5>

          <hr></hr>
          <p>{new Date(blogsData?.createdAt).toDateString()} <span class=" float-end"><span class="text-muted">Author:</span>  {blogsData?.username}</span></p>
          <p>
            
          </p>
          <p>{blogsData?.desc}...</p>
          <hr></hr>
          <p class="font-weight-bold text-black">
            TAGS:<span class="text-muted"> creative, positive, tips</span>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BlogPages;
