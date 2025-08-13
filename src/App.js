import './App.css';
import {Routes, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Experience from './Experience';

function App() {
  return (
    <div className = "container">
    <div className="header">

        <div className="menu-container">
          <span className="name"> Arthur Utecht </span>
        </div>
        <div className="menu-container">
          <a href="#/" className="menu">About</a>
          <a href="#/projects" className="menu">Projects</a>
          <a href="#/experience" className="menu">Experience</a>
          <a href="#/contact" className="menu">Contact</a>

        </div>
      </div>
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path = "/projects" element = {<Projects />}></Route>
      <Route path = "/contact" element = {<Contact />}></Route>
      <Route path = "/experience" element = {<Experience />}></Route>
    </Routes>
    <div className="footer"></div>
    </div>
    
  );
}

export default App;
