import styled from 'styled-components'
import { ReactComponent as shoppingBagIcon } from '../../assets/shopping-bag.svg';

export const ItemCountSpan = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`;
ItemCountSpan.displayName = 'ItemCountStyles';

export const ShoppingIcon = styled(shoppingBagIcon)`
    width: 24px;
    height: 24px;
`;
ShoppingIcon.displayName = 'ShoppingIconStyles';

export const CartIconDiv = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
CartIconDiv.displayName = 'CartIconStyles';
