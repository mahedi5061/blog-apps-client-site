import React from 'react';
import NavbarComponent from '../../../Home/NavbarComponent/NavbarComponent';
import axios from 'axios';

const AddBlogs = () => {
    const [info, setInfo] = React.useState({});
    const [imageUrl,setImageUrl]=React.useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const imageUpload=event => {
        const imageData=new FormData();
        imageData.set('key','d30ee21879b0a937f8035c54640a59a9');
        imageData.append('image',event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload',imageData)
          .then(function (res) {
            setImageUrl(res.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    const handleSubmit = () => {
        const formData = new FormData()
        
        formData.append('file', imageUrl);
        formData.append('title', info.title);
        formData.append('date', info.date);
        formData.append('description', info.description);
        

        fetch('http://localhost:6055/addBlogs', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
console.log(imageUrl)
    return (
        <section className="container-fluid">
         
         <NavbarComponent></NavbarComponent>
         
        <div className="p-4  mx-auto  w-75" style={{backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand text-center">Add a new Blog</h5>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className='mt-3'>Blog title</label>
                    <input  onBlur={handleBlur} type="text" className="form-control mt-3" name="title" placeholder="Blog title" />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className='mt-3'>Date</label>
                    <input  onBlur={handleBlur} type="text" className="form-control mt-3" name="date" placeholder="dd-mm-yy"  />
                </div>
 

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className='mt-3'>Description</label>
                    <textarea onBlur={handleBlur}  type="text" className="form-control mt-3" cols="30" rows="5" name="description" placeholder="description"/>
                </div>
               
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className='mt-3'>Upload a image</label>
                    <input onChange={imageUpload} type="file" className="form-control mt-3" id="exampleInputPassword1" placeholder="Picture" />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button> 
            </form>
        </div>
    </section>
    );
};

export default AddBlogs;