import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function ImagePreview({ imageSource, title }) {
  return (
    <ImagePreviewStyled>
      {imageSource ? <img src={imageSource} alt={title} /> : "Aucune image"}
    </ImagePreviewStyled>
  );
}

const ImagePreviewStyled = styled.div`
  border-radius: 5px;
  color: ${theme.colors.greyMedium};
  border: 1px solid ${theme.colors.greyLight};
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 1 / 1 / 3 / 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;
