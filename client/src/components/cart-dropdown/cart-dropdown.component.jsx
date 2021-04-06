import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import { CartDropdownDiv, CartItemsDiv, EmptyMessageSpan, CartDropdownButton } from './cart-dropdown.styles';


const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
    <CartDropdownDiv>
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

export default CartDropdown;