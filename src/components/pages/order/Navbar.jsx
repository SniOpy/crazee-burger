import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar({ username }) {
    return (
        <NavbarStyled>
            <div className="navbar">
                <div className="left-side">Left</div>
                <div className="right-side">
                    <h1>Bonjour {username}</h1>
                    <Link to="/"><button>Déconnexion</button></Link>
                </div>
            </div>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.div`
  
`;
