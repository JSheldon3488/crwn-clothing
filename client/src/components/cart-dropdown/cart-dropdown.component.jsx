import React, {useEffect, useRef } from 'react';

import CartItem from '../cart-item/cart-item.component';
import { CartDropdownDiv, CartItemsDiv, EmptyMessageSpan, CartDropdownButton } from './cart-dropdown.styles';


const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
    const myRef = useRef();

    const handleClickOutside = event => {
        if (myRef.current && !myRef.current.contains(event.target)) {
            toggleCartHidden();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside)
    })

    return (
    <CartDropdownDiv ref={myRef}>
        <CartItemsDiv >
        { cartItems.length ?
            cartItems.map(item => (
                <CartItem key={item.id} item={item} />
            ))
            : (<EmptyMessageSpan>Your cart is empty</EmptyMessageSpan>)
        }
        </CartItemsDiv>
        <CartDropdownButton onClick={() => {
            history.push('/checkout');
            toggleCartHidden();
        }}>
            GO TO CHECKOUT
        </CartDropdownButton>
    </CartDropdownDiv>
    )
}

export default CartDropdown;