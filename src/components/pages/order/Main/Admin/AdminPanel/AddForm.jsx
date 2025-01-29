import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import TextInput from "../../../../../reusable-ui/TextInput";
import Button from "../../../../../reusable-ui/Button.jsx";
import ImagePreview from "./ImagePreview.jsx";
import SubmitMessage from "./SubmitMessage.jsx";
import { getInputTextConfig } from "./inputTextConfig.jsx";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";

export default function AddForm() {
  const { addProduct, newProduct, setNewProduct } = useContext(OrderContext);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const inputTexts = getInputTextConfig(newProduct);

  const handleSubmit = (event) => {
    event.preventDefault();

    const productToAdd = {
      ...newProduct,
      id: crypto.randomUUID(), // is used to generate id
    };
    addProduct(productToAdd);
    setNewProduct(EMPTY_PRODUCT);

    displaySuccessMessage();
  };

  const displaySuccessMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setNewProduct({ ...newProduct, [name]: value });
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => {
          return (
            <TextInput
              // name={input.name}
              // placeholder={input.placeholder}
              // value={input.value}
              // Icon={input.Icon}
              {...input}
              key={input.id}
              onChange={handleChange}
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
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
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
