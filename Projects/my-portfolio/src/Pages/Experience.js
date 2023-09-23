import React from "react";
import {verticalTimeLine, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience(){

    return<div className="exp">
       <div className="experience">
        <h2>MERN Stack Development Intern</h2>
        <h3>Triweb Genesis</h3>
        <h4>Roles & Responsibilities</h4>
        <ol className="list">
            <li>Learning different skills like MySQL, JAVASCRIPT, NodeJS, React.JS, JIRA.</li>
            <li>Developed various projects.</li>
        </ol>
       </div>

       <div className="experience">
        <h2>Research & Support Executive</h2>
        <h3>AAR GEE Automation Pvt. Ltd. Mohali Pb.</h3>
        <h4>Roles & Responsibilities</h4>
        <ol className="list">
            <li>Developed various projects based on PLC Ladder Logic, HMI Programming, VFD's and Servo Systems.</li>
            <li>My responsibilities were Inhouse Project Handling, Error Handling, Resolving Technical Issues, Customer Support.</li>
        </ol>
       </div>

       <div className="experience">
        <h2>Automation Engineer</h2>
        <h3>AICTE</h3>
        <h4>Roles & Responsibilities</h4>
        <ol className="list">
            <li>Learned various skills and developed different projects based on PLC & HMI.</li>
            <li>Worked on Seimens products & TIA portal</li>
        </ol>
       </div>

       <div className="experience">
        <h2>Automation Engineer</h2>
        <h3>Global Automation & Pneumatics</h3>
        <h4>Roles & Responsibilities</h4>
        <ol className="list">
            <li>Learned various skills and developed different projects based on PLC & HMI.</li>
            <li>Worked on omron & Schenieder products</li>
        </ol>
       </div>
    </div>
}
export default Experience;