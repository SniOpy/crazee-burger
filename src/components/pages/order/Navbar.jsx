import styled from "styled-components";
import NavBarLeft from "../order/NavBarLeft";
import NavBarRight from "../order/NavBarRight";

export default function Navbar({ username }) {
    return (
        <NavbarStyled>
            <NavBarLeft />
            <NavBarRight username={username} />
        </NavbarStyled>
    )
}

const NavbarStyled = styled.div`
    /* background: blue; */
    display:flex;
    justify-content: space-between;
    padding: 0 20px;
`;
