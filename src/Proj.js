import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import IndvProj from './IndvProj';


class ProjPage extends React.Component{
  render(){ 
    return (
        <div className = "ProjPage" name= "Projects" >
            <h1 className = "ProjBigTitle"> My Projects </h1>
            <div className = "ProjElements"> 
                <IndvProj 
                  title = "2048" 
                  desc = "2048 in C++!"  
                  src = "https://drive.google.com/uc?id=1zbAdIliskpQTuA8tl4k35_X1Gj2JWo3m"
                  longdesc = "NU CS 211 Final Project, written in C++ using the GE211 Game engine. "
                  link = "https://github.com/ellacutler/211FinalProject"/>
                <IndvProj 
                  title = "Microbit Laser Race" 
                  desc = " dash timer for Microbit Embedded System"
                  longdesc = "Working for the TIILT Lab @ NU, made a timer using MicroPython" 
                  link = "https://github.com/ellacutler/Microbit-Light-Race-Python"
                  />
                
            </div>
        </div>
        );
  }
  
}

export default ProjPage;
// <IndvProj title = "In progress" desc = "a" />