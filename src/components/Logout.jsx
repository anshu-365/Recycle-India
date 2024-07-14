import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {auth} from "../database/Firebase.js";
import "../style/logout.scss";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { USerContext } from "../App.js";//use for state

const Logout=(props)=>{
    const navig=useNavigate();
    const {state,dispatch}=useContext(USerContext);

  
    const handleClick=()=>{
        signOut(auth).then(val=>{
            // window.alert("Log out successfully!");//check data jabhi available ho
            dispatch({type:"USER",payload:false});//type action type..extra info
            //if it is false then show login ..if it is true then show logout
            navig('/login')
        })
    }
    return(
        <div className="container3">
      <div className="innerBox2">
        <h1 className="heading2">

            {props.name ? `Welcome - ${props.name}`:
            
            <span><Link to="/login">Login Please</Link></span>
            }
        </h1>
        <div className="footer2">
            <center>
        <button 
        onClick={handleClick}
      
        >Logout</button>
        </center>
        </div>
      </div>
     

    </div>

    );
}
export default Logout;