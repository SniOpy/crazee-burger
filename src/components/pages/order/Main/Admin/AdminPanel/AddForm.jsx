import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import TextInput from "../../../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import Button from "../../../../../reusable-ui/Button.jsx";
import ImagePreview from "./ImagePreview.jsx";
import SubmitMessage from "./SubmitMessage.jsx";

export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: "",
};

export default function AddForm({ version = "normal" }) {
  const { addProduct, newProduct, setNewProduct } = useContext(OrderContext);

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
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div className="input-fields">
        <TextInput
          name="title"
          type="text"
          placeholder="Nom du produit (ex: Super Burger)"
          value={newProduct.title}
          onChange={handleChange}
          Icon={<FaHamburger />}
          version="minimalist"
        />
        <TextInput
          name="imageSource"
          type="text"
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          value={newProduct.imageSource}
          onChange={handleChange}
          Icon={<BsFillCameraFill />}
          version="minimalist"
        />
        <TextInput
          name="price"
          type="text"
          placeholder='Ex: "2119,56", et "2119.56"'
          value={newProduct.price}
          onChange={handleChange}
          Icon={<MdOutlineEuro />}
          version="minimalist"
        />
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
