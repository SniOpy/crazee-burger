import styled from 'styled-components';
import Logo from '../../reusable-ui/Logo';
import { refreshPage } from '../../../utils/window'
export default function NavBarLeft() {
    return (
        <NavBarLeftStyled>
            <Logo className="logo-order-page" onClick={refreshPage} />
        </NavBarLeftStyled>
    )
}

const NavBarLeftStyled = styled.div`
    
    .logo-order-page {
        cursor: pointer;
    }
`;
