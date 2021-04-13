import React from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { CollectionsOverviewStylesContainer } from './collection-overview.styles';


const CollectionsOverview = ({ collections }) => {
    console.log(collections)
    return (
    <CollectionsOverviewStylesContainer>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </CollectionsOverviewStylesContainer>
    );
}

export default CollectionsOverview;