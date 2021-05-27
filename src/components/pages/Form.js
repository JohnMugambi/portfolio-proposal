import React from 'react';

const Form =(props)=>{
    return(
        <form className="contact-form" onSubmit={props.onSubmit}>
            <input type="text"
                 name="person" 
                 placeholder="Name*" 
                 value={props.details.name} 
                 onChange={props.onChangeHandler} 
                 required
            />
            <input type="email" name="email" placeholder="Email*" value={props.details.email} onChange={props.onChange} required/>
            <input type="telephone" name="phone" placeholder="Phone*" value={props.details.telephone} onChange={props.onChange} required/>
            <input type="text" name="subject" placeholder="Subject*" value={props.details.subject} onChange={props.onChange} required/>
            <textarea type="text" name="message" placeholder="Message*" value={props.details.messageBody} onChange={props.onChange} required/>
            <input className="submit-btn" type="submit" value="Submit"name="submit-form"/>
        </form> 
                       
    );
}
export default Form;