import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";  
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const LoginForm = ({setIsLoggedIn}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

 const navigate=useNavigate();
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  
  const [showPassword, setShowPassword] = useState(false);

  function clickHandler() {
    setShowPassword((prev) => !prev);
  }
  function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");

  }

  return (
    <div>
      <form onSubmit={submitHandler}
      className="flex w-full flex-col gap-y-6 mt-6 ">
        <label className="w-full">
          <p className="text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]">
            Email Address<sup className="text-red-800">*</sup>
          </p>
          <input
  required
  type="email"
  placeholder="Enter email Address"
  onChange={changeHandler}
  value={formData.email}
  name="email"
  className="bg-richblack-800 text-richblack-5 w-full rounded-[0.5rem] p-[12px] border-b-2 border-blue-600 focus:outline-none"
/>



        </label>

        <label className="w-full relative">
          <p className="text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]">
            Password<sup className="text-red-800">*</sup>
          </p>
          <input
            required
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            onChange={changeHandler}
            value={formData.password}
            name="password"
             className="bg-richblack-800 text-richblack-5 w-full rounded-[0.5rem] p-[12px] border-b-2 border-blue-600 focus:outline-none"
          />
          <span className="absolute right-3 top-[38px] cursor-pointer" onClick={clickHandler}>
            {showPassword ? <FaEye fontSize={24} fill="#AFB2BF" /> : <FaEyeSlash fontSize={24} fill="#AFB2BF" />}
          </span>
          <Link to="#">
            <p className="text-md text-blue-100 mt-1 max-w-max ml-auto">Forgot Password?</p>
          </Link>
        </label>

        <button  className="bg-yellow-50 rounded-[8px] p-2 font-semibold"type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LoginForm;
