import React ,{useState,useContext}from 'react';
import "../style/header.scss";
import {Link} from "react-router-dom";
import logo from "../assets/big-logo.png";

import { GiHamburgerMenu} from "react-icons/gi";

import { USerContext } from '../App';

const Header=()=>{
    const {state,dispatch}=useContext(USerContext);//with the help of useContext we find the current state

    const RenderMenu=()=>{
        if(state){//if state is true then show logout or user login then show logout
            return(
                <>
                  {/* this all is link */}
            <Link to={"/"} className='home'><li>Home</li></Link>
            <Link to="/about" className='about'><li>About Us</li></Link>
            {/* <Link to="/joinus" className='joinus'><li>Join Us</li></Link> */}
            <Link to="/yourquery" className='yourquery'><li>Query</li></Link>
            <Link to="/logout" className='signup'><li>Logout</li></Link>
      
            {/* <div className='hamburger'><Link ><GiHamburgerMenu/></Link></div> */}
                </>
            )
        }
        else{
            return(//if state is false then show logout or user login then show login
                <>
                  {/* this all is link */}
            <Link to={"/"} className='home'><li>Home</li></Link>
            <Link to="/about" className='about'><li>About Us</li></Link>
            {/* <Link to="/joinus" className='joinus'><li>Join Us</li></Link> */}
            <Link to="/yourquery" className='yourquery'><li>Query</li></Link>
            <Link to="/login" className='signup'><li>Login</li></Link>
      
            {/* <div className='hamburger'><Link ><GiHamburgerMenu/></Link></div> */}
                </>

            )
        }

    }

    const[isMobile,setIsMobile]=useState(false);//initially ismobile var set to false at desktop page....when we move to mobile page it changes by using setIsMobile Function

    return(
        <nav className="navbar">
            <div className='logo'>
       <img src={logo} alt="logo"/>
            </div>
        
        <ul className={isMobile? "nav-links-mobile":"nav-links"}  onClick={()=>setIsMobile(false)}>
{/*if i am in smaller screen then nav-link-moblile will display else nav-link at desktop will display*/}


          <RenderMenu/>
            
           
        </ul>
        <Link className='mobile-menu-icon'
        onClick={()=>setIsMobile(!isMobile)}//when i click to mobile menu it make reverse of initial value of isMobile false to true
        >
            <GiHamburgerMenu/>
        </Link >
       
       
    </nav>
    );
}
export default Header;