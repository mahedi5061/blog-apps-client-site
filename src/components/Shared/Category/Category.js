import React from 'react';
import { Context } from '../../../context/Context';
import './Category.css'
const Category = () => {
  const {user}=React.useContext(Context);
  const PF="http://localhost:5000/images/";
    return (
        <>
            <div class="about-section m-5 p-5">
            <h3 class="font-sans p-2 text-center">About me</h3>
           {
             user?.userprofile &&  <img
              class="card-img-top rounded-circle mx-auto"
              src={PF+user?.userprofile}
              style={{ width: "20rem" }}
              alt="Card image cap"
            />
           }
            <div class="card-body ">
              <p class="card-text text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <hr></hr>
              <h5 class="card-title text-center">Category</h5>
              <hr></hr>
              <div class="row">
                <div class="col-md-6 text-center font-safari">
                  <h6>Soft</h6>
                  <h6>style</h6>
                  <h6>Tech</h6>
                </div>
                <div class="col-md-6 text-center">
                  <h6>Music</h6>
                  <h6>Sports</h6>
                  <h6>Cinema</h6>
                </div>
              </div>
              <hr></hr>
              <h5 class="card-title text-center">Follow us</h5>
              <hr></hr>
            </div>
          </div>
        </>
    );
};

export default Category;