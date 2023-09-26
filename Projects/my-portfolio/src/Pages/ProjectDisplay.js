import React from "react";
import { useParams } from "react-router-dom";
import {ProjectList} from "../List/ProjectList";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import "./ProjectDisplay.css";

function ProjectDisplay(){

    const { id } = useParams();
    const project = ProjectList[id];

    return <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Tech Stack:</b> {project.skills}
      </p>
      <p><b>Features: </b>{project.feature}</p>
      <a target="_blank" href={project.githubLink}><GitHubIcon /></a>
      <a target="_blank" href={project.deployLink}><LinkIcon/></a>
      
    </div>
}
export default ProjectDisplay;