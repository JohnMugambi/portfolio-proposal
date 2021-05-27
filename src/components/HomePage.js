import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import fblogo from '../static/icons/tik-tok.png';
import shareIcon from '../static/icons/share.png';
import iglogo from '../static/icons/ig.png';

const HomePage =()=>{
    const SOCIAL_LINKS = {
        tk : "https://www.tiktok.com/@ronnieroyals2",
        ig : "https://www.instagram.com/__roy.als/",
        share : ""
    }
    return(
        <div className="page container-home">
            <div className="showcase">
                <div className="intro-container">
                    {/* <div className="logo-name">
                        <Link to="/"><h6>Ronnie Royal</h6></Link>
                    </div> */}
                    <div className="hero-container">
                        <div className="display">
                            <h6>RONNIE ROYAL</h6>
                            <Link to="portfolio"><p>View My Portfolio</p></Link>
                        </div>
                        <div className="sidebar">
                            <div className="social-links">
                                <a href={SOCIAL_LINKS.ig}><img src={iglogo} alt="Instagram"/></a>
                                <a href={SOCIAL_LINKS.tk}><img src={fblogo} alt="TikTok"/></a>
                                <a href={SOCIAL_LINKS.share}><img src={shareIcon} alt="Share"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;