import React,{ useState} from "react"

import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import "./Signup1.css"
function Signup (){
    const [values,setValues] = useState({
        name: '',
        email :'',
        password :'',
        inammount:'',
})

const navigate = useNavigate();
const handleChange =(event) =>
{
    setValues({...values,[event.target.name]:[event.target.value]})
}
const handleSubmit =(event) =>
{
    event.preventDefault();
    axios.post("http://localhost:8081/signup",values)
    .then(res => {
        navigate('/');
    })
    .catch(err => console.log(err));

}
return (
    
    <div id="bodys">
        
    <div  class="main"> 
        <h1 color='#ffffff'>Create Account</h1> 
        <form onSubmit={handleSubmit}  action=""> 
            <label id="label1" for="name">Name:</label> 
            <input  class="input1"type="text" id="first" 
                name="name" 
                placeholder="Enter your name"  onChange={handleChange}/> 

            {/* <label id="label1" for="last">Last Name:</label id="label1"> 
            <input class="input1" type="text" id="last" 
                name="last" 
                   placeholder="Enter your last name" required/>  */}

            <label id="label1" for="email">Email:</label > 
            <input class="input1" type="email" id="email" 
                name="email" 
                placeholder="Enter your email" required  onChange={handleChange}/> 

            {/* <label id="label1" for="dob">Date of Birth:</label id="label1"> 
            <input class="input1" type="date" 
                id="dob" name="dob" 
                   placeholder="Enter your DOB" />  */}

            <label id="label1" for="password">Password:</label > 
            <input class="input1" type="password" id="password" 
            name="password"
                placeholder="Enter your password" onChange={handleChange}
                pattern= 
                "^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$" required                    
                title="Password must contain at least one number,  
                    one alphabet, one symbol, and be at  
                    least 8 characters long"/> 

            <label id="label1" for="repassword">Re-type Password:</label> 
            <input class="input1" type="password" id="repassword" 
                   name="repassword" 
                   placeholder="Re-Enter your password"  
                   pattern= "^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$" 
                   title="Password must contain at least one number,  
                    one alphabet, one symbol, and be at least 8 characters long" required/> 
            <span id="pass"></span> 
  
            {/* <label id="label1" for="mobile">Contact:</label id="label1"> 
            <input class="input1" type="text" id="mobile" 
                   name="mobile" 
                   placeholder="Enter your Mobile Number" required 
                   maxlength="10"/> 
  
            <label id="label1" for="gender">Gender:</label id="label1"> 
            <select id="gender" name="gender" required> 
                <option value="male">Male</option> 
                <option value="female">Female</option> 
                <option value="other">Other</option> 
            </select>  */}
            <label id="label1" for="repassword">Initial Trading Amount:</label> 
            <input class="input1" type="number" onChange={handleChange} id="inammount" 
                   name="inammount" 
                   placeholder="Enter Ammount"  
                   
                    required/> 
            <div class="wrap"> 
                <button id="button1" type="submit" > 
                  Submit your <br/> information
                  </button> 
                  
                  <Link id="alac" to="/"> If you already have Account then login</Link>
            </div> 
        </form> 
    </div> 
    
    </div>
)
};

export default Signup;
