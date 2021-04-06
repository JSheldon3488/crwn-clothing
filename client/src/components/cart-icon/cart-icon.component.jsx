import React from 'react';

import { ItemCountSpan, ShoppingIcon, CartIconDiv } from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconDiv onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCountSpan>{itemCount}</ItemCountSpan>
    </CartIconDiv>
);

export default CartIcon;