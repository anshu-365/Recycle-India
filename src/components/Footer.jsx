import React from "react";
import  "../style/footer.scss";
// import {AiOutlineSend} from "react-icons/ai";//using this for 
import {NavLink} from "react-router-dom";
const Footer=()=>{
    return(
<div class="footer">
<div className="in1">
    <h3>subscribe to Get Join</h3>
   
    {/* <input type="email" placeholder="Enter Email..." /> */}
   
    <a 
href="mailto:anshumankannaujiya23@gmail.com">{/* it open the email by clicking the buttun main */}
    <button>Click TO Join Us</button>
</a>
    
</div>
<div className="in2">
<h3>contact Information</h3>
<p>Contact: +91-8887590747</p>
<p>Email:recycleindia@gmail.com</p>
</div>

<div className="in3">
<h3>social media</h3>
<div className="in3_1"> <NavLink  to="https://youtube.com" target={"blank"} className="link">Youtube</NavLink>
        <NavLink  className="link" to="https://www.instagram.com/anshu__365/" target={"blank"}>Instagram</NavLink>
        <NavLink className="link" to="https://github.com/anshu-365" target={"blank"}>Facebook</NavLink></div>
</div>
</div>
    );
}
export default Footer;