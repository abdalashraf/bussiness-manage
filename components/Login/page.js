"use client"
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import {  toast,ToastContainer } from 'react-toast'

import axios from 'axios';
export default function Login() {
  
  let router=useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  

  
  const handleformdata= async (data)=>{
    try{
let resp= await axios.post("/api/addUser",data)

if(resp.data.userMilgya){
  localStorage.setItem("alitoken",resp.data.myToken)
  toast.success("Successfully Login" ,{ backgroundColor: "green" })
  router.push("/home")

  console.log("ok")
}
else{
  toast.warn("User Not found")
  
}
    }catch (error){
      console.log(error)
    }
    console.log(data)
  }
  
  return (
    <>
    <div className=" myclass min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
       
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="absolute inset-0  ">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"> */}
        </div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Login Form with Floating Labels</h1>
            </div>
            <div className="divide-y divide-gray-200">
            <form onSubmit={handleSubmit(handleformdata)}>
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              
                <div className="relative">
                  
                  <input
                  {...register("name")}
                    autocomplete="off"
                  
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Enter Your Name"
                  />
                  <label
                    for="name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
              Name
                  </label>
                </div>
                <div className="relative">
                  <input
                   {...register("password")}
                    autocomplete="off"
                    id="password"
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                  <label
                    for="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <button className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer position='top-center' delay={3000} />
  </>
  );
}
