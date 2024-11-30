import styled from "styled-components";
import { theme } from "../theme/index";

export default function Logo({ className, onClick }) {
    return (
        <LogoStyled className={className} onClick={onClick}>
            <h1>CRAZEE</h1>
            <img src="/images/logo-orange.png" alt="logo crazee burger" />
            <h1>BURGER</h1>
        </LogoStyled>
    )
}

const LogoStyled = styled.div`
    display:flex;
    align-items: center;

    h1{
        display: inline;
        font-family: 'Amatic SC', cursive;
        color: ${theme.colors.primary};
        font-size : ${theme.fonts.P4};
        letter-spacing: 1.5px;
        line-height: 1em;
        font-weight: ${theme.fonts.weights.bold};
        text-align: center;
        text-transform: uppercase;
    }

    img{
        object-fit: contain;
        object-position: center;
        height: 60px;
        width: 80px;
        margin: 0 5px;    
    }

    
`;