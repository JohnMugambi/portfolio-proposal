import React, {useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import './Header.css';

function Header (){
    const activeStyle={
        color: 'rgb(172, 138, 76)'
    }
    // const linkStyle={
    //     textDecoration : "none",
    //     color : "whitesmoke"
    // };
    const [click, setClick] = useState(false);

    const closeMobileMenu = () => {
        setClick(false);
    }
    const handleClick=()=>{
        setClick(true);
    };
    return (
        <>
        <nav>
            <div className={click ? "header-logo active" : "header-logo"}>
                <Link  to="/" onClick={closeMobileMenu}><h6 className="name-logo"><span className="logo-name-a ">Ronnie</span><span className="last-name-border">Royal</span></h6></Link>
            </div>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times ' : 'fas fa-bars'} />
            </div>
            <div className={click ? "menu-links active" :"menu-links"}>
                <NavLink activeStyle={activeStyle} className="menu-tags" exact to="/" onClick={closeMobileMenu}>Home</NavLink>  
                <span className="braces">{" | "}</span>
                <NavLink activeStyle={activeStyle} className="menu-tags" to="/portfolio" onClick={closeMobileMenu}>Portfolio</NavLink> 
                <span className="braces">{" | "}</span>
                <NavLink activeStyle={activeStyle} className="menu-tags" to="/about" onClick={closeMobileMenu}>About</NavLink>
                <span className="braces">{" | "}</span>
                <NavLink activeStyle={activeStyle} className="menu-tags" to="/contact" onClick={closeMobileMenu}>Contact</NavLink>
            </div>
 
        </nav>
        </>
    );
};

export default Header;