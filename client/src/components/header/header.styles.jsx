import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;

    @media screen and (max-width: 800px) {
        width: 50px;
        padding: 0;
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 15px;

    @media screen and (max-width: 800px) {
        width: 80%;
        margin: 0;
    }
`;

export const OptionLink = styled(Link)`
    padding: 10px 18px;
    cursor: pointer;
    font-size: 1.2em;
    margin-top: 5px;

    @media screen and (max-width: 800px) {
        width: 80%;
        margin: 0;
        font-size: 1em;
    }
`;