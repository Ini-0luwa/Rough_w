import React, { useState } from 'react';
 
const Navcc = () => {
    let [isMobile, isSetMobile] = useState(false)
    return (  
        <nav className='box'>
            <p className="log">
                Logo
            </p>

            <ul onClick={() => isSetMobile(false)} className={isMobile ? 'naew'  : 'list'}>
                <li>Home</li>
                <li>Services</li>
                <li>Goods</li>
                <li>Shop</li>
                <li className='lastList'>Download</li>
            </ul>

            <button onClick={() => isSetMobile(!isMobile)} className="dbtn">
                {isMobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>

        </nav>
    );
}
 
export default Navcc;