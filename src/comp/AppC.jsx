import React, { useState } from 'react';

const AppC = () => {

    const [isMobile, setIsMobile] = useState(false)
    return(
       <nav>
           <h3 className='logo'>TEE_TECH</h3>

           <ul className={isMobile ? 'newlis' : 'lis'} onClick={() => setIsMobile(false)}>
               <li>Home</li>
               <li>Services</li>
               <li>Like our Page</li>
               <li>Follow us</li>
               <li> Yeah</li>
           </ul>

           <button className='dropbtn' onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
           </button>
       </nav>
    );
}

export default AppC;