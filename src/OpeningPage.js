import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import NavBar from './NavBar.js';
import { Link } from 'react-router-dom';
//import picture from 'public/Picture.png';


function OpeningPage() {
  class NavBarText extends Component{
    render() {
     return <p className = "NavBarText"> {this.props.type} </p>;
    }
  }
  return (
    <div className="App" name = "OpeningPage" >
      <div className="App-header">
       
        <header className="OpenPage" >
        <div className="IntroInformation" >
          <h1 className= "Title"> Hi! My name is Ella. </h1>
          <h1 className= "SubTitle">I'm a sophomore studying Computer Science + Sociology @ Northwestern University  </h1>
          <h1 className= "SubTitle">I’m interested in the intersections between social sciences + technology & accessible design 
(placeholder)</h1>
<h1 className= "SubTitle">I love the outdoors and finding more cafes in my hometown of Chicago, IL! </h1>
<Link to= "/testing" className = "ContactText">learn more about me here!  </Link>
          
        </div>
        <div className= "IntroPicture"> 
        <img className = "MyImg" aria-labeledby="Picture of Ella Cutler in Martha's Vineyard, MA. at Sunset" src= "https://drive.google.com/uc?id=1hcNl3yOe2AhSEsUjl-GGjBudatnxA7n1"/>
        
        </div>
       </header>
      </div>
    </div>
  );
}

export default OpeningPage;