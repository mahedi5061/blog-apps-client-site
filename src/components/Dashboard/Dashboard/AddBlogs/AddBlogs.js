import React from 'react';
import NavbarComponent from '../../../Home/NavbarComponent/NavbarComponent';
import axios from 'axios';
import { Context } from '../../../../context/Context';

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
        <section className="container-fluid">
         
         <NavbarComponent></NavbarComponent>
         {file && (
        <img class="mx-auto mb-3" style={{width:"20rem"}} src={URL.createObjectURL(file)} alt="" />
      )}
        <div className="p-4  mx-auto  w-75" style={{backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand text-center">Add a new Blog</h5>
            <form onSubmit={handleSubmit}>
 

            <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className='mt-3'>Blog title</label>
                    <input  onBlur={(e)=>{setTitle(e.target.value)}} type="text" className="form-control mt-3" name="title" placeholder="Blog title" />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className='mt-3'>Description</label>
                    <textarea onBlur={(e)=>{setDesc(e.target.value)}}  type="text" className="form-control mt-3" cols="30" rows="5" name="desc" placeholder="description"/>
                </div>
               
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className='mt-3'>Upload a image</label>
                    <input onChange={(e)=>{setFile(e.target.files[0])}} type="file" className="form-control mt-3" id="exampleInputPassword1" placeholder="Picture" />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button> 
            </form>
        </div>
    </section>
    );
};

export default AddBlogs;