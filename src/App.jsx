import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Estimate from "./pages/Estimate/Estimate";
import EmailSent from "./pages/EmailSent/EmailSent";
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/estimate" element={<Estimate />} />
        <Route path="/email-sent" element={<EmailSent />} />
      </Routes>
    </Router>
  )
}

export default App
