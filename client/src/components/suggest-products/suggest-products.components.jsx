import React from 'react';

import CollectionItemContainer from '../collection-item/collection-item.container';

import { SuggestedProductsDiv, Title, SuggestedSectionDiv } from './suggest-products.styles';

const SuggestedProducts = ({ collection, currItemId }) => {
    const { routeName, items } = collection;

    return (
        <SuggestedSectionDiv>
            <Title>You may also like... </Title>
            <SuggestedProductsDiv>
            {
            items.slice(0,4)
                .filter(item => item.id !== currItemId)
                .map((item) => (
                    <CollectionItemContainer key={item.id} item={item} routeName={routeName} />
                ))
            }
        </SuggestedProductsDiv>
        </SuggestedSectionDiv>
    )
}

export default SuggestedProducts;