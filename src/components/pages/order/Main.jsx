import styled from "styled-components";
import { theme } from "../../theme";

export default function Main() {
  return (
    <MainStyled>
      Main
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background: green;
  height: 800px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius:${theme.borderRadius.extraRound};
  
`;