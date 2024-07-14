import React from "react";

import "../style/InputControl.scss";

function Inputcontrol(props,pass) {
  return (
    <div className="container1">
      {props.label && <label>{props.label}</label>}
      
      <input type="text" {...props} />
      {/* <input type="password" {pass}/> */}
    </div>
  );
}

export default Inputcontrol;


  {/* <InputControl label="Name" placeholder="Enter your name".......inner box ke andar inside sign up component
        onChange={(event)=>
        setValue((prev)=>({...prev,name:event.target.value}))
        }
        ></InputControl>
        <InputControl label="Email" placeholder="Enter mail"
        onChange={(event)=>
        setValue((prev)=>({...prev,email:event.target.value}))
        // ...prev we keep same as empty usestate ......after we change value
        }
        ></InputControl>
        <InputControl label="Password" placeholder="Enter Password"
        onChange={(event)=>
            setValue((prev)=>({...prev,email:event.target.value}))
        }
        >
        </InputControl> */}