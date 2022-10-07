import React, { useState } from 'react';

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false); 
   
    
        return (
            <nav className='Navbar'>

                <h3 className='logo'>TEE_TECH</h3>

                <ul className={isMobile ? "wooo" : "nav-links"}
                onClick={() => setIsMobile(false)}
                >

                    <div className='home'>
                        <li>Home</li>
                    </div>

                    <div className='home'>
                        <li>Home</li>
                    </div>

                    <div className='home'>
                        <li>Home</li>
                    </div>

                    <div className='home'>
                        <li>Home</li>
                    </div>
                   
                </ul>

                <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
                        {isMobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                </button>
            </nav>
        );
    
}
 
export default Navbar;