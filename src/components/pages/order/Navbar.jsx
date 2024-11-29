import styled from "styled-components";
import NavBarLeft from "../order/NavBarLeft";
import NavBarRight from "../order/NavBarRight";

export default function Navbar({ username }) {
    return (
        <NavbarStyled>
            <div className="navbar">
                <NavBarLeft />
                <NavBarRight username={username} />
            </div>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.div`
  
`;
