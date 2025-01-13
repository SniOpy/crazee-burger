import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { FiCheck } from "react-icons/fi";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: "",
};

export default function AddForm() {
  const { addProduct } = useContext(OrderContext);

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      <div className="image-preview">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          "Aucune image"
        )}
      </div>
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
      <div className="submit ">
        <button className="submit-button" type="">
          Button{" "}
        </button>
        {isSubmitted && (
          <span>
            {" "}
            <FiCheck /> Ajouté avec succès
          </span>
        )}
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
    grid-area: 1 / 1 / 3 / 2;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
  .input-fields {
    background: blue;
    grid-area: 1 / 2 / 3 / 3;
    display: grid;
  }
  .submit {
    grid-area: 3 / 2 / 3 / -1;
    display: flex;
    align-items: center;

    .submit-button {
      width: 50%;
    }
  }
`;
