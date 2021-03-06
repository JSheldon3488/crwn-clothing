import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownDiv = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
`;
CartDropdownDiv.displayName = 'CartDropdownStyles';

export const CartDropdownButton = styled(CustomButton)`
    margin-top: auto;
`;
CartDropdownButton.displayName = 'CartDropdownButtonStyles';


export const CartItemsDiv = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`
CartItemsDiv.displayName = 'CartItemsStyles';


export const EmptyMessageSpan = styled.span`
    font-size: 18px;
    margin: 50px auto;
`
EmptyMessageSpan.displayName = 'EmptyMessageStyles';

