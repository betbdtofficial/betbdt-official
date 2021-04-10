import React from 'react';
import footerLogo from '../../image/Untitled-1.png';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer-section">
            <img src={footerLogo} width="150px" className="img-fluid" alt=""/> <br/>
            <span>Copyright &copy; 2021 - {(new Date().getFullYear())} BetBdt - All Rights Reserved.</span>
        </div>
    );
};

export default Footer;