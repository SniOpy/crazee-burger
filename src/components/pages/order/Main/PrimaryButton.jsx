import styled from "styled-components";
import { theme } from "../../../theme";

export default function PrimaryButton({label}) {
  return (
    <PrimaryButtonStyled 
        type="button">
        {label}
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
  
            background-color: ${theme.colors.primary};
            color:#fff;
            border: none;
            width: 95px;
            height: 38px;
            border-radius: ${theme.borderRadius.round};
            font-weight: ${theme.weights.medium};

            &:hover {
                background: #fff;
                color: ${theme.colors.primary};
                border : 1px solid ${theme.colors.primary};
            }
`;
