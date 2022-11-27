import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import OpeningPage from "./OpeningPage"
import ProjPage from './Proj';
import ContactPage from './Contact';
import NavBar from './NavBar';

function App() {
  return (
    <div className = "WholeApp">
      <NavBar />
      <OpeningPage />
      <ProjPage />
      <ContactPage />
   </div>
  );
}

export default App;
