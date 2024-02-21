import React,{useState} from "react"
import "./Login.css"
import { Link ,useNavigate} from "react-router-dom";
import axios from 'axios';

const Login = ({})=> {

    const [values,setValues]=useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleInput = (event) => {
        setValues({...values,[event.target.name]:[event.target.value]})
    }
    const handleSubmit = (event) =>{
      event.preventDefault();
      axios
      .post('http://localhost:8081/login', values)
      .then((response) => {
      
        sessionStorage.setItem("name",response.data.result[0].name);
        sessionStorage.setItem("email",response.data.result[0].email);
        sessionStorage.setItem("ammount",response.data.result[0].inammount);
        
        navigate("/home");
        // Add further logic for successful login, e.g., redirect to another page
      })
      .catch((error) => {
        alert("Wrong credentials");
        console.error('Login failed:', error.response.data.message);
        setError(error.response.data.message);
      });
        }

return (
    
    <div class="logina">
    
    <div class="wrapper">

        <div class="login-box">
          <form action="" onSubmit={handleSubmit}>
            <h2 id="h2">Login</h2>
      
            <div class="input-box">
              <span class="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input placeholder="Add your Email" onChange={handleInput} name="email" type="email" required/>
              
              <label>Email</label>
            </div>
      
            <div class="input-box">
              <span class="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input placeholder="Ye Yaad Rakhna " onChange={handleInput} type="password" name="password" required/>
              <label>Password</label>
            </div>
      
            <div class="remember-forgot">
              <label><input type="checkbox"/> Remember me</label>
              <a href="#">Forgot Password?</a>
            </div>
      
            <button id="button2" type="submit">Enter in Market (login)</button>
      
            <div class="register-link">
              <p>Don't have an account?  <Link to="/signup"> Create Account</Link></p>
            </div>
          </form>
        </div>
      
      </div>
    </div>
  )
};

export default Login;
