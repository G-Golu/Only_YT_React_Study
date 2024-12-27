//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
//import Profile from "/.Components/Profile.jsx";
import ReactDom from "react-dom";
import React from "react";


//createRoot(document.getElementById('root')).render(
ReactDom.createRoot(document.getElementById("root")).render(
<React.StrictMode>
     <App /> 
    {/*<Profile/>*/}
  </React.StrictMode>,
);
