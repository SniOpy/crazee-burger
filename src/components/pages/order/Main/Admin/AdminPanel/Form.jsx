import React from "react";
import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";
import {getInputTextConfig} from './inputTextConfig.jsx'
import { theme } from "../../../../../../theme/index.js";


const Form = React.forwardRef(({product, onChange, onSubmit, children}, ref) => {
    
  //comportements 
  const inputTexts = getInputTextConfig(product);

  //affichage 
  return (
    <FormStyled onSubmit={onSubmit}>
      <ImagePreview
        imageSource={product.imageSource}
        title={product.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => {
          return (
            <TextInput
              {...input}
              key={input.id}
              onChange={onChange}
              version="minimalist"
              ref={ref && input.name === "title" ? ref : null}
            />
          );
        })}
      </div>
      
      <div className="submit">
      {children}
      </div>
    </FormStyled>
  )
});

export default Form;

const FormStyled = styled.form`
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

    .submit-button {
      width: 50%;
    }
  }

  .sentence {
    color:${theme.colors.primary};
    font-size:${theme.fonts.size.SM};

    .live-update {
      text-decoration: underline;
    }
  }
`;


