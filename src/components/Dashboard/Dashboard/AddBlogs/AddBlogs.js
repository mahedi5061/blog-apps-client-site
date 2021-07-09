import React from 'react';
import NavbarComponent from '../../../Home/NavbarComponent/NavbarComponent';
import axios from 'axios';
import { Context } from '../../../../context/Context';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPlusCircle } from "@fortawesome/free-solid-svg-icons";
 import './AddBlogs.css'

const AddBlogs = () => {
    const [title, setTitle] = React.useState("");
    const [desc, setDesc] = React.useState("");
    const [file,setFile]=React.useState(null);
    const {user}=React.useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
          username:user.username,
          title,
          desc,
        };
        if (file) {
          const data =new FormData();
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("file", file);
          newPost.photo = filename;
          try {
            await axios.post("/upload", data);
          } catch (err) {}
        }
        try {
          const res = await axios.post("/post", newPost);
          window.location.replace("/posts/" + res.data._id);
        } catch (err) {}
      };



    // const handleBlur = e => {
    //     const newInfo = { ...info };
    //     newInfo[e.target.name] = e.target.value;
    //     setInfo(newInfo);
       
    // }
    
    // const imageUpload= (e)=>{
    //     setFile(e.target.files[0])
    // }
    // //ImageBB Image upload system...
    // // const imageUpload=event => {
    // //     const imageData=new FormData();
    // //     imageData.set('key','d30ee21879b0a937f8035c54640a59a9');
    // //     imageData.append('image',event.target.files[0]);
    // //     axios.post('https://api.imgbb.com/1/upload',imageData)
    // //       .then(function (res) {
    // //         setImageUrl(res.data.data.display_url);
    // //       })
    // //       .catch(function (error) {
    // //         console.log(error);
    // //       });
    // // }
    // const handleSubmit = async() => {
    //     // const newPost={
    //     //     username:info.username,
    //     //     title:info.title,
    //     //     desc:info.desc
    //     // };
    //     const formData = new FormData();
    //     formData.append('username',info.username);
    //     formData.append('title',info.title);
    //     formData.append('desc',info.desc);
       
    //    if(file){
    //     const data = new FormData();
    //     const fileName=Date.now() + file.name;
    //     data.append('name', fileName);
    //     data.append('file', file);
        
    //     try {
    //         await axios.post("/upload",data);
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    //    }
    //    try{
    //    const res= await axios.post("/post",formData);
    //    window.location.replace("/posts/" + res.data._id);
    //    }
    //    catch (error) {
    //        console.log(error)
    //    }
        
    //     // fetch('https://peaceful-journey-60086.herokuapp.com/addBlogs', {
    //     //     method: 'POST',
    //     //     body: formData
    //     // })
    //     //     .then(response => response.json())
    //     //     .then(data => {
    //     //         console.log(data)
    //     //     })
    //     //     .catch(error => {
    //     //         console.error(error)
    //     //     })
    // }

    return (
      <div className="container-fluid">
         
      <NavbarComponent></NavbarComponent>
      {file && (
     <img class="mx-auto mt-3 mb-3" style={{width:"20rem"}} src={URL.createObjectURL(file)} alt="" />
   )}
     <div className="p-4 mt-3 mx-auto  w-75">
          
         <form onSubmit={handleSubmit}>


         <div className="form-group">
                  
                 <input  onBlur={(e)=>{setTitle(e.target.value)}} type="text" className="form-control mt-3 writeInput" name="title" placeholder="Title" />
             </div>

             <div className="form-group">
                  
                 <textarea onBlur={(e)=>{setDesc(e.target.value)}}  type="text" className="form-control writeInput areaText mt-3" cols="30" rows="5" name="desc" placeholder="Tell your story..."/>
             </div>
            
             <div className="form-group">
                 <label htmlFor="exampleInputPassword1" className='mt-3'><FontAwesomeIcon icon={faPlusCircle} className="imageFile"/></label>
                 <input onChange={(e)=>{setFile(e.target.files[0])}} type="file" className="form-control  d-none mt-3" id="exampleInputPassword1" placeholder="Picture" />
                 <button type="submit"  className="btn float-end publish mt-3">Publish</button> 
             </div>
             
         </form>
     </div>
 </div>
    );
};

export default AddBlogs;