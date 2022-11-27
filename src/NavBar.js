import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import ProjPage from './Proj';


class NavBarText extends Component{
    render() {
     return  <Link tabindex= "0 "
     onClick={scroller.scrollTo({duration:8000, delay:1000, to: this.props.scrollname, smooth:'easeInCubic'})} 
     smooth='easeInCubic' to={this.props.scrollname} aria-labeledby= {this.props.type} className = "NavBarText"> {this.props.type} 
     </Link>;
    }
  } 
  
class NavBar extends Component{
    
    render(){
        return(
      
        <header className ="NavBar">
            <NavBarText type= "Contact" scrollname="Contact"  />
            <NavBarText type= "Projects" scrollname = "Projects"  />
            <NavBarText type= "Introduction" scrollname = "OpeningPage" />
        </header>
      
        );
    }
}
export default NavBar;