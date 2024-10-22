import React from "react"
import Template from "../components/Template"
import signupImage from "../assets/signup.png"

const Signup=({setIsLoggedIn})=>{
    return(
        <div>
          <Template
          title="join the the million learning to code with StudyNotion for free"
          desc1="Build skill for today,tomorrow and beyond"
          desc2="Education for better tomorrow"
          image={signupImage}
          formtype="signup"
          setIsLoggedIn={setIsLoggedIn}
          />  
          </div>
        
    );
}
export default Signup;