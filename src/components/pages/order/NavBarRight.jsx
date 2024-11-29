import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBarRight({ username }) {
    return (
        <NavBarRightStyled>
            <h1>Bonjour {username}</h1>
            <Link to="/"><button>Déconnexion</button></Link>
        </NavBarRightStyled>
    )
}

const NavBarRightStyled = styled.div`
  border:1px solid black;
`;
