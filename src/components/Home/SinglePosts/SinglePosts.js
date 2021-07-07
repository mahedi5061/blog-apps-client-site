import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../../context/Context";

const SinglePosts = () => {
  const [post, setPost] = React.useState({});
  const location = useLocation();
  const { user } = React.useContext(Context);
  const [update, setUpdate] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const path = location.pathname.split("/")[2];
  const PF = "http://localhost:5000/images/";
  console.log(location);
  React.useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/post/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/post/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };
  const handleUpdate = async () => {
    try {
      await axios.put(`/post/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <div class="mx-auto w-75">
        <img
          src={PF + post.photo}
          class="card-img-top pt-2"
          style={{ height: "50vh", borderRadius: "20px" }}
          alt="..."
        />
        <div class="card-body">
          {update ? (
            <div className="form-group">
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="form-control mt-3"
              />
            </div>
          ) : (
            <div class="row">
              <div class="col-md-11">
                <h5 class="card-title">{post.title}</h5>
              </div>
              <div class="col-md-1">
                {post.username === user.username && (
                  <span>
                    <FontAwesomeIcon
                      icon={faEdit}
                      style={{ color: "green", cursor: "pointer" }}
                      onClick={() => setUpdate(true)}
                    />{" "}
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={handleDelete}
                    />
                  </span>
                )}
              </div>
            </div>
          )}

          <hr></hr>

          <div class="row">
            <div class="col-md-10">
              <p>{new Date(post.createdAt).toDateString()}</p>
            </div>
            <div class="col-md-2">
              <p>
                <span class="text-muted">Author:</span> {post.username}
              </p>
            </div>
          </div>

          {update ? (
            <div className="form-group">
              <textarea
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
                type="text"
                className="form-control mt-3"
                cols="30"
                rows="5"
              />
            </div>
          ) : (
            <p>{post.desc}</p>
          )}
          <div>
            {update && (
              <button
                onClick={handleUpdate}
                class="btn btn-primary mt-2 mb-5 float-end"
              >
                update
              </button>
            )}
          </div>
          <hr class="mt-5"></hr>
          <p class="font-weight-bold text-black">
            TAGS:<span class="text-muted"> creative, positive, tips</span>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SinglePosts;
