import styled from 'styled-components'

export const CartItemDiv = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    margin-bottom: 15px;
`;
CartItemDiv.displayName = 'CartItemStyles';

export const ImageContainer = styled.img`
    width: 30%; 
`;
ImageContainer.displayName = 'ImageContainerStyles';

export const ItemDetailsDiv = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
`;
ItemDetailsDiv.displayName = 'ItemDetailsStyles';

export const NameSpan = styled.span`
    font-size: 16px;
`;
NameSpan.displayName = 'NameStyles'

export const PriceSpan = styled.span`
`;
PriceSpan.displayName = 'PriceStyles'