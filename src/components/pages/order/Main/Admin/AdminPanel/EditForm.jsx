import React, { useContext, useRef } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import TextInput from "../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview.jsx";
import { getInputTextConfig } from "./inputTextConfig.jsx";
import styled from "styled-components";
import EmptyTabEdit from "../Empty/EmptyTab/EmptyTabEdit.jsx";
import { theme } from "../../../../../../theme/index.js";

export default function EditForm() {
  const { productClicked, setProductClicked, handleEdit, titleCardRef } =
    useContext(OrderContext);

  const inputTexts = getInputTextConfig(productClicked);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const productBeingEdited = {
      ...productClicked,
      [name]: value,
    };
    setProductClicked(productBeingEdited);
    handleEdit(productBeingEdited);
  };

  return !productClicked ? (
    <EmptyTabEdit />
  ) : (
    <EditFormStyled>
      <ImagePreview
        imageSource={productClicked.imageSource}
        title={productClicked.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => {
          return (
            <TextInput
              {...input}
              onChange={handleChange}
              version="minimalist"
              ref={input.name === "title" ? titleCardRef : null}
            />
          );
        })}
      </div>
      <div className="submit">
        <span>Cliquez sur un produit pour le modifier <span className="live-update">en temps réel</span></span>
      </div>
    </EditFormStyled>
  );
}
const EditFormStyled = styled.form`
  padding: 10px 5%;
  display: grid;
  height: 100%;
  width: 70%;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 20px;
  grid-row-gap: 8px;
  padding-top: 30px;

  .input-fields {
    grid-area: 1 / 2 / 3 / 3;
    display: grid;
    grid-row-gap: 8px;
  }
  .submit {
    grid-area: 3 / 2 / 3 / -1;
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.SM};

    .submit-button {
      width: 50%;
    }

    .live-update {
      text-decoration: underline;
    }
  }
`;
