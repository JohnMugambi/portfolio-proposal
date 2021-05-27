import React from 'react';
import './Header.css';
import tiktok from '../../static/icons/tik-tok.png';
import igIcon from '../../static/icons/ig.png';
import shareIcon from '../../static/icons/share.png';

const Footer = () =>{
    const SOCIAL_LINKS = {
        tk : "https://www.tiktok.com/@ronnieroyals2",
        ig : "https://www.instagram.com/__roy.als/",
        share : "",
        mugz: "https://johnmugambi.github.io/"
    }
    return(
        <>
            <footer>
                <div className="footer-social-icons">
                    <div className="footer-social-links">
                        <a href={SOCIAL_LINKS.ig}><img src={igIcon} alt="Instagram"/></a>                        
                        <a href={SOCIAL_LINKS.tk}><img src={tiktok} alt="TikTok"/></a>
                        <a href={SOCIAL_LINKS.share}><img src={shareIcon} alt="Share"/></a>
                    </div>
                </div>
                <div>
                    <p> &#169; Ron Royal 2021</p>
                </div>
                <div>
                    <p>Designed by <a href={SOCIAL_LINKS.mugz}>Mugambi</a></p>
                </div>
            </footer>
        </>
    );
}
export default Footer;