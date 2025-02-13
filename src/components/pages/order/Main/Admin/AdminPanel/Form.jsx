import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";
import {getInputTextConfig} from './inputTextConfig.jsx'
import Button from '../../../../../reusable-ui/Button.jsx'
import SubmitMessage from './SubmitMessage.jsx'
export default function Form({newProduct, onChange, onSubmit, isSubmitted}) {
    
  //comportements 
  const inputTexts = getInputTextConfig(newProduct);

  //affichage 
  return (
    <FormStyled onSubmit={onSubmit}>
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => {
          return (
            <TextInput
              {...input}
              key={input.id}
              onChange={onChange}
              version="minimalist"
            />
          );
        })}
      </div>
      <div className="submit ">
        <Button
          label="Ajouter un nouveau produit au menu"
          className="submit-button"
          version="success"
        />
        {isSubmitted && <SubmitMessage />}
      </div>
    </FormStyled>
  )
}

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
`;
