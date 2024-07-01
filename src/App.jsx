import { Navbar } from "./components/pages/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./components/pages/Main.jsx";
import { Gallery } from "./components/pages/Gallery.jsx";
import { Projects } from "./components/pages/Projects.jsx";
import {Certific} from "./components/pages/Certific.jsx";
import {Contact} from "./components/pages/Contact.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
         <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/certification" element={<Certific/>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
