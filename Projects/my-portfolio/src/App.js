import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import Experience from "./Pages/Experience";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/experience" element={<Experience/>}/>
        {/* <Route path="/contact" element={<Contact/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
