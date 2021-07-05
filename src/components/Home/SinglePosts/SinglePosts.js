import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import NavbarComponent from '../NavbarComponent/NavbarComponent';
import Footer from '../Footer/Footer';

const SinglePosts = () => {
    const [post,setPost]=React.useState({});
    const location = useLocation();
    const path=location.pathname.split("/")[2];

    React.useEffect(() => {
        const getPost = async () => {
          const res = await axios.get("/post/" + path);
          setPost(res.data)
        };
        getPost();
      }, [path]);
      console.log(post)
    return (
        <div>
        <NavbarComponent></NavbarComponent>
            <div class="mx-auto" style={{width: "45rem", cursor: "pointer"}}>
        
        {/* <img src="" class="card-img-top pt-2" style={{height: "400px"}} alt="..."/> */}
        <div class="card-body">
          <h5 class="card-title">{post.title}</h5>
          <hr></hr>
          <p>{new Date(post.createdAt).toDateString()}</p>
          <p><span class="text-muted">Author:</span> {post.username}</p>
          <p>{post.desc}...</p>
           <hr></hr>
             <p class='font-weight-bold text-black'>TAGS:<span class='text-muted'> creative, positive, tips</span></p>
        </div>
        
      </div>
      <Footer></Footer>
        </div>
    );
};

export default SinglePosts;