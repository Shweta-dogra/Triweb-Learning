import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import Experience from "./Pages/Experience";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Education from "./Pages/Education";
import ProjectDisplay from "./Pages/ProjectDisplay";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/project/:id" element={<ProjectDisplay />} />
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/education" element={<Education/>}/>
      </Routes>
      <Contact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
