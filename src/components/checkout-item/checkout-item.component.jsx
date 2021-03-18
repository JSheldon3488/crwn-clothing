import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem, clearItem }) => {
    const {imageUrl, name, quantity, price } = cartItem;
    
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <span >&#10096; {quantity} &#10097;</span>
            </div>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10006;</div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    clearItem: (item) => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);