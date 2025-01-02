import styled from 'styled-components';
import { theme } from '../../theme'


export default function Tab({ Icon }) {
  return (
    <TabStyled>{Icon}</TabStyled>
  )
}

const TabStyled = styled.button`

 padding: 0 22px;
 height: 43px;
 box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
 background-color: ${theme.colors.white};
 border:solid;
 cursor: pointer;

 display: flex;
 justify-content: center;
 align-items: center;

 //! position
 position: relative;
 left:0%;
 top: 1px; 

 //!fonts
 font-size: ${theme.fonts.size.P0};
 color: ${theme.colors.greyLight};
 
 //! border
 border-width: 1px, 1px, 2px, 1px;
 border-style: solid;
 border-color: rgba(228, 229, 233, 1);

 //! border-radius
  border-radius: ${theme.borderRadius.round};
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;

  &:hover {
  border-bottom: 2px solid  ${theme.colors.white};
  }
`;
