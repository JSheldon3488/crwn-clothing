import styled from 'styled-components';

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
`;

export const SingUpTitle = styled.h2`
    margin: 15px 0px;

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