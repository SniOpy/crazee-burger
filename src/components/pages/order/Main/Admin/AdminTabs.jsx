import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { theme } from "../../../../theme";

export default function AdminTabs({ isCollapsed, setisCollapsed }) {


  return (
    <AdminTabsStyled>
      <Tab
        label=""
        Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        className={!isCollapsed ? "is-active" : ""}
        onClick={() => { setisCollapsed((!isCollapsed)) }}
      />
      <Tab
        label="Ajouter un produit"
        Icon={<AiOutlinePlus />}
        className={!isCollapsed ? "is-active" : ""}
        onClick={() => { setisCollapsed((!isCollapsed)) }}
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


