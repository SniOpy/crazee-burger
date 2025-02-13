import React, { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import EmptyTabEdit from "../Empty/EmptyTab/EmptyTabEdit.jsx";
import Form from "./Form.jsx";
import EditInfoMessage from "./EditInfoMessage.jsx";

export default function EditForm() {
  const { productClicked, setProductClicked, handleEdit, titleCardRef } =
    useContext(OrderContext);


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
    <Form onChange={handleChange} product={productClicked} ref={titleCardRef}>
      <EditInfoMessage/>
    </Form>
  );
}
