import React from 'react';
import { connect } from 'react-redux'

import { selectCollectionItem, selectCollection } from '../../redux/shop/shop.selectors'

import ProductDisplay from '../../components/product-display/product-display.component'


const ProductPage = ({ item }) => {
    console.log(item);
    return (
        <ProductDisplay {...item} />
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
    item: selectCollectionItem(ownProps.match.params.collectionId, ownProps.match.params.itemId)(state)
})

export default connect(mapStateToProps)(ProductPage);