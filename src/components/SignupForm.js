import React from "react";
import {useState} from "react"
import { FaEyeSlash,FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast"

const SignupForm =({setIsLoggedIn})=>{
    const [formData,setFormData]=useState({
        firstName:"",lastName:"",email:"",password:"",confirmPassword:""
    })
    function changeHandler(event){
        setFormData((prevData)=>({
            ...prevData,
         [event.target.name]:event.target.value
        }))
    }
    function clickHandler(){
        setShowPassword((prev)=>!prev)
    }
    function clickHandler1(){
      setShowConfirmPassword((prev)=>!prev)
  }
   
    const [showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);
    const [accountType,setAccountType]=useState("student");
    const navigate=useNavigate();
    function submitHandler(event){
      event.preventDefault();
      if(formData.password!=formData.confirmPassword){
        toast.error("Password do not match");
        return;
      }
      setIsLoggedIn(true);
      toast.success("Account Created");
      const accountData ={
        ...formData
      };
      navigate("/dashboard");
      
    }
    return(
        <div>
            <div className="flex bg-richblack-800 p-1.5 gap-x-1 my-6 rounded-full max-w-max">
  <button
    className={`${
      accountType === "student"
        ? "bg-richblack-900 text-white"
        : "bg-transparent text-richblack-200"
    } py-3 px-5 rounded-full transition-all duration-200`}
    onClick={() => setAccountType("student")}
  >
    Student
  </button>
  <button
    className={`${
      accountType === "instructor"
        ? "bg-richblack-900 text-white"
        : "bg-transparent text-richblack-200"
    } py-3 px-5 rounded-full transition-all duration-200`}
    onClick={() => setAccountType("instructor")}
  >
    Instructor
  </button>
</div>

         <form onSubmit={submitHandler}>
    <div className="flex justify-between ">
            <label>
            <p className="text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]">First Name<sup className="text-red-800">*</sup></p>
            <input
            required
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={changeHandler}
            placeholder="Enter First Name"
            className="bg-richblack-800 text-richblack-5 w-full rounded-[0.5rem] p-[12px] border-b-2 border-blue-600 focus:outline-none"/>
          </label>

          <label>
            <p className="text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]">Last Name<sup className="text-red-800">*</sup></p>
            <input
            required
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={changeHandler}
            placeholder="Enter Last Name"
            className="bg-richblack-800 text-richblack-5 w-full rounded-[0.5rem] p-[12px] border-b-2 border-blue-600 focus:outline-none"/>
          </label>
          
    </div>
          
        <div className="mt-4">
          <label >
            <p className="text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]">Email<sup className="text-red-800">*</sup></p>
            <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter Email Address"
            className="bg-richblack-800 text-richblack-5 w-full rounded-[0.5rem] p-[12px] border-b-2 border-blue-600 focus:outline-none"/>
          </label>
          </div>
         
    <div className="flex justify-between mt-5">
         <label className="relative">
            <p className="text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]"> Create Password<sup className="text-red-800">*</sup></p>
            <input
            required
            type={showPassword?("text"):("password")}
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter Password"
            className="bg-richblack-800 text-richblack-5 w-full rounded-[0.5rem] p-[12px] border-b-2 border-blue-600 focus:outline-none"/>

            <span  className="absolute right-3 top-[38px] cursor-pointer" onClick={clickHandler}>
                {showPassword ?(<FaEye fontSize={24} fill="#AFB2BF"/>):(<FaEyeSlash fontSize={24} fill="#AFB2BF"/>)}
            </span>
          </label>

          <label className="relative">
            <p className="text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]">Confirm Password<sup className="text-red-800">*</sup></p>
            <input
            required
            type={showConfirmPassword?("text"):("password")}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={changeHandler}
            placeholder="Confirm Password"
            className="bg-richblack-800 text-richblack-5 w-full rounded-[0.5rem] p-[12px] border-b-2 border-blue-600 focus:outline-none"/>

            <span className="absolute right-3 top-[37px] cursor-pointer" onClick={clickHandler1}>
            {showConfirmPassword ?(<FaEye fontSize={24} fill="#AFB2BF"/>):(<FaEyeSlash fontSize={24} fill="#AFB2BF"/>)}
            </span>
          </label>

        </div>
        <button className="bg-yellow-50 rounded-[8px] mt-8 p-3 font-semibold w-full">
            Create Account
        </button>
          

         </form>
        </div>
    );
}
export default SignupForm;