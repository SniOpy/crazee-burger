import styled from "styled-components";
import NavBarLeft from "../order/NavBarLeft";
import NavBarRight from "../order/NavBarRight";
import { theme } from "../../theme";

export default function Navbar() {
    return (
        <NavbarStyled>
            <NavBarLeft />
            <NavBarRight  />
        </NavbarStyled>
    )
}

const NavbarStyled = styled.div`
    background: ${theme.colors.white};
    display:flex;
    justify-content: space-between;
    padding: 0 20px;
    border-top-left-radius: ${theme.borderRadius.extraRound};;
    border-top-right-radius: ${theme.borderRadius.extraRound};;
`;
