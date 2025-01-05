import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function AdminTabs() {

  const { isCollapsed, setisCollapsed, isAddTab, setIsAddTab, setIsEditTab, isEditTab } = useContext(OrderContext)
  const selectAddTab = () => {
    setIsAddTab(true)
    setIsEditTab(false)
    setisCollapsed(true)
  }
  const selectEditTab = () => {
    setIsEditTab(true)
    setIsAddTab(false)
    setisCollapsed(true)
  }
  return (
    <AdminTabsStyled>
      <Tab
        label=""
        Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        className={!isCollapsed ? "is-active" : ""}
        onClick={() => { setisCollapsed(!isCollapsed) }}
      />
      <Tab
        label="Ajouter un produit"
        Icon={<AiOutlinePlus />}
        className={isAddTab ? "is-active" : ""}
        onClick={selectAddTab}
      />
      <Tab
        label="Modifier un produit"
        Icon={<MdModeEditOutline />}
        className={isEditTab ? "is-active" : ""}
        onClick={selectEditTab}
      />
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
  padding-left: 40px;
  display:flex;

  .is-active {
      background: ${theme.colors.background_dark};
      color: ${theme.colors.white};
      border-bottom: ${theme.colors.background_dark};
    }

    button {
      margin-right: 1px;
    }
`;


