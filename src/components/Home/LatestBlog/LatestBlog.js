import React from 'react';
import { Link } from 'react-router-dom';

const LatestBlog = ({blog}) => {
    const {blogTitles,image,description,blogDate} = blog
    return (
       <>
       <div class="mx-auto" style={{width: "25rem", cursor: "pointer"}}>
       <Link to='/blogPage' class="text-decoration-none text-black hover:text-black"> 
        <img src={image} class="card-img-top pt-2" style={{height: "220px"}} alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{blogTitles}</h5><br></br>
          <hr></hr>
          <p>{blogDate}</p>
          <p>{description}...</p>
           
        </div>
        </Link>
      </div>
       
       </>
    );
};

export default LatestBlog;