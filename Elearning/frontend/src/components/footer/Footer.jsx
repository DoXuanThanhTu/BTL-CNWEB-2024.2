import React from 'react';
import './footer.css';

import { RiPhoneFill,RiFacebookBoxFill,RiYoutubeFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <p>
                &copy; 2025 Nền tảng học trực tuyến của bạn. <br />
                
            </p>

            <div className="social-links">
                <a href="">
                <RiPhoneFill />
                </a>
                <a href="">
                <RiFacebookBoxFill />
                </a>
                <a href="">
                <RiYoutubeFill />
                </a>

            </div>
        </div>
    </footer>
  )
}

export default Footer;