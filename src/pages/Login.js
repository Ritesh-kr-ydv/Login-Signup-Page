import React from "react"
import Template from "../components/Template"
import loginImage from "../assets/login.png"
const Login=({setIsLoggedIn})=>{
    return(
        <div>
         <Template
         title="Welcome Back"
         desc1="Build skill for today,tomorrow and beyond"
         desc2="Education for better tomorrow"
         image={loginImage}
         formtype="login"
         setIsLoggedIn={setIsLoggedIn}
         />
        </div>
    );
}
export default Login;