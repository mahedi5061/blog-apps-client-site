// import React, { useContext } from "react";
// import { useParams } from "react-router-dom";
// import { userBlogs } from "../../../App";
// import Footer from "../Footer/Footer";
// import NavbarComponent from "../NavbarComponent/NavbarComponent";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
// import { Context } from "../../../context/Context";
// import axios from "axios";
// const BlogPages = () => {
//   const { id } = useParams();
//   const {user}=React.useContext(Context);
//   const [title,setTitle] =React.useState("");
//   const [desc,setDesc] = React.useState("");
//   const [update, setUpdate] = React.useState(false);
//   const [blogs, setBlogs] = useContext(userBlogs);
//   const blogsData = blogs.find((blog) => blog._id === id);
//   const PF = "http://localhost:5000/images/";
 
//   const handleDelete= async() => {
//     try {
//       await axios.delete(`/post/${blogsData._id}`, {data:{username:user.username}});
//       window.location.replace("/");
//     }
//     catch (err) {
//     console.log(err)
//     }
//   }
//   const handleUpdate = async ()=>{
//     try {
//       await axios.put(`/post/${blogsData._id}`, {
//         username:user.username,
//         title,
//         desc
//       });
//       window.location.replace("/posts/" + blogsData._id);
//     }
//     catch (err) {
//     console.log(err)
//     }
//   }
  
//   return (
//     <div>
//       <NavbarComponent></NavbarComponent>
//       <div class="mx-auto w-75">
//         <img
//           src={PF + blogsData?.photo}
//           class="card-img-top pt-2"
//           style={{ height: "400px", borderRadius: "20px"}}
//           alt="..."
//         />
//         <div class="card-body">
//          {update ? <div className="form-group">
//                     <input type="text" onChange={(e)=>{setTitle(e.target.value)}} className="form-control mt-3"  />
//                 </div>:
//          <h5 class="card-title">
//             {blogsData?.title}
//            {blogsData?.username===user.username &&  <span class="float-end">
//               <FontAwesomeIcon icon={faEdit} style={{color:"green",cursor: "pointer"}} onClick={() =>setUpdate(true)}/>{" "}
//               <FontAwesomeIcon icon={faTrashAlt} style={{color:"red", cursor: "pointer"}} onClick={handleDelete}/>
//             </span>}
//           </h5>
//          }

//           <hr></hr>
//           <p>{new Date(blogsData?.createdAt).toDateString()} <span class=" float-end"><span class="text-muted">Author:</span>  {blogsData?.username}</span></p>
          
//           {update ? 
//             <div className="form-group">
//                     <textarea   onChange={(e)=>{setDesc(e.target.value)}} type="text" className="form-control mt-3" cols="30" rows="5"/>
//                 </div>
//           :
//           <p onClick={() =>setUpdate(true)}>{blogsData?.desc}</p>
//           }
//         <div>
//         {update && <button onClick={handleUpdate} class="btn btn-primary mt-2 mb-5 float-end">update</button>}
//         </div>
//           <hr class="mt-5"></hr>
//           <p class="font-weight-bold text-black">
//             TAGS:<span class="text-muted"> creative, positive, tips</span>
//           </p>
//         </div>
//       </div>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default BlogPages;
