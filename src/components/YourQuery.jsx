import React,{useState} from "react";
import Swal from "sweetalert2";//package for show the alert box to show alert in sweeter way
import "../style/yourQuery.scss";
import EmailForm from "../Message/EmailForm";
const YourQuery=()=>{

    const [errorMes,setErrorMes]=useState("")//itially it empty....it is use when simeone enter wrong value..then it show alert meg 

    const [userData,setUserData]=useState(//current data of userdata is empty it is modify by the setUserData
        {
            name:"",
            email:"",
            phone:"",
            address:"",
            garbage:"",
            message:"",
        }
    )
    let name,value;
    const postUserData=(event)=>{
        name=event.target.name;
        value=event.target.value;

        setUserData({...userData,[name]:value});//...userData privious data will be,[name]:value it updated the value

    };
    //connect with firebase
    const submitData=async(event)=>{
        event.preventDefault();
        const{name, email,phone,address,garbage,message}=userData;
        
//start main if block
        if(name && email && phone && address && garbage && message)
        {
        fetch("https://recycledb-9302d-default-rtdb.firebaseio.com/userDataRecords.json",
        {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            name, 
            email,
            phone,
            address,
            garbage,
            message,

        }),}
        )
        .then((res)=>{
            if(res){
            setUserData({//once data is stored by someone then it should be againg empty to fill to other user
            name:"",
            email:"",
            phone:"",
            address:"",
            garbage:"",
            message:"",
            })
            setErrorMes("");

            Swal.fire("Data Stored Successfully");//this part do in beeter way to show pop up message instead of alert
        }
        else{
        
            Swal.fire("Please Fill The Data!");//this part do in beeter way to show pop up message instead of alert
        }

        }).catch((err)=>{
            setErrorMes(err.message);
                Swal.fire(errorMes);
        })
    }
   
    else{
        
        Swal.fire("Please Fill The Data!");//this part do in beeter way to show pop up message instead of alert
    }
    };


    return(
        <>
<div className='contact'>
    <main>
        <h1> Contact us</h1>
        <form method="POST">
            <div>
                <label >Name</label>
                <input 
                type="text" 
                name="name"
                required 
                placeholder="Enter Your Name*"
                value={userData.name}
                onChange={postUserData}
                />
            </div>
            <div>
                <label >Email</label>
                <input 
                type="email" 
                name="email"
                required 
                placeholder="abc@gmail.com*"
                value={userData.email}
                onChange={postUserData}
                />
            </div>

            <div>
                <label >Phone</label>
                <input 
                type="text"
                name="phone" 
                required 
                placeholder="Enter Phone Number*"
                value={userData.phone}
                onChange={postUserData}
                />
            </div>
           


            <div>
                <label >Address</label>

                {/* <input type="text" required placeholder="Write Here Your Problem"/> */}
                <input type="text" 
                required 
                placeholder="Enter address**"
                name="address"
                value={userData.address}
                onChange={postUserData}
                />
               
            </div>

            <div>
                <label >Garbage</label>
                <input 
                type="text"
                name="garbage" 
                required 
                placeholder="Enter Garbage Type*"
                value={userData.garbage}
                onChange={postUserData}
                />
            </div>
            <div>
                <label >Message</label>
                <input 
                type="text"
                name="message" 
                required 
                placeholder="Type Your Message*"
                value={userData.message}
                onChange={postUserData}
                />
            </div>
            {/* <div ><h5 className="t">{errorMes}sss</h5></div> */}


            <button type="submit" onClick={submitData}>Submit</button>
        </form>
    </main>
    
</div>
<EmailForm></EmailForm>  
</>
    );
}
export default YourQuery;