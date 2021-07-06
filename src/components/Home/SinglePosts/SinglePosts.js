import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import NavbarComponent from '../NavbarComponent/NavbarComponent';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Context } from '../../../context/Context';


const SinglePosts = () => {
    const [post,setPost]=React.useState({});
    const location = useLocation();
    const {user}=React.useContext(Context);
    const [update, setUpdate] = React.useState(false);
    const [title,setTitle] =React.useState("");
    const [desc,setDesc] = React.useState("");
    const path=location.pathname.split("/")[2];
    const PF="http://localhost:5000/images/";
console.log(location)
    React.useEffect(() => {
        const getPost = async () => {
          const res = await axios.get("/post/" + path);
          setPost(res.data);
          setTitle(res.data.title);
          setDesc(res.data.desc);
        };
        getPost();
      }, [path]);

      const handleDelete= async() => {
        try {
          await axios.delete(`/post/${post._id}`, {
            data:{username:user.username}
          });
          window.location.replace("/");
        }
        catch (err) {
        console.log(err)
        }
      }
      const handleUpdate = async ()=>{
        try {
          await axios.put(`/post/${post._id}`, {
            username:user.username,
            title,
            desc
          });
          window.location.reload();
        }
        catch (err) {
        console.log(err)
        }
      }
      
    return (
      <div>
      <NavbarComponent></NavbarComponent>
      <div class="mx-auto w-75">
        <img
          src={PF + post.photo}
          class="card-img-top pt-2"
          style={{ height: "400px", borderRadius: "20px"}}
          alt="..."
        />
        <div class="card-body">
         {update ? <div className="form-group">
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control mt-3"  />
                </div>:
         <h5 class="card-title">
            {post.title}
           {post.username===user.username &&  <span class="float-end">
              <FontAwesomeIcon icon={faEdit} style={{color:"green",cursor: "pointer"}} onClick={() =>setUpdate(true)}/>{" "}
              <FontAwesomeIcon icon={faTrashAlt} style={{color:"red", cursor: "pointer"}} onClick={handleDelete}/>
            </span>}
          </h5>
         }

          <hr></hr>
          <p>{new Date(post.createdAt).toDateString()} <span class=" float-end"><span class="text-muted">Author:</span>  {post.username}</span></p>
          
          {update ? 
            <div className="form-group">
                    <textarea value={desc}  onChange={(e)=>{setDesc(e.target.value)}} type="text" className="form-control mt-3" cols="30" rows="5"/>
                </div>
          :
          <p onClick={() =>setUpdate(true)}>{post.desc}</p>
          }
        <div>
        {update && <button onClick={handleUpdate} class="btn btn-primary mt-2 mb-5 float-end">update</button>}
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