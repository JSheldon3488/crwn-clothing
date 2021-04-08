import styled from 'styled-components';

export const ContactFormDiv = styled.div`
    width: 50%;

    @media screen and (max-width: 800px) {
        width: 75%
    }
`
ContactFormDiv.displayName = 'ContactFormStyles';


export const Title = styled.h1`
    text-align: center;
`
Title.displayName = 'TitleStyles';


export const MessageBox = styled.textarea`
    margin-bottom: 25px;
    width: 100%
`
MessageBox.displayName = 'MessageBoxStyles';