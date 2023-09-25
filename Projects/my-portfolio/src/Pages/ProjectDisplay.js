import React from "react";
import { useParams } from "react-router-dom";
import {ProjectList} from "../List/ProjectList";
import GitHubIcon from '@mui/icons-material/GitHub';
import "./ProjectDisplay.css";

function ProjectDisplay(){

    const { id } = useParams();
    const project = ProjectList[id];

    return <div className="projects">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Tech Stack:</b> {project.skills}
      </p>
      <GitHubIcon />
    </div>
}
export default ProjectDisplay;