import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";



export default function AddForm() {

  const [title, setTitle] = useState("");
  const [imageSource, setImageSource] = useState("");
  const [price, setPrice] = useState(0);
  const { addProduct } = useContext(OrderContext);

  const newProduct = {
    id: new Date().getTime(),
    title,
    imageSource,
    price,
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct(newProduct);
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleImageChange = (event) => {
    setImageSource(event.target.value);
  }

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  }

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">Image Preview</div>
      <div className="input-fields">
        <input type="text" placeholder="Nom du produit (ex: Super Burger)" value={title} onChange={handleTitleChange}/>
        <input type="text" placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" value={imageSource} onChange={handleImageChange}/>
        <input type="text" placeholder='Ex: "2119,56", et "2119.56"' value={price} onChange={handlePriceChange}/>
      </div>
      <div className="button-submit">       
         <button type="submit">Button</button>
      </div>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
  border: 2px solid black;
  padding: 30px 5%;
  display: grid;
  height: 100%;
  width: 70%;
  grid-template-rows: repeat(4,1fr);
  grid-template-columns: 1fr 3fr;


  .image-preview{
    background:red;
    grid-area: 1 / 1 / 3 / 2;
  }
  .input-fields{
    background:blue;
    grid-area: 1 / 2 / 3 / 3;
    display:grid;

  }
  .button-submit{
    background:green;
    grid-area: 3 / 2 / 3 / -1;
    display:grid;
    width:50%;

  }
`;


