import { Link } from "react-router-dom";
import "./Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar(){

    return<div className="navbar">
        <div className="togglebtn">
            <button><ReorderIcon/></button>
        </div>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
        </div>
    </div>
}
export default Navbar;