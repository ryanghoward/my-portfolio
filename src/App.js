import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import LandingPage from "./components/LandingPage";
import { useEffect, useState } from "react";
// import {
//   Route,
//   Routes,
//   BrowserRouter as Router,
//   Navigate,
//   useNavigate,
// } from "react-router-dom";

function App() {
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  // const navigate = useNavigate();

  useEffect(() => {
    if (isFirstLoading) {
      setIsFirstLoading(false);
    }
  }, [isFirstLoading]);

  return (
    <>
      <div className='text-2xl font-bold'>
        <Navbar />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </>
  );
}

export default App;
