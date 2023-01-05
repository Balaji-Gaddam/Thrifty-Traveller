import "./styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/routers/Hero";
import Signup from "./components/routers/signup";
import Home from "./components/routers/Home";
import About from "./components/routers/About";
import Service from "./components/routers/Service";
import Contact from "./components/routers/Contact";
import India from "./components/India";
import Srilanka from "./components/Srilanka";
import Bhutan from "./components/Bhutan";
import Nepal from "./components/Nepal";
import Maldivs from "./components/Maldivs";
import Japan from "./components/Japan";
import AndhraPradesh from "./components/AndhraPradesh";

import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/India" element={<India />} />
        <Route path="/Srilanka" element={<Srilanka />} />
        <Route path="/Bhutan" element={<Bhutan />} />
        <Route path="/Nepal" element={<Nepal />} />
        <Route path="/Maldivs" element={<Maldivs />} />
        <Route path="/Japan" element={<Japan />} />
        <Route path="/Andhrapradesh" element={<AndhraPradesh />} />
      </Routes>

      <Navbar />
      <Footer />
    </div>
  );
}
