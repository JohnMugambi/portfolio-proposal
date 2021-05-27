import React,{ useEffect, useState } from "react";
import Footer from '../common/Footer';
import Form from './Form';
import model2 from '../../static/model1.jpg';
import './About.css';

const ContactPage = () => {
    const [formDetail, setFormDetail] = useState({
        person: "",
        email: "",
        phone: "",
        subject : "",
        message: ""
    });
    
    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log(formDetail);
    }
    
    const handleChange =(e)=>{
        const updateFormDetail = {...formDetail, [e.target.name] : e.target.value }
        setFormDetail(updateFormDetail);
    };
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
            <div className="page about-container">
                <div className="about-display">
                    <div className="about-image">
                        <img className="responsive" src={model2} alt="Me"/>
                    </div>
                    <div className="about-me-text">
                        <h6>Get In Touch</h6>
                        <p>Please use this contact form for all business inquiries. 
                            I look forward to hearing from you!</p>
                        <Form details={formDetail} onSubmit={handleSubmit} onChange={handleChange}/> 
                    </div>
                </div>
                <Footer/>
            </div>
            
        </>
    )
}

export default ContactPage;