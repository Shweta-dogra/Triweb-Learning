import React from "react";
import {verticalTimeLine, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Experience.css";

function Experience(){

    return<div className="exp">
       <div className="experience">
        <h2>MERN Stack Developer Intern</h2>
        <h3>Triweb Genesis</h3>
        <h4>(08/2023 - present)</h4>
        <h4>Roles & Responsibilities</h4>
        <ul className="list">
            <li>Learning different skills like MySQL, JAVASCRIPT, NodeJS, React.JS, Express.JS, MongoBD, JIRA.</li>
            <li>Developed various projects.</li>
        </ul>
       </div>

       <div className="experience">
        <h2>Research & Support Executive (R&D)</h2>
        <h3>AAR GEE Automation Pvt. Ltd. Mohali Pb.</h3>
        <h4>(09/2019 - 08/2022)</h4>
        <h4>Roles & Responsibilities</h4>
        <ul className="list">
            <li>Developed various projects based on PLC Ladder Logic, HMI Programming, VFD's and Servo Systems.</li>
            <li>My responsibilities were Inhouse Project Handling, Error Handling, Resolving Technical Issues, Customer Support.</li>
        </ul>
       </div>


    </div>
}
export default Experience;