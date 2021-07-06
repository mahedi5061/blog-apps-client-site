import React from 'react';
import axios from "axios";
const Practise = () => {
    const [newUser,setNewUser]=React.useState(false);
    const [email,setEmail] = React.useState("");
  const [password,setPassword]= React.useState("");
  const [username,setUserName] = React.useState("");
  const [error,setError] = React.useState("")
  //Validation for email and password...
    // const handleBlur = e => {
    //     let checkValidate = true;
    // if (e.target.name === 'email') {
    //   checkValidate = /\S+@\S+\.\S+/.test(e.target.value);

    // }
    // if (e.target.name === 'password') {
    //   const passwordValidation = e.target.value.length > 6;
    //   const passwordValidationNumber = /\d{1}/.test(e.target.value);
    //   checkValidate = passwordValidation && passwordValidationNumber
    // }
    // if (checkValidate) {
    //   const userInfo = { ...user };
    //   userInfo[e.target.name] = e.target.value;
    //   setUser(userInfo)
    // }
            
    // }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
          const res = await axios.post("/auth/register", {
            username,
            email,
            password,
          });
          console.log(res)
          
        //   res.data && window.location.replace("/");
        } catch (err) {
          setError(true);
        }
      };
   
    const handleLogin=()=>setNewUser(true) 
    return (
        <div class="font-sans">
        <div class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
            <div class="relative sm:max-w-sm w-full">
                <div class="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                <div class="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                    <label for="" class="block mt-3 text-sm text-gray-700 text-center font-semibold">
                        { newUser ? "Registration":"Login"}
                    </label>
                    <form method="#" action="#" onSubmit={handleSubmit} class="mt-10">
                                        
                        <div>
                            <input type="text" placeholder="Enter Name" onBlur={(e)=>{setUserName(e.target.value)}}  class="mt-3 p-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
                        </div>
            
                        <div class="mt-7">                
                            <input type="email" name="email" onBlur={(e)=>{setEmail(e.target.value)}} placeholder="Enter a Email" class="mt-3 p-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                        </div>
    
                   {newUser&& <div><div class="mt-7">                
                            <input type="password" name="email" onBlur={(e)=>{setPassword(e.target.value)}} placeholder="Enter a password" class="mt-3 p-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                        </div>
    
                        {/* <div class="mt-7">                
                            <input type="password" placeholder="Confirm password" class="mt-3 block p-2 w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                        </div> */}
    
                        </div>
                   }
            
                        <div class="mt-7">
                            <button class="bg-blue-500 w-full py-3 mt-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                Signup
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
                            { newUser ? <div>
                                 <label class="mr-2" >Already have an account?</label>
                                <a href="#" class=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105" onClick={() => setNewUser(!newUser)}>
                                    login
                                </a>  </div>:
                               <div><label class="mr-2" >Don't have an account?</label>
                                <a href="#" class=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105" onClick={() => setNewUser(!newUser)}>
                                    signup
                                </a>
                                </div> 
                            }

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Practise;