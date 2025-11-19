import React,{useEffect} from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';

function RefreshHandler({setisAuthenticated}) {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
        
        const token = localStorage.getItem("token");
        const loggedinuser = localStorage.getItem("loggedinuser");

        if(token && loggedinuser){
            setisAuthenticated(true);
            if(
                location.pathname === "/" ||
                location.pathname === "/appointment" ||
                location.pathname === "/appointment/signup" ||
                location.pathname === "/appointment/forget"                 
            ){
                navigate("/patient/patienthome/",{replace:false});
            }
        }else{
            setisAuthenticated(false);
        }   
    },[location,navigate,setisAuthenticated])
  return (
    null
  )
}

export default RefreshHandler