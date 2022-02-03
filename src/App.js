import './App.css';
import Navbar from "../src/Components/Navbar/navbar";
import Landing from "../src/Pages/Landing/landing";
import Footer from "../src/Components/Footer/footer";
import Contact from "../src/Pages/Contact/contact";
import Developments from "../src/Pages/Developments/developments";
import Resume from "../src/Pages/Resume/resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>

          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/developments" element={<Developments/>} />
          <Route exact path="/Contact" element={<Contact/>} />
          <Route exact path="/Resume" element={<Resume/>} />
        </Routes>
      </Router>
 
      <Footer />
    </>
  );
}

export default App;
