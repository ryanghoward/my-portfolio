import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import RGHgif from "./assets/RGH.gif";
import LandingPage from "./components/LandingPage";
// import { useEffect, useState } from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  // Navigate,
  // useNavigate,
} from "react-router-dom";

function App() {
  // const LandingPage = () => {
  //   return (
  //     <div>
  //       <img
  //         src={RGHgif}
  //         alt='Logo'
  //         style={{ width: "100px", height: "80px" }}
  //       />
  //       <button to='/'>Enter site</button>
  //     </div>
  //   );
  // };

  return (
    <>
      <div className='text-2xl font-bold'>
        <Router>
          <Routes>
            <Route exact path='/' element={<LandingPage />} />
          </Routes>
          <Navbar />
          <Home to='/' />
          <About />
          <Skills />
          <Work />
          <Contact />
        </Router>
      </div>
    </>
  );
}

export default App;
