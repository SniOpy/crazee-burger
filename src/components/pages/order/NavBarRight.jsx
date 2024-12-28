import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { FaRegUserCircle, FaUserSecret } from "react-icons/fa";
import ToggleButton from "../../reusable-ui/ToggleButton";
import NavbarRightSideIncomplet from './NavbarRightSideIncomplet'
import { theme } from "../../theme";
import { toast } from "react-toastify";
import { useContext } from "react";
import OrderContext from "../../../context/OrderContext";


export default function NavBarRight() {
    const {isModeAdmin,setIsModeAdmin} = useContext(OrderContext)
    const { username } = useParams();

    const displayToastNotification = () => {

        if(!isModeAdmin) {
            toast.info("Mode admin activé", {
                icon: <FaUserSecret size={30} />,
                theme: "dark",
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
        setIsModeAdmin(!isModeAdmin);
    }
    return (
        <NavBarRightStyled>
            <div className="info">
                <div className="admin">
                    <ToggleButton 
                        isChecked={isModeAdmin}
                        labelIfUnchecked="activer le mode admin"
                        labelIfChecked="désactiver le mode admin"
                        onToggle={displayToastNotification}
                    />
                    <NavbarRightSideIncomplet />
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
        font-weight: ${theme.fonts.weights.bold};
    }
`;
