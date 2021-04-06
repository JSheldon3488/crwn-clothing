import React from 'react';

import { CartItemDiv, ImageContainer, ItemDetailsDiv, NameSpan, PriceSpan } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemDiv>
    <ImageContainer src={imageUrl} alt='item' />
    <ItemDetailsDiv>
      <NameSpan>{name}</NameSpan>
      <PriceSpan>
        {quantity} x ${price}
      </PriceSpan>
    </ItemDetailsDiv>
  </CartItemDiv>
);

export default React.memo(CartItem);