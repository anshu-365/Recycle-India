import React,{useState,useEffect, createContext, useReducer} from "react";
import "./style/app.scss";
import { auth } from "./database/Firebase";

import {BrowserRouter as  Router,Routes,Route,Navigate} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import JoinUs from "./components/JoinUs";
import YourQuery from "./components/YourQuery";
import About from "./components/About";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import { initialState,reducer } from "./reducer/UseReducer";//use to change state..nowclog par batana hai dispatch par kya value hone wala hai


//1:contextAPI
export const USerContext=createContext();//use to change state..c

const App=()=> {






//     from here  concept to show the name who is currently log in the website
// ..writing in app.js because it's parent of all component..so displayName is not create problem
  const[userName,setUserName]=useState("")
useEffect(()=>{
auth.onAuthStateChanged((user)=>{
  if(user){
    setUserName(user.displayName)//display name if log in currently in website
  }
  else{
    setUserName("");//if not then it will be empty
  }
  })
},[]);
//to here

//for change state
const [state,dispatch]=useReducer(reducer,initialState)//initialState=STATE ki value hone wali hai..reducer have state and action..state use to know the current state

  return (
    <USerContext.Provider value={{state,dispatch}}>{/* dispatch par kuchh bhi change hoga vo reducer par change */}
    <Router>
      <Header/>{/*calling navbar */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/joinus" element={<JoinUs/>}/>
        <Route path="/yourquery" element={<YourQuery/>}/>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/logout" element={<Logout name={userName}/>} />
        <Route path="/*" element={<Navigate to="/"/>}/>
        {/*at wront url it autamatic navigate to home page */}        
      </Routes>
      <Footer/>
    </Router>
    </USerContext.Provider>
  );
}

export default App;
