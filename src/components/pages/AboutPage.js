import React, { useEffect } from "react";
import Footer from '../common/Footer';
import './About.css';
import aboutimage from '../../static/modelimage.jpeg';

function AboutPage(){  
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
  
    return (
        <>
            {/* <Header /> */}
            <div className="page about-container">
                <div className="about-display">
                    <div className="about-image">
                        <img className="responsive" src={aboutimage} alt="Me"/>
                    </div>
                    <div className="about-me-text"> 
                        <h6>About Me</h6>
                        <p><i>Be exclusive. Be devine. Be yourself.</i></p>
                        <div>
                            <p>I am Ronnie Royals. I love being on camera.<br/>
                            I mainly shoot fashion and I also do creative projects like dress up.
                            I believe that modelling is not just about wearing fancy clothes, <br/>
                            it's about expressing how you feel through the outfit you are wearing.<br/>
                            The kind of outfits I wear on particular day channels my moods. 
                            I enjoy working with photographers and agencies that have a creative approach.
                            I bring my passion for modelling to every project I work on.</p>
                        </div>
                        <br/>
                        <div className="model-stats">
                            <p>My model stats:</p>
                            <ul className="stats-list">
                                <li>Height:5'4"</li>
                                <li> Eyes: Brown</li>
                                <li>Hair: Black</li>
                                <li>Bust: 31"</li>
                                <li>Waist: 28"</li>
                                <li>Hip: 44"</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
            
        </>
    )
}

export default AboutPage;