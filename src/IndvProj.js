import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import "animate.css";





class IndvProj extends React.Component{
  
  moreInformation =(title, desc, ghlink) => () =>
  {
   
  
    Swal.fire({
      
      title: title,
      text:desc,
      showConfirmButton: false,
      showCloseButton: true,
      showClass: {
        popup: "animate__animated animate__fadeIn"
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut'
     },
     
      /* html: <a href= {link} >Here's a link to the GitHub Repository!</a>,*/  })
  }
  render(){ 
    return (
      <div>
        <button 
          onClick = {this.moreInformation(this.props.title, this.props.longdesc, this.props.link)}
          className = "Proj" >
            <h1 aria-labeledby= {this.props.title} className = "ProjTitle"> {this.props.title} </h1>
            <img aria-labeledby= {this.props.imgdesc}  src = {this.props.src} className="ProjImg" alt="logo" />
            <h3 className = "ProjDesc"> {this.props.desc} </h3>
            <a  tabindex = "0" className = "ProjLink" href = {this.props.link}> github repo</a>
        </button>
       
            
      </div>
        );
  }
  
}

export default IndvProj;