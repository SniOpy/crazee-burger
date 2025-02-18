import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function Footer() {
  return (
    <FooterStyled className="message-react">
      <div>Codé avec ❤️ et React.JS</div>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  background: ${theme.colors.background_dark};
  color: ${theme.colors.white};

  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  font-size: ${theme.fonts.size.P3};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
`;
