import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({
  label,
  Icon,
  className,
  onClick,
  version = "normal",
}) {
  return (
    <PrimaryButtonStyled
      className={className}
      onClick={onClick}
      version={version}
    >
      <span>{label}</span>
      <div className="icon"> {Icon && Icon}</div>
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  ${(props) => props.version === "normal" && extraStyleNormal}
  ${(props) => props.version === "success" && extraStyleSuccess}
`;

const extraStyleNormal = css`
  width: 100%;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative; //is used in case you want to create interactive icons where an icon replaces the text label.
  white-space: nowrap; //prevents the text label from wrapping to the next line.
  text-decoration: none; //removes the text decoration in case you’re applying the .btn class to a link.
  line-height: 1;

  padding: 18px 24px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 800;
  color: white;
  background-color: #ff9f1b;
  border: 1px solid #ff9f1b;

  &:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};
    transition: all 200ms ease-out;
  }

  &:active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  &.is-disabled {
    opacity: 50%;
    cursor: not-allowed;
    z-index: 2;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-left: 10px; */
    /* min-width: 1em; // that way, the icon size is NOT affected by width of the entire component. */
  }

  &.with-focus {
    border: 1px solid ${theme.colors.white};
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};

    &:hover {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
    }

    &:active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
  }
`;

const extraStyleSuccess = css`
  background: ${theme.colors.success};
  font-size: ${theme.fonts.size.XS};
  border: ${theme.borderRadius.round};
  padding: 10px 29px;
  color: ${theme.colors.white};
  border: 1px solid ${theme.colors.success};
  font-weight: ${theme.fonts.weights.bold};
  font-family: "Arial", cursive;
`;
