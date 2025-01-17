import React from"react"
import frameImage from "../assets/frame.png"
import SignupForm from "./SignupForm"
import LoginForm from "./LoginForm"
import { FcGoogle } from "react-icons/fc";



const Template=({title,desc1,desc2,image,formtype,setIsLoggedIn})=>{
    return(
        <div className="flex w-11/12 max-w-[1160px] justify-between py-12 mx-auto gap-x-12 gap-y-0">
         <div className=" w-11/12 max-w-[450px]" >
            <h1
            className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]"
            >{title}</h1>
            <p className="text-[1.175rem] leading-[1.625rem] mt-4">
            <span className="text-richblack-100 ">{desc1}</span>
            <br/>
            <span className="text-blue-100 italic">{desc2}</span>
            </p>
            {formtype==="signup"?(<SignupForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
            
            <div className="flex w-full items-center my-4 gap-x-2">
                <div className="w-full h-[1px] bg-richblack-700"></div>
                <div className="font-medium leading-[1.375rem] text-richblack-700">OR</div>
                <div className="w-full h-[1px] bg-richblack-700"></div>
                
            </div>
            <button className=" w-full flex gap-x-3 justify-center items-center rounded-[8px] border-[1px] text-white mt-6 py-2 font-medium
            border-richblack-700"> <FcGoogle/>Sign in with Google</button>
         </div>
         <div className="relative w-11/12 max-w-[450px]">
          <img src={frameImage}
          alt="Pattern"
          width="558"
          height="504"
          loading="lazy"/>

        <img src={image} 
          alt="Students"
          width="558"
          height="494"
          loading="lazy"
          className="absolute -top-4 right-4"/>
         </div>
        </div>
    );
}
export default Template;