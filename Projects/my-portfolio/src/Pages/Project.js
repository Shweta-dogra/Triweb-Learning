import React from "react";
import ProjectItem from "../Components/ProjectItem";
import {ProjectList} from "../List/ProjectList";

import "./Project.css";

function Project(){

    return<div className="projects">
        <h1>My Personal Projects</h1>
        <div className="projectList">
            {ProjectList.map((project, idx) => {
                return (
                    <ProjectItem id={idx} name={project.name} image={project.image} key={idx} />
                );
            })}
        </div>
    </div>
}
export default Project;