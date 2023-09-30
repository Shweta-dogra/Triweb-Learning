import React from "react";
import "./Contact.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import { motion } from "framer-motion";

function Contact(){

    return <div className="contacts">
        <div className="media">
            <motion.div className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <a target='_blank' href='https://www.linkedin.com/in/shweta-dogra-48b201178/'><LinkedInIcon/></a>
                </motion.div>
                <motion.div className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <a target='_blank' href='https://github.com/Shweta-dogra'><GitHubIcon/></a>
                </motion.div>
                <motion.div className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <a target="_blank" href="https://twitter.com/shweta6933"><TwitterIcon/></a>
                </motion.div>

            {/* <a target='_blank' href='https://www.linkedin.com/in/shweta-dogra-48b201178/'><LinkedInIcon/></a>
            <a target='_blank' href='https://github.com/Shweta-dogra'><GitHubIcon/></a>
            <a target="_blank" href="https://twitter.com/shweta6933"><TwitterIcon/></a> */}

        </div>
        <p><EmailIcon/><span>shweta6933@gmail.com</span></p>
        <p><PhoneIcon/><span>+91-8219325871</span></p>

    </div>
}
export default Contact;