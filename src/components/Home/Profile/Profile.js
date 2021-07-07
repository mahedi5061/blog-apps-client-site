import React from 'react';
import { Context } from '../../../context/Context';
import Category from '../../Shared/Category/Category';
import './Profile.css';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faUserCircle } from "@fortawesome/free-solid-svg-icons";
import NavbarComponent from "../../Home/NavbarComponent/NavbarComponent";
const Profile = () => {
    const [file,setFile]=React.useState(null);
    const [username,setUsername]=React.useState("");
    const [email,setEmail]=React.useState("");
    const [password,setPassword]= React.useState("");
    const {user, dispatch}=React.useContext(Context);
    const PF = "http://localhost:5000/images/";
    const [success, setSuccess] = React.useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" });
        const updateProfile = {
            userId:user?._id,
            username,
            email,
            password
        };
        if (file) {
          const data =new FormData();
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("file", file);
          updateProfile.userprofile = filename;
          try {
            await axios.post("/upload", data);
          } catch (err) {}
        }
        try {
         const res= await axios.put("/user/" + user?._id, updateProfile);
          setSuccess(true);
          dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" });
        }
      };
//Delete profile..
    //   const handleDelete= async() => {
    //     try {
    //       await axios.delete(`/user/${user._id}`, {
    //         data:{userId:user._id}
    //       });
    //       window.location.replace("/");
    //     }
    //     catch (err) {
    //     console.log(err)
    //     }
    //   }

    return (
       <>
       <NavbarComponent></NavbarComponent>
       <div class="row">
           <div class="col-md-8">
           <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            {/* <span className="settingsDeleteTitle">Delete Account</span> */}
          </div>
          <form className="settingsForm" onSubmit={handleSubmit}>
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img
                src={file ? URL.createObjectURL(file) : PF+user?.userprofile}
                alt=""
              />
              <label htmlFor="fileInput">
              <FontAwesomeIcon icon={faUserCircle} className="rounded-circle settingsPPIcon"/>
              </label>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <label>Username</label>
            <input
              type="text"
              placeholder={user?.username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              placeholder={user?.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="settingsSubmit" type="submit">
              Update
            </button>
            {success && (
              <span
                style={{ color: "green", textAlign: "center", marginTop: "20px" }}
              >
                Profile has been updated...
              </span>
            )}
          </form>
        </div>
        
      </div>
           </div>
           <div class="col-md-4">
           <Category></Category>
           </div>
       </div>
      
       </>
    );
};

export default Profile;