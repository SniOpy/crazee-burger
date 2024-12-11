import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";
import ToggleButton from "../../../../utils/ToggleButton";
import { theme } from "../../../theme";

export default function NavBarRight({ username }) {
    return (
        <NavBarRightStyled>
            <div className="info">
                <div className="admin">
                    <ToggleButton/>
                </div>
                <div className="profile">
                    <span>Hey, <span className="username">{username}</span></span>
                    <Link to="/" className="logout-button">
                        <a >Se déconnecter</a>
                    </Link>
                </div>
                <div className="icon">
                    <FaRegUserCircle className="icon-user" />
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
        color:#747B91;
    }
    .profile {
        display:flex;
        flex-direction: column;
        align-items: flex-end;
        font-size: ${theme.fonts.P2};
        
    }
    .icon-user {
        width: 36px;
        height: 36px;
    }
  
    a{
    font-size: 10px;
    text-decoration:none;
    color:${theme.colors.greySemiDark};

        &:hover {
        text-decoration:underline${theme.colors.greyMedium};;
    }
    }

    .username {
        color: ${theme.colors.primary};
        font-weight: ${theme.weights.bold};
    }
`;
