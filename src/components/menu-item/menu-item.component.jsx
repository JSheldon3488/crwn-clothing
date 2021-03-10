import React from 'react';

import './menu-item.styles.scss'

const MenuItem = ({ title, imgUrl, size }) => (
    <div 
        className={`menu-item ${size}`}
        style={{
            backgroundImage: `url(${imgUrl})`
        }}
    >
        <div className='content'>
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOW NOW</span>
        </div>
    </div>
)

export default MenuItem;