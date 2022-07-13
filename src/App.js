

import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React from 'react';
import Alert from './component/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App(){
  return (
   <>
   
<Navbar title ="Snap"   Aboutext = "About"/>
<Alert Alert ="You Are In Snap"/>
<div className="container my-3">
  

<TextForm heading ="Enter the text to analyze"/>
{/* <About/>  */}
</div>
   </>
  );
}


export default App;
