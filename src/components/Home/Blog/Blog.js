import React from 'react';

const Blog = ({fkData}) => {
    const {title,pic,description,date} = fkData
    return (
        <div class="mx-auto" style={{width: "25rem", cursor: "pointer"}}>
        <img src={pic} class="card-img-top pt-2" style={{height: "200px"}} alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <hr></hr>
          <p>{date}</p>
          <p>{description}...</p>
           
        </div>
      </div>
    );
};

export default Blog;