import React from 'react';
import { Link } from 'react-router-dom';

const LatestBlog = ({blog}) => {
    const {title,image,desc,createdAt,_id,username} = blog;
    
    return (
       
       <div class="mx-auto" style={{width: "25rem", cursor: "pointer"}}>
       <Link to={`/blogPage/${_id}`} class="text-decoration-none text-black hover:text-black"> 
        <img src={image} class="card-img-top pt-2" style={{height: "220px"}} alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <hr></hr>
          <p>{new Date(createdAt).toDateString()}</p>
          <p><span class="text-muted">Author:</span> {username}</p>
          <p>{desc}...</p>
           
        </div>
        </Link>
      </div>
       
    );
};

export default LatestBlog;