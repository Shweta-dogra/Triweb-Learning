import { Link , useLocation} from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar(){
    const[expandNav, setExpandNav] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNav(false);
    }, [location]);

    return <div className="navbar" id={expandNav? "open": "close"}>
        <div className="togglebtn">
            <button onClick={()=>{setExpandNav((prev)=> !prev)}}><ReorderIcon/></button>
        </div>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience & Trainings</Link>
        </div>
    </div>
}
export default Navbar;