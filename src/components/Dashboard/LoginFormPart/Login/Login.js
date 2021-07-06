import React, { useContext } from "react";
import NavbarComponent from "../../../Home/NavbarComponent/NavbarComponent";
import axios from "axios";
import { Link } from "react-router-dom"
import { Context } from "../../../../context/Context";
import './Login.css'
const Login = () => {
  const userEmailRef=React.useRef();
  const passRef=React.useRef();
  const {dispatch,isFetching}=useContext(Context);

//   const handleBlur = (e) => {
// //Email & password validate check...
//       let checkValidate=true;
//       if (e.target.name === 'email'){
//         checkValidate=/\S+@\S+\.\S+/.test(e.target.value);
//       }

//       if (e.target.name === 'password'){
//         const passwordValidateNumber=e.target.value > 6;
//         const passwordValidateCheck= /\d{1}/.test(e.target.value);
//         checkValidate=passwordValidateNumber && passwordValidateCheck;
//       }
// //all input vlue taken from input field...

//       if(checkValidate){
//           const userInfo={...user};
//           userInfo[e.target.name] = e.target.value;
//           setUser(userInfo);
//       }
//   };

  const handleSubmit = async(e)=>{
     e.preventDefault();
     dispatch({ type:"LOGIN_START" })
     try{
      const res= await axios.post("/auth/login",{
        email:userEmailRef.current.value,
        password:passRef.current.value
     });
     dispatch({ type:"LOGIN_SUCCESS", payload:res.data })
     res.data && window.location.replace("/");
     }
     catch(err){
      dispatch({ type:"LOGIN_FAILED"})
     }
  }
 

  return (
    <>
      <NavbarComponent></NavbarComponent>
      <div class="font-sans">
        <div class="relative mt-5 flex flex-col sm:justify-center items-center">
          <div class="relative sm:max-w-sm w-full">
            <div class="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div class="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
            <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
              <label
                for=""
                class="block mt-3 text-sm text-gray-700 text-center font-semibold"
              >
                Login
              </label>
              <form method="#" action="#" onSubmit={handleSubmit}  class="mt-10">
              
                <div class="mt-7">
                  <input
                    type="email"
                    placeholder="Enter a Email"
                    class="mt-3 p-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                    ref={userEmailRef}
                  />
                </div>

                <div class="mt-7">
                  <input
                    type="password"
                    placeholder="Enter a password"
                    class="mt-3 p-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                    ref={passRef}
                  />
                </div>
               
                <div class="mt-7">
                  <button class="bg-blue-500 w-full py-3 mt-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105 loginDesign" disabled={isFetching}>
                    Login
                  </button>
                </div>

                <div class="flex mt-7 items-center text-center">
                  <hr class="border-gray-300 border-1 w-full rounded-md"></hr>
                  <label class="block font-medium text-sm text-gray-600 w-full">
                    or
                  </label>
                  <hr class="border-gray-300 border-1 w-full rounded-md"></hr>
                </div>

                <div class="flex mt-7 justify-center w-full">
                  <button class="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Facebook
                  </button>

                  <button class="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Google
                  </button>
                </div>

                <div class="mt-7">
                  <div class="flex justify-center items-center">
                  
                      <div>
                        <label class="mr-2">Don't have any account?</label>
                        <a
                          href="#"
                          class=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105 "
                          
                        >
                         <Link to="/registration">Signup</Link>
                        </a>
                      </div>
                   
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
