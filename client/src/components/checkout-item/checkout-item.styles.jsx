import styled from 'styled-components'

export const CheckoutItemDiv = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;

    @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;
CheckoutItemDiv.displayName = 'CheckoutItemStyles';


export const ImageContainerDiv = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
      width: 100%;
      height: 100%;
    }
`;
ImageContainerDiv.displayName = 'ImageContainerStyles';


export const TextSpan = styled.span`
    width: 23%;

    @media screen and (max-width: 800px) {
        width: 22%;
    }
`;
TextSpan.displayName = 'TextStyles';


export const QuantityContainer = styled(TextSpan)`
    display: flex;

    div {
        cursor: pointer;
    }
    span {
        margin: 0 10px;
    }

    @media screen and (max-width: 800px) {
        span {
            margin: 0 5px;
        }
    }
`;
QuantityContainer.displayName = 'QuantityStyles';


export const RemoveButtonDiv = styled.div`
    padding-left: 12px;
    cursor: pointer;
`; 
RemoveButtonDiv.displayName = 'RemoveButtonStyles';