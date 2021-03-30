import styled from 'styled-components'

export const SignInContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;
`;

export const SignInButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SignInTitle = styled.h2`
    margin: 15px 0;

    @media screen and (max-width: 800px) {
        text-align: center;
        margin-bottom: 0;
    }
`;

export const SignInMessage = styled.span`
    @media screen and (max-width: 800px) {
        display: none;
        
    }
`;