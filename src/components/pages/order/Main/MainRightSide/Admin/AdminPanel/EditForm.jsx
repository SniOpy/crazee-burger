import { useContext, useState } from "react"
import OrderContext from "../../../../../../../context/OrderContext"
import Form from "./Form"
import EditInfoMessage from "./EditInfoMessage"


export default function EditForm() {
  // state
  const { productSelected, setProductSelected,username, handleEdit, titleEditRef, isSubmitted, displaySuccessMessage} = useContext(OrderContext)


  

  // comportements (gestionnaires d'événement ou "event handlers")
const handleBlur = () => {
  displaySuccessMessage();
}



  const handleChange = (event) => {
    const { name, value } = event.target

    const productBeingUpdated = {
      ...productSelected,
      [name]: value,
    }

    setProductSelected(productBeingUpdated) // cette ligne update le formulaire
    handleEdit(productBeingUpdated,username, event) // cette ligne update le menu
    // setIsUpdated(true);

  }

  // affichage
  return (
    <Form product={productSelected} onChange={handleChange} ref={titleEditRef} onBlur={handleBlur}>
      <EditInfoMessage isUpdated={isSubmitted} />
    </Form>
  )
}
