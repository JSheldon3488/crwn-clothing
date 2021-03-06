import React from 'react';
import { connect } from 'react-redux'

import { selectCollectionItem, selectCollection } from '../../redux/shop/shop.selectors';
import ProductDisplay from '../../components/product-display/product-display.component'
import SuggestedProducts from '../../components/suggest-products/suggest-products.components';

import { PageDiv } from './product-page.styles'


const ProductPage = ({ item, collection }) => (
    <PageDiv>
        <ProductDisplay {...item} />
        <SuggestedProducts collection={collection} currItemId={item.id}/>
    </PageDiv>
)

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
    item: selectCollectionItem(ownProps.match.params.collectionId, ownProps.match.params.itemId)(state),
})

export default connect(mapStateToProps)(ProductPage);