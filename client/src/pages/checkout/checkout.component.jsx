import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import CheckoutItemContainer from '../../components/checkout-item/checkout-item.container';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss'
import { CheckoutPageContainer, CheckoutHeaderContainer, CheckoutHeaderBlock, TotalContainer, WarningContainer } from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <CheckoutHeaderBlock>
                <span>Product</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Description</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Quantity</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Price</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Remove</span>
            </CheckoutHeaderBlock>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem => (
                <CheckoutItemContainer key={cartItem.id} cartItem={cartItem}/>
            ))
        }
        <TotalContainer>TOTAL: ${total}</TotalContainer>
        <WarningContainer>
            *Please use the following test credit card for payment*
            <br />
            4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
        </WarningContainer>
        <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);