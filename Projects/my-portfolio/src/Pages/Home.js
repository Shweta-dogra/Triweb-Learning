import React from 'react';
import "./Home.css";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
function Home(){

    return <div className="home">
        <div className="about">
            <h2>
             <span>Hi, </span>&nbsp;
             <span>I </span>&nbsp;
             <span>am </span>&nbsp;
             <span>Shweta</span>
            </h2>
            {/* <h2>Hi, I am Shweta</h2> */}
            <div className="summary">
                <p>
                    <span>Passionate</span>&nbsp;
                    <span>about </span>&nbsp;
                    <span>web </span>&nbsp;
                    <span>development </span>&nbsp;
                    <span>technologies</span>
                    </p>
                <a target='_blank' href='https://www.linkedin.com/in/shweta-dogra-48b201178/'><LinkedInIcon/></a>
                <a target='_blank' href=''><EmailIcon/></a>
                <a target='_blank' href='https://github.com/Shweta-dogra'><GitHubIcon/></a>
                
            </div>
        </div>
        <div className="skills">
            <h1>Skills</h1>
            <ol className='skill-list'>
                <li className='skill-item'>
                    <h2>Frontend: </h2>
                    <span>React JS, Redux, HTML, CSS, Bootstrap, MaterialUI</span>
                </li>
                <li className='skill-item'>
                    <h2>Backend: </h2>
                    <span>Node JS, ExpressJS, MySQL, MongoDB</span>
                </li>
                <li className='skill-item'>
                    <h2>Languages: </h2>
                    <span>Javascript, Java, Typescript</span>
                </li>
                <li className='skill-item'>
                    <h2>Additional SKills: </h2>
                    <span>DSA, Git, JIRA</span>
                </li>
            </ol>
        </div>
    </div>
}
export default Home;