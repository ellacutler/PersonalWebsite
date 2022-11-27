import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import "animate.css";





class IndvProj extends React.Component{
  
  moreInformation =(title, desc) => () =>
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
     }})
  }
  render(){ 
    return (
        <button 
          onClick = {this.moreInformation(this.props.title, this.props.desc)}
          className = "Proj" >
            <h1 aria-labeledby= {this.props.title} className = "ProjTitle"> {this.props.title} </h1>
            <img aria-labeledby= {this.props.imgdesc}  src="https://etc.usf.edu/presentations/extras/photo_frames/photo_frames/13/15/15-768H.png" className="ProjImg" alt="logo" />
            <h3 className = "ProjDesc"> {this.props.desc} </h3>
            
        </button>
        );
  }
  
}

export default IndvProj;