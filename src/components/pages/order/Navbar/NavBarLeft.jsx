import styled from 'styled-components';
import Logo from '../../../reusable-ui/Logo';
export default function NavBarLeft() {
    return (
        <NavBarLeftStyled>
            <Logo className="logo-order-page"  />
        </NavBarLeftStyled>
    )
}

const NavBarLeftStyled = styled.div`
    
    .logo-order-page {
        cursor: pointer;
    }
`;
