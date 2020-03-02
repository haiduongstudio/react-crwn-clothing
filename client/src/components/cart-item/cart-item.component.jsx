import React from 'react';

import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
  CartItemName
} from './cart-item.style';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <CartItemName>{name}</CartItemName>
        <span>
          {quantity} x {price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default React.memo(CartItem);
