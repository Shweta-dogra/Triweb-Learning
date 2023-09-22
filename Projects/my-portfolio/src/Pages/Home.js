import React from 'react';
import "./Home.css";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
function Home(){

    return <div className="home">
        <div className="about">
            <h2>Hi, I am Shweta</h2>
            <div className="summary">
                <p>Passionate about web development technologies.</p>
                <LinkedInIcon/>
                <EmailIcon/>
                <GitHubIcon/>
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
            </ol>
        </div>
    </div>
}
export default Home;