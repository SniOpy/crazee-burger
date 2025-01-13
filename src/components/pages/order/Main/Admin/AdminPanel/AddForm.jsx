import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

export default function AddForm() {
  const { addProduct } = useContext(OrderContext);

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const handleSubmit = (event) => {
    event.preventDefault();

    const productToAdd = {
      ...newProduct,
      id: crypto.randomUUID(), // is used to generate id
    };
    addProduct(productToAdd);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setNewProduct({ ...newProduct, [name]: value });
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">Image Preview</div>
      <div className="input-fields">
        <input
          name="title"
          type="text"
          placeholder="Nom du produit (ex: Super Burger)"
          value={newProduct.title}
          onChange={handleChange}
        />
        <input
          name="imageSource"
          type="text"
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          value={newProduct.imageSource}
          onChange={handleChange}
        />
        <input
          name="price"
          type="text"
          placeholder='Ex: "2119,56", et "2119.56"'
          value={newProduct.price}
          onChange={handleChange}
        />
      </div>
      <div className="button-submit">
        <button type="submit">Button</button>
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  border: 2px solid black;
  padding: 30px 5%;
  display: grid;
  height: 100%;
  width: 70%;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 1fr 3fr;

  .image-preview {
    background: red;
    grid-area: 1 / 1 / 3 / 2;
  }
  .input-fields {
    background: blue;
    grid-area: 1 / 2 / 3 / 3;
    display: grid;
  }
  .button-submit {
    background: green;
    grid-area: 3 / 2 / 3 / -1;
    display: grid;
    width: 50%;
  }
`;
