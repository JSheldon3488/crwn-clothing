import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component'


export const ItemDiv = styled.div`
    display: block;
    width: 80%;
    margin: auto;

    @media screen and (min-width: 900px) {
        display: grid;
        grid-template-columns: repeat(2, minmax(360px, 1fr));
        gap: 10px;
    }
`;


export const ItemImage = styled.div`
    height: 480px;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};

    @media screen and (min-width: 900px) {
        margin: 0;
    }

    @media screen and (min-width: 1250px) {
        height: 600px;

    }
`;
ItemImage.displayName = "ItemImageStyles"


export const ItemDetailsDiv = styled.div`
    @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: 11% 11% 15% auto;
    }
`;

export const NameSpan = styled.h1`
    font-size: 250%;
    font-weight: 500;    
    margin-top: 10px;
    margin-bottom: 0px;

    @media screen and (min-width: 900px) {
        grid-row: 1;
        grid-column: span 2 / auto;
    }
`;

export const PriceSpan = styled.span`
    display: block;
    font-size: 150%;
    grid-row: 2;
    margin-bottom: 25px;
`;

export const DescriptionSpan = styled.span`
    grid-row: 4;
    grid-column: span 2 / auto;
`;

export const AddButton = styled(CustomButton)`
    margin-top: 25px;


  @media screen and (min-width: 900px) {
    grid-column: span 2 / auto;
    grid-row: 3;
    margin-top: 0px;
    max-width: 375px;
  }
`;
AddButton.displayName = 'AddButtonStyles';