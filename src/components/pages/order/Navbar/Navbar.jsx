import styled from "styled-components";
import { theme } from "../../../theme";
import NavBarLeft from "./NavBarLeft";
import NavBarRight from "./NavBarRight";

export default function Navbar({ username }) {
    return (
        <NavbarStyled>
            <NavBarLeft />
            <NavBarRight username={username} />
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
