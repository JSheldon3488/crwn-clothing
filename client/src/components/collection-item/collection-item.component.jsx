import React from 'react';

import {
  CollectionItemDiv,
  CollectionFooterDiv,
  AddButton,
  BackgroundImage,
  NameSpan,
  PriceSpan
} from './collection-item.styles';


const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemDiv>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterDiv>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>${price}</PriceSpan>
      </CollectionFooterDiv>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemDiv>
  );
};


export default CollectionItem;