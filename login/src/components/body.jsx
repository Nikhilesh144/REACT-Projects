import React from "react";
import sign from "./login.jpg"
import log from "./log.jpg"
import { useState } from "react";
export default function Body(){
    
    const[signup,setSignup]=React.useState(true);
    let text=signup?"Sign up":"Log in";
    let img=signup?sign:log;
    function change(){
        setSignup(prev =>!prev)
    }
    const [formData,setFormData]=React.useState({userName:"",email:"",password:"",rePassword:""});
    
    function handleChange(event){
        setFormData(prevData=>{
            return{
                ...prevData,
                [event.target.name]:event.target.value 

            }
        }
        )
    }


    return(
        <>
        <div className="body">
        <div className="logo">
        <img className="img" src={img} alt="loginImg" />
        </div>
        
        <div className="form">
            
            <h2 >{text}</h2>
            
            <div >
                <label htmlFor="userName">User Name:</label><br />
            <i class="fa-regular fa-user"></i>
            <input type="text" name="userName" placeholder="User_123" id="" onChange={handleChange} />
            </div>
          
            {signup === true?   <div >   <label htmlFor="email" >Email:</label><br />
            <i class="fa-regular fa-envelope"></i>
            <input type="email" name="email" id="" onChange={handleChange} placeholder="abc@gmail.com"/>
            </div>: <div></div>}
            <div >
             <label htmlFor="password">Password:</label><br />
             <i class="fa-solid fa-key"></i>
             <input type="password" name="password" id="" onChange={handleChange}/>
            </div>
            {signup === true?  <div  >
            
            <label htmlFor="repassword">Confirm Password:</label><br />
            <i class="fa-solid fa-key"></i>
            <input type="password" name="rePassword" id=""onChange={handleChange} />
           </div>: <div></div>}
         
            
           
            <p> {signup&&"Already a user?"}{!signup&&"New User?"}<span  onClick={change}>{signup &&"Login"}{!signup&&"Sign up"}</span></p>
          <button className="submitButton">{text} </button>
           
            
            
          

        </div>
        </div>
       
        </>
    )
   
}