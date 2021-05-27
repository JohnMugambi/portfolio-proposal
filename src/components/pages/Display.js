import Carousel from 'react-bootstrap/Carousel';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import Footer from '../common/Footer';
import './Display.css'
import { images_url } from './portfolioImages';
import model from '../../static/model5.jpg';
import model1 from '../../static/model3.jpeg';
import model2 from '../../static/model1.jpg';


function Display(){
    let {category}= useParams();
    const pageCategory = category;
    const imageselection ={
      beauty : images_url[0],
      fashion : images_url[1],
      commercial : images_url[2]
    };
    const [imageGroup, setImageGroup] = useState({});
    const selectPageImages = ()=>{
      if(pageCategory === 'beauty'){
        setImageGroup(imageselection.beauty)
      }else if( pageCategory==='fashion'){
        setImageGroup(imageselection.fashion)
      }else{
        setImageGroup(imageselection.commercial)
      }
    }
    useEffect(() => {
      selectPageImages();
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
      });
    return(
        <>
        {/* {Object.values(imageGroup).forEach(imageLink =>{
          console.log(imageLink)
        })} */}
        <div className="display-container">
            <h3 className="display-hero-text">{category}</h3>
            <div className="display-body">
                <Carousel>
                  {Object.values(imageGroup).forEach(imageLink =>{
                    <Carousel.Item className="carousel-item">
                    <img
                    className="carousel-img"
                    src={imageLink}
                    alt="First slide"
                    />
                  </Carousel.Item>
                  })};  
                  <Carousel.Item className="carousel-item">
                    <img
                    className="carousel-img"
                    src={model}
                    alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                    className="carousel-img"
                    src={model2}
                    alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                    className="carousel-img"
                    src={model1}
                    alt="First slide"
                    />
                  </Carousel.Item>
                  
                </Carousel>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Display;