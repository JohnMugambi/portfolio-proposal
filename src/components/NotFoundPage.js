import React from 'react';
import { Link } from "react-router-dom";

const NotFoundPage =()=>{
    return(
        <div className="page">
            <h6 style={{color:'black'}}>Page Not Found</h6>
            <Link to="/">Home</Link>
        </div>
    );
}
export default NotFoundPage;