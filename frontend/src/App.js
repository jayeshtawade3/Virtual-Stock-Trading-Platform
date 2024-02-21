// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup.js';
import Home from './Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
 

  return (
    
<BrowserRouter>
<Routes>
<Route path='/' element={<Login/>}></Route>
<Route path='/signup' element ={<Signup />}></Route>
<Route path='/home' element ={<Home />}></Route>

</Routes>
</BrowserRouter>
  );
}

export default App;
