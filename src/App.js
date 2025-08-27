import './App.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loading from './Loading';
import Header from './components/Header';
import Footer from './components/Footer';




const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Experience = lazy(() => import('./pages/Experience'));
const NotFound = lazy(() => import("./pages/NotFound"));




function App() {
  return (
    <div className="container">
      <Header/>
      
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        } />
        <Route path="/projects" element={
          <Suspense fallback={<Loading />}>
            <Projects />
          </Suspense>
        }></Route>
        <Route path="/contact" element={
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        }></Route>
        <Route path="/experience" element={
          <Suspense fallback={<Loading />}>
            <Experience />
          </Suspense>
        }></Route>

        <Route path="*" element={<><NotFound /> </>} />
      </Routes>
      <Footer></Footer>
    </div>

  );
}

export default App;
