import React from 'react'
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import { ItemImage, PageDiv, ItemDiv, ItemDetailsDiv, NameSpan, PriceSpan, DescriptionSpan, AddButton } from './product-display.styles'


const ProductDisplay = ({ price, name, imageUrl, addItem }) => (
    <PageDiv>
        <ItemDiv>
            <ItemImage className='background-image' imageUrl={imageUrl} />
            <ItemDetailsDiv>
                <NameSpan>{name}</NameSpan>
                <PriceSpan>${price}</PriceSpan>
                <DescriptionSpan>This is a fake description of the product. Currently the data model does not support item descriptions.
                The individual item descrption will go here once the data model is updated and item descriptions for each individual item are updated.
                </DescriptionSpan>
                <AddButton onClick={() => addItem({price, name, imageUrl})}>Add to Cart</AddButton>
            </ItemDetailsDiv>
        </ItemDiv>
    </PageDiv>
)

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(ProductDisplay);