import React from "react";
import BlogImage from "../../../Images/blog-14-770x510.jpg";
import Blog from "../Blog/Blog";
import "./Blogs.css";

const Blogs = () => {
  const fakeData = [
    {
      title: "Proof Bread When It’s Cold Outside",
      date: "22-06-2021",
      pic: BlogImage,
      description:
        "When the temps start to drop, I start craving all of my favorite comfort foods. That means more soups, more pot roasts and—in particular—a lot more fresh homemade bread to go with both. So what’s a baker to do when she wants to make fresh bread at home when it’s cold? Well, it turns out there are a few tricks to proofing bread in the cold.However, when it’s chilly outside and in, making yeasted bread at home becomes more challenging. That’s because yeast does its job best at temperatures above 75ºF. That means in order to proof bread on a cold day, you really have to crank up the heat at home to get a good rise.",
    },
    {
      title: "Proof Bread When It’s Cold Outside",
      date: "22-06-2021",
      pic: BlogImage,
      description:
        "When the temps start to drop, I start craving all of my favorite comfort foods. That means more soups, more pot roasts and—in particular—a lot more fresh homemade bread to go with both. So what’s a baker to do when she wants to make fresh bread at home when it’s cold? Well, it turns out there are a few tricks to proofing bread in the cold.However, when it’s chilly outside and in, making yeasted bread at home becomes more challenging. That’s because yeast does its job best at temperatures above 75ºF. That means in order to proof bread on a cold day, you really have to crank up the heat at home to get a good rise.",
    },
    {
      title: "Proof Bread When It’s Cold Outside",
      pic: BlogImage,
      date: "22-06-2021",
      description:
        "When the temps start to drop, I start craving all of my favorite comfort foods. That means more soups, more pot roasts and—in particular—a lot more fresh homemade bread to go with both.So what’s a baker to do when she wants to make fresh bread at home when it’s cold? Well, it turns out there are a few tricks to proofing bread in the cold.However, when it’s chilly outside and in, making yeasted bread at home becomes more challenging. That’s because yeast does its job best at temperatures above 75ºF. That means in order to proof bread on a cold day, you really have to crank up the heat at home to get a good rise.",
    },
    {
      title: "Proof Bread When It’s Cold Outside",
      pic: BlogImage,
      date: "22-06-2021",
      description:
        "When the temps start to drop, I start craving all of my favorite comfort foods. That means more soups, more pot roasts and—in particular—a lot more fresh homemade bread to go with both. So what’s a baker to do when she wants to make fresh bread at home when it’s cold? Well, it turns out there are a few tricks to proofing bread in the cold.However, when it’s chilly outside and in, making yeasted bread at home becomes more challenging. That’s because yeast does its job best at temperatures above 75ºF. That means in order to proof bread on a cold day, you really have to crank up the heat at home to get a good rise.",
    },
    {
      title: "Proof Bread When It’s Cold Outside",
      pic: BlogImage,
      date: "22-06-2021",
      description:
        "When the temps start to drop, I start craving all of my favorite comfort foods. That means more soups, more pot roasts and—in particular—a lot more fresh homemade bread to go with both. So what’s a baker to do when she wants to make fresh bread at home when it’s cold? Well, it turns out there are a few tricks to proofing bread in the cold.However, when it’s chilly outside and in, making yeasted bread at home becomes more challenging. That’s because yeast does its job best at temperatures above 75ºF. That means in order to proof bread on a cold day, you really have to crank up the heat at home to get a good rise.",
    },
    {
      title: "Proof Bread When It’s Cold Outside",
      pic: BlogImage,
      date: "22-06-2021",
      description:
        "When the temps start to drop, I start craving all of my favorite comfort foods. That means more soups, more pot roasts and—in particular—a lot more fresh homemade bread to go with both. So what’s a baker to do when she wants to make fresh bread at home when it’s cold? Well, it turns out there are a few tricks to proofing bread in the cold.However, when it’s chilly outside and in, making yeasted bread at home becomes more challenging. That’s because yeast does its job best at temperatures above 75ºF. That means in order to proof bread on a cold day, you really have to crank up the heat at home to get a good rise.",
    },
  ];

  return (
    <>
      <h5 className="d-flex justify-content-center mt-5 blog text-decoration-underline">
        OUR BLOGS
      </h5>
      <div class="row">
        <div class="col-md-8">
          <div className="d-flex justify-content-center  my-5 py-5">
            <div className="row w-75">
              {fakeData.map((fkData) => (
                <Blog fkData={fkData}></Blog>
              ))}
            </div>
          </div>
        </div>
        
          <div class="col-md-4">
            <div class="card about-section m-5 p-5">
            <h3 class="font-sans p-1 text-center">About me</h3>
              <img class="card-img-top mx-auto" src={BlogImage} style={{width:"20rem"}} alt="Card image cap"  />
              <div class="card-body ">
                <p class="card-text text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <hr></hr>
                <h5 class="card-title text-center">Category</h5>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
};

export default Blogs;
