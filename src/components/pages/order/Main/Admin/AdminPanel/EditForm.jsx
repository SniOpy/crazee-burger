import styled from "styled-components";
import EmptyTabEdit from "../Empty/EmptyTab/EmptyTabEdit";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";

export default function EditForm() {
  const { productClicked } = useContext(OrderContext);
  //! state

  //! comportement

  //! affichage
  return (
    <EditFormStyled>
      <span>
        {" "}
        {productClicked.title}
        <EmptyTabEdit />
      </span>
    </EditFormStyled>
  );
}

const EditFormStyled = styled.div``;
