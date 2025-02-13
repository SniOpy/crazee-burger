import { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";
// import Button from "../../../../../reusable-ui/Button.jsx";
// import SubmitMessage from "./SubmitMessage.jsx";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import Form from "./Form.jsx";

export default function AddForm() {
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
      <Form 
      onSubmit={handleSubmit} 
      newProduct={newProduct}
      onChange={handleChange} 
      isSubmitted={isSubmitted}/>
    
  );
}

