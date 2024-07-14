import React, {  useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {auth} from "../database/Firebase.js";
import {signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import "../style/login.scss";
import { USerContext } from "../App.js";//use for state
const Login=()=>{

 
const {state,dispatch}=useContext(USerContext);//with the help of useContext we find the current state...reffer thapa
const [errorMes,setErrorMes]=useState("")//itially it empty....it is use when simeone enter wrong value..then it show alert meg 

  const navigate=useNavigate();
  const[value,setValue]=useState({
     
      email:" ",
      pass:" "
  });
  

  const handleSubmission=()=>{
      if( !value.email || !value.pass){
          setErrorMes("Fill all fields");
          return;
      }
      setErrorMes(" ");//if not any error then just set to setErrorMess is empty
      // console.log(value)
      setSubmitButtonDisbled(true);//button become disable 
      signInWithEmailAndPassword(auth,value.email,value.pass).then(async(res)=>{//it return promisses
          // console.log(res);
          setSubmitButtonDisbled(false);//after getting res it set to false 
          const user=res.user;
          await updateProfile(user,{//user comes here and what u want to update u do..await kare and when it get success then we redirect  to Logout page
            displayName:value.name,//we are updating name
          });
          Swal.fire("Sign up Successfully Please Login!");////this part do in beeter way to show pop up message instead of alert

          dispatch({type:"USER",payload:true});//type action type..extra info...if it is true then show logout 
          
          navigate("/logout")//navigate to logout page after login
          // console.log(user)
      })
      .catch((err)=>
      {
          setSubmitButtonDisbled(false);//after getting res or error it set to false 
          setErrorMes(err.message)
          // console.log("Error",err.message)
          Swal.fire(errorMes);//just pop message
        }
      
      );
  };
    const[submitButtonDisbled,setSubmitButtonDisbled]=useState(false);


  return(

    <div className="container2">
      <div className="innerBox1">
        <h1 className="heading1">Login</h1>
        {/* <InputControl label="Email" placeholder="Enter mail"></InputControl>
        <InputControl label="Password" placeholder="Enter Password"></InputControl> */}

       {/*from here  */}
       <div className="container1">
      
      <label>Email</label>
      <input type="text"  placeholder="Enter mail"
       onChange={(event)=>
        setValue((prev)=>({...prev,email:event.target.value}))
    }
      />
      <label>Password</label>
      <input type="password" placeholder="enter password"
       onChange={(event)=>
        setValue((prev)=>({...prev,pass:event.target.value}))
    }
      />
      {/* <input type="password" {pass}/> */}
    </div>

       {/*to here */}
        <div className="footer1">
        <p className="error">{errorMes}{/*it show an error */}
            </p>
        <button 
        onClick={handleSubmission}
        disabled={submitButtonDisbled}
        >Login</button>
        <p>
          New account?{" "} <span><Link to="/signup">Sign Up</Link></span>
        </p>
        </div>
      </div>
    </div>
  );
}
export default Login;