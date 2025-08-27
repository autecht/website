import './App.css';
import {Routes, Route } from 'react-router-dom';
import {lazy, Suspense} from 'react';
import Loading from './Loading';




const Home = lazy(() => import('./pages/Home'))  ;
const Projects = lazy (() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Experience = lazy(() => import('./pages/Experience'))




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
      <div className = "filler"></div>
    <Routes>
      <Route path="/" element = {
          <Suspense fallback={<Loading />}>
            <Home />
        </Suspense>
        } />
      <Route path = "/projects" element = {
        <Suspense fallback = {<Loading />}>
          <Projects />
        </Suspense>
      }></Route>
      <Route path = "/contact" element = {
        <Suspense fallback = {<Loading />}>
          <Contact />
        </Suspense>
      }></Route>
      <Route path = "/experience" element = {
        <Suspense fallback = {<Loading />}>
          <Experience />
        </Suspense>
        }></Route>


        <Route path="*" element={<><Loading /> </>} />
    </Routes>
    <div className = "filler"></div>
    <div className="footer"></div>
    </div>
    
  );
}

export default App;
