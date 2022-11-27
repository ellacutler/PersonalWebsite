import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import OpeningPage from "./OpeningPage"
import ProjPage from './Proj';
import ContactPage from './Contact';
import NavBar from './NavBar';
import WebFont from 'webfontloader';


function App() {
 
  return (
    <div className = "WholeApp">
      <head>
        
      </head>
      <NavBar />
      <OpeningPage />
      <ProjPage />
      <ContactPage />
   </div>
  );
}

export default App;
