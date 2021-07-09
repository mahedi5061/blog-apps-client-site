import React from 'react';
import { Link } from 'react-router-dom';

const LatestBlog = ({blog}) => {
    const {title,desc,createdAt,_id,username,photo} = blog;
    const PF="http://localhost:5000/images/"
    
    return (
       
       <div class="mx-auto" style={{width: "27rem", cursor: "pointer"}}>
       <Link to={`/posts/${_id}`} class="text-decoration-none text-black hover:text-black"> 
        <img src={PF + photo} class="card-img-top pt-2" style={{height: "270px",borderRadius: "20px"}} alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <hr></hr>
          <div class="row">
            <div class="col-md-6">
              <p>{new Date(createdAt).toDateString()}</p>
            </div>
            <div class="col-md-6">
              <p>
                <span class="text-muted">Author:</span> {username}
              </p>
            </div>
          </div>
          <p>{desc}...</p>
           
        </div>
        </Link>
      </div>
       
    );
};

export default LatestBlog;