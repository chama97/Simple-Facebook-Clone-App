import React from "react";
import {Routes, Route} from "react-router-dom";
import Login from "../pages/login"
import Home from "../pages/home"
import Sign from "../pages/sign"
import User from "../pages/user"


function App() {
  return (
    <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='sign' element={<Sign/>}/>
        <Route path='user' element={<User/>}/> 
    </Routes>
  );
}

export default App;