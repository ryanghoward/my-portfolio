import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
// import RGHgif from "./assets/RGH.gif";
// import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <div className='text-2xl font-bold'>
        <Router>
          <Navbar />
        </Router>
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </>
  );
}

export default App;
