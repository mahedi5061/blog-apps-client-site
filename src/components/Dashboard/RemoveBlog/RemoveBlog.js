import React from 'react';
import { useContext } from 'react';
import { userBlogs } from '../../../App';
import NavbarComponent from '../../Home/NavbarComponent/NavbarComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const RemoveBlog = () => {
    const [blogs,setBlogs]=useContext(userBlogs);
    const [deleteBlog,setDeleteBlog]=React.useState("")
    const deleteBlogItem=(id) => {
        fetch('https://peaceful-journey-60086.herokuapp.com/blogDelete/'+id,{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            setDeleteBlog("Your Item is Deleted Successfully!!")
        })
    }
    return (
        <div>
            <NavbarComponent></NavbarComponent>
             
            <h5 class='text-center pb-3 text-decoration-underline'>Total Blog: {blogs.length}</h5>
            <table className="table table-borderless tableData w-75 mx-auto">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col"><h5>Sr No</h5></th>
            <th className="text-secondary" scope="col"><h5>Blog Title</h5></th>
            <th className="text-secondary" scope="col"><h5>Images</h5></th>
            <th className="text-secondary" scope="col"><h5>Action</h5></th>
             
            </tr>
        </thead>
        <tbody>
            {
                blogs.map((blog, index) => 
                    
                <tr>
                 
                    <td><h5>{index + 1}</h5></td>
                    <td><h5>{blog.blogTitles}</h5></td>
                    <td><img src={blog.image} class="rounded" style={{height: "50px", height: "50px"}} alt="..."></img></td>
                    <td><h5><FontAwesomeIcon icon={faTrash} onClick={()=>{deleteBlogItem(blog._id)}} style={{cursor: "pointer", color:'red', fontSize:'25px'}}></FontAwesomeIcon></h5></td>
                     
                </tr>
                )
            }
        </tbody>
    </table>
        </div>
    );
};

export default RemoveBlog;