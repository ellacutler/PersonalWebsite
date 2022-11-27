import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class ContactLink extends React.Component{
    render(){
        return(
            <a tabindex = "0" className="ContactText" aria-labeledby= {this.props.text} href= {this.props.link}>{this.props.text}</a>
        );
        
    }
}

class ContactPage extends React.Component{

  render(){ 
    return (
        <div className = "ContactPage">
            <h1 className = "ContactTitle"> Contact + Information </h1>
            <div className = "ContactItems" name= "Contact" >
                <ContactLink text="linkedin" link = "https://www.linkedin.com/in/ellacutler/" />
                <ContactLink text="github" link = "https://www.github.com/ellacutler/"  />
                <ContactLink text="resume" link = "https://docs.google.com/document/d/1V8PX6POEKk7EMiA8Cne6DQ5cBZNxZm13/edit?usp=sharing&ouid=111132776968113169659&rtpof=true&sd=true"  />
            
            </div>
        </div>
        );
  }
  
}
export default ContactPage;