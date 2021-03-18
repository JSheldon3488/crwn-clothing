import React from 'react';

import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem: { imageUrl, name, quantity, price }}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <div className='quantity'>
            <span >&#10096; {quantity} &#10097;</span>
        </div>
        <span className='price'>${price}</span>
        <div className='remove-button'>&#10006;</div>
    </div>
);

export default CheckoutItem;