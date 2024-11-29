import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaCircleUser } from "react-icons/fa6";

export default function NavBarRight({ username }) {
    return (
        <NavBarRightStyled>
            <div className="info">
                <div className="profile">
                    <span>Bonjour {username}</span>
                    <Link to="/" className="logout-button">
                        <a >Se déconnecter</a>
                    </Link>
                </div>
                <div className="icon">
                    <FaCircleUser className="icon-user" />
                </div>
            </div>
        </NavBarRightStyled>
    )
}

const NavBarRightStyled = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    
    
    .info {
        display: flex;
        gap:15px;
        margin-right:50px; 
        color:#747B91;F04: 
    }
    .profile {
        display:flex;
        flex-direction: column;
        align-items: flex-end;
        
    }
    .icon-user {
        width: 36px;
        height: 36px;
    }
  
    a{
    font-size: 10px;
    text-decoration:none;
    color:#fff;

    &:hover {
    text-decoration:underline #fff;
    }
  }
`;
