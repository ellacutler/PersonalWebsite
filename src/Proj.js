import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import IndvProj from './IndvProj';


class ProjPage extends React.Component{
  render(){ 
    return (
        <div className = "ProjPage" name= "Projects" >
            <h3 className = "ProjBigTitle"> My Projects </h3>
            <div className = "ProjElements"> 
                <IndvProj title = "2048" desc = "2048 in C++!" />
                <IndvProj title = "Microbit Laser Race" desc = "a" />
                <IndvProj title = "In progress" desc = "a" />
            </div>
        </div>
        );
  }
  
}

export default ProjPage;