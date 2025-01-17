import React from "react";
import logo from "../assets/Logo.svg"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"

const Navbar = (props) =>{
    function clickHandler(){
        setIsLoggedIn(false);
        toast.success("Logged Out");
    }
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
    return(
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
        <Link to="/">
            <img src={logo} alt="Logo" width={160} height={32} loding="lazy" />

        </Link>
        <nav>
            <ul className="flex text-white gap-x-6">
                <li > <Link to="/">Home</Link></li>
                <li > <Link to="/">About</Link></li>
                <li > <Link to="/">Contact</Link></li>
           </ul>
      </nav >

      <div className="flex items-center gap-x-4">
        { isLoggedIn===false &&
            <Link to="/login"><button className="bg-richblack-800 text-white py-[8px] px-[12px]
            rounded-[8px] border border-richblack-700">Login</button></Link>
        }
         { isLoggedIn===false &&
            <Link to="/signup"><button className="bg-richblack-800 text-white py-[8px] px-[12px]
            rounded-[8px] border border-richblack-700">Sign up</button></Link>
        }
         {  isLoggedIn===true &&
            <Link to="/dashboard"><button className="bg-richblack-800 text-white py-[8px] px-[12px]
            rounded-[8px] border border-richblack-700">Dashboard</button></Link>
        }
         {  isLoggedIn===true &&
            <Link to="/"><button  className="bg-richblack-800 text-white py-[8px] px-[12px]
            rounded-[8px] border border-richblack-700" onClick={clickHandler}>Log Out</button></Link>
        }
      </div>

         
     </div>
    );
}
export default Navbar;