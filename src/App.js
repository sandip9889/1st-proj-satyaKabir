import "./App.css";
// import About from './component/About';
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React from "react";
import Alert from "./component/Alert";
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from "./component/Login";
import Register from "./component/Register";


function App() {
  return (
    <>   
      <Navbar title="Snap" Aboutext="About" />
      <Alert Alert="You Are In Snap" />
      <Routes>
        <Route path='/' element={<TextForm/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />

      </Routes>
      {/* <div className="container my-3">
        <TextForm heading="Enter the text to analyze" />
      </div> */}
    </>
  );
}

export default App;
