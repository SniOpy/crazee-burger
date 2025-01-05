import styled from "styled-components";
import { theme } from '../../../../theme'
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
export default function AdminPanel() {

  const { isAddTab, isEditTab } = useContext(OrderContext);
  return (
    <AdminPanelStyled>
      {isAddTab && "Ajouter un produit"}
      {isEditTab && "Modifier un produit"}
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
    background: ${theme.colors.background_white};
    border: 1px solid ${theme.colors.greyLight};;
    box-shadow: ${theme.shadows.subtle};
    height: 250px;
  `;


