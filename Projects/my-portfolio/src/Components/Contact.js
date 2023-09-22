import React from "react";
import "./Contact.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';

function Contact(){

    return <div className="contacts">
        <div className="media">
            <LinkedInIcon/>
            <GitHubIcon/>
            <TwitterIcon/>

        </div>
        <p><EmailIcon/><span>shweta6933@gmail.com</span></p>
        <p><PhoneIcon/><span>+91-8219325871</span></p>

    </div>
}
export default Contact;