import React from 'react';
import { CheckoutItemDiv, ImageContainerDiv, TextSpan, QuantityContainer, RemoveButtonDiv} from './checkout-item.styles';


const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const {imageUrl, name, quantity, price } = cartItem;
    
    return (
        <CheckoutItemDiv>
            <ImageContainerDiv>
                <img src={imageUrl} alt='item' />
            </ImageContainerDiv>
            <TextSpan>{name}</TextSpan>
            <QuantityContainer>
                <div className='remove' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div className= 'add' onClick={() => addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <TextSpan>${price}</TextSpan>
            <RemoveButtonDiv onClick={() => clearItem(cartItem)}>&#10006;</RemoveButtonDiv>
        </CheckoutItemDiv>
    );
}

export default CheckoutItem;