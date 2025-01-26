import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { FiCheckCircle } from "react-icons/fi";

export default function SubmitMessage() {
  return (
    <SubmitMessageStyled className="submit-message">
      {" "}
      <FiCheckCircle className="icon" />
      <span className="message">Ajouté avec succès</span>
    </SubmitMessageStyled>
  );
}

const SubmitMessageStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  color: ${theme.colors.success};
  gap: 5px;

  .icon {
    margin-left: 10px;
    width: 1em;
    height: 1em;
  }
  .message {
    font-weight: ${theme.fonts.weights.regular};
    font-size: ${theme.fonts.size.P0};
    font-family: "Open Sans", cursive;
  }
`;
