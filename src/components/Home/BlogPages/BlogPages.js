import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { userBlogs } from '../../../App';
import Footer from '../Footer/Footer';
import NavbarComponent from '../NavbarComponent/NavbarComponent';

const BlogPages = () => {
    const {id}=useParams();
     const [blogs,setBlogs]=useContext(userBlogs)
     const blogsData=blogs.find(blog =>blog._id === id)
    return (
        <div>
        <NavbarComponent></NavbarComponent>
            <div class="mx-auto" style={{width: "45rem", cursor: "pointer"}}>
        
        {/* <img src="" class="card-img-top pt-2" style={{height: "400px"}} alt="..."/> */}
        <div class="card-body">
          <h5 class="card-title">{blogsData?.title}</h5>
          <hr></hr>
          <p>{new Date(blogsData?.createdAt).toDateString()}</p>
          <p><span class="text-muted">Author:</span> {blogsData?.username}</p>
          <p>{blogsData?.desc}...</p>
           <hr></hr>
             <p class='font-weight-bold text-black'>TAGS:<span class='text-muted'> creative, positive, tips</span></p>
        </div>
        
      </div>
      <Footer></Footer>
        </div>
    );
};

export default BlogPages;