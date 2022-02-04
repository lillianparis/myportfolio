import './App.css';
import Navbar from "../src/Components/Navbar/navbar";
import Landing from "../src/Pages/Landing/landing";

import Contact from "../src/Pages/Contact/contact";
import Developments from "../src/Pages/Developments/developments";
import Resume from "../src/Pages/Resume/resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParticlesBg from 'particles-bg';


function App() {
  return (
    <>
      <div className="cobweb">
        <ParticlesBg type="cobweb" bg={true} />
      </div>
      <Navbar />
      <Router>
        <Routes>

          <Route exact path="/" element={<Landing />} />
          <Route exact path="/Developments" element={<Developments />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Resume" element={<Resume />} />
        </Routes>
      </Router>


    </>
  );
}

export default App;
