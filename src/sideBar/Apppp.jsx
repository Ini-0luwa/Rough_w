import React, { useState } from 'react';

const Apppp = () =>{

    const [isMobile, setIsMobile] = useState(true) 

    return(
        <>        <button className={isMobile ? 'hh' : 'navbtn'} onClick={() => setIsMobile(!isMobile)}>
                     {isMobile ? <i id='sec' className='fa fa-bars'></i> : <i className='fa fa-bars'></i>}
                  </button><nav className={isMobile ? 'Navbar' : 'mm'}>

                <h3 className='logo'>TEE_TECH <i className="fa fa-twitter"></i></h3>

                <ul className={isMobile ? 'newNav' : 'nav-links'} onClick={() => setIsMobile(false)}>
                    <li> <i className='fa fa-home'></i> Home</li>
                    <li><i className='fa fa-dashboard'></i> Dashboard</li>
                    <li><i className="fa fa-chrome"></i> Chrome</li>
                    <li><i className="fa fa-opera"></i> Services</li>
                    <li><i className="fa fa-link"></i> link</li>
                    <li className='ser'><i className="fa fa-phone"></i> Contact Us</li>
                </ul>


            </nav></>
    );
} 

export default Apppp;