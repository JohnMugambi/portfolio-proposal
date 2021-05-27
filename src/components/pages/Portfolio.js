import React, { useEffect } from "react";
import { Background, Parallax } from 'react-parallax';
import './Portfolio.css';
import model2 from '../../static/model5.jpg';
import Footer from '../common/Footer';
import { Link } from "react-router-dom";

const Portfolio =()=>{
    const boxes = [
        {
            boxNumber : "01" ,
            linkTo : "/beauty" ,
            boxHeading : "beauty"
        },
        {
            boxNumber : "02" ,
            linkTo : "/commercial" ,
            boxHeading : "commercial"
        },
        {
            boxNumber : "03" ,
            linkTo : "/fashion" ,
            boxHeading : "fashion"
        }
    ]
    useEffect(() => {
        try {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        } catch (error) {
          // just a fallback for older browsers
          window.scrollTo(0, 0);
        }
      }, []);
    return(
        <>
            <div className="page portfolio-container">
                <div className="hero-container-portfolio">
                    <div className="cover-image">
                        <h3 className="hero-text">Portfolio</h3>
                        <p>Beauty, Fashion, Lifestyle</p>
                        <span class="scroll-btn">
	                        <a href="#">
                            <span class="mouse"><span>
                            </span></span>
                            </a>
                        </span>
                    </div>
                </div>
                <Parallax className="bg-image-parallax-container">
                    <Background className="bg-image-parallax">
                        <img src={model2} alt="fill murray" />
                    </Background>
                    <section className="section">
                        <div className="" style={{ height: 500 }}>
                            <div className="box-container">
                                <div className="box-div">
                                    <div className="box-contents">
                                        <div className="box-title">
                                            <p>01</p>
                                            <div className="horizontal-bar"></div> 
                                        </div>            
                                        <div className="box-link">
                                            <Link to="/beauty">
                                                <a href="#as">
                                                    <h6>Beauty</h6>
                                                </a>
                                            </Link>                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="box-div">
                                    <div className="box-contents">
                                        <div className="box-title">
                                            <p>02</p>
                                            <div className="horizontal-bar"></div> 
                                        </div>            
                                        <div className="box-link">
                                            <Link to="/commercial">
                                                <a href="#as">
                                                    <h6>commercial</h6>
                                                </a>
                                            </Link> 
                                        </div>
                                    </div>
                                </div>
                                <div className="box-div">
                                    <div className="box-contents">
                                        <div className="box-title">
                                            <p>03</p>
                                            <div className="horizontal-bar"></div> 
                                        </div>            
                                        <div className="box-link">
                                            <Link to="/fashion">
                                                <a href="#as">
                                                    <h6>fashion</h6>
                                                </a>
                                            </Link> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Parallax>  
                <Footer />  
            </div>            
            
        </>
    );
}

export default Portfolio;