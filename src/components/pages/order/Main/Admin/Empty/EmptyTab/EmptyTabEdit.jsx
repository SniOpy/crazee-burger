import styled from "styled-components";
import { HiCursorClick } from "react-icons/hi";
import { theme } from "../../../../../../../theme";

export default function EmptyTabEdit() {
  return (
    <EmptyTabEditStyled>
      <span>
        Cliquez sur un produit pour le modifier <HiCursorClick />
      </span>
    </EmptyTabEditStyled>
  );
}

const EmptyTabEditStyled = styled.div`
  /* border: 1px solid red; */
  padding: 10px 5%;
  display: flex;
  /* align-items: center; */
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.size.P3};
  font-weight: ${theme.fonts.weights.regular};
  color: rgba(116, 123, 145, 1);
  margin-top: 81px;
`;
