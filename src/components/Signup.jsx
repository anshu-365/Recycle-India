import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Swal from "sweetalert2";//package for show the alert box to show alert in sweeter way
import "../style/login.scss";
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "../database/Firebase.js";
import "../style/signup.scss";
const Signup=()=>{
  const navigate=useNavigate();

  const [errorMes,setErrorMes]=useState("")//itially it empty....it is use when simeone enter wrong value..then it show alert meg 
  const[submitButtonDisbled,setSubmitButtonDisbled]=useState(false);

    const[value,setValue]=useState({
        name:" ",
        email:" ",
        pass:" "
    });
    

    const handleSubmission=()=>{
        if(!value.name || !value.email || !value.pass)//if any parameter is missing then show erroe mess 
        {
            setErrorMes(" Please Fill All Fields");
            return;
        }
        setErrorMes(" ");//if all parameter fill then set Errormess empty
        // console.log(value)
        setSubmitButtonDisbled(true);//button become disable 
        createUserWithEmailAndPassword(auth,value.email,value.pass).then(async(res)=>{//it return promisses
            // console.log(res);
            setSubmitButtonDisbled(false);//after getting res it set to false 
            const user=res.user;
            await updateProfile(user,{//user comes here and what u want to update u do..await kare and when it get success then we redirect  to home page
              displayName:value.name,//we are updating name
            });
            Swal.fire("Sign up Successfully Please Login!")
            navigate("/login")
            // console.log(user)
        })
        .catch((err)=>
        {
            setSubmitButtonDisbled(false);//after getting res or error it set to false 
            setErrorMes(err.message)//set error message and showing it in footer
            // console.log("Error",err.message)
            Swal.fire(errorMes);//just pop message
          }
        
        );
    };



  return(
    <div className="container2">
      <div className="innerBox2">
        <h1 className="heading1">Signup</h1>
               {/*from here  */}
       <div className="container1">
      <label>Name</label>
      <input type="text"  placeholder="Enter Name"
      onChange={(event)=>//to change the state
        setValue((prev)=>({...prev,name:event.target.value}))
        }
      />
      <label>Email</label>
      <input type="text"  placeholder="Enter Mail"
      onChange={(event)=>
        setValue((prev)=>({...prev,email:event.target.value}))
    }
      />
      <label>Password</label>
      <input type="password" placeholder="Enter Password"
      onChange={(event)=>
        setValue((prev)=>({...prev,pass:event.target.value}))
    }
      />
      {/* <input type="password" {pass}/> */}
    </div>

       {/*to here */}



        <div className="footer1">
            <p className="error">{errorMes}{/*calling the error messege here*/}
            </p>
        <button onClick={handleSubmission}//function ko handle
        disabled={submitButtonDisbled}//this is disablebutton once u submit so button become disable so u button multiple bar click nhi hoga so ...value bar bar nhi hoga
        >Signup</button>
        <p>
          Already have an account?{" "} <span><Link to="/login">Login</Link></span>
        </p>
        </div>
      </div>
    </div>
  );

}
export default Signup;