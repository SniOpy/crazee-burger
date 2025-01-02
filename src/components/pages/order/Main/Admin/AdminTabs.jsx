import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../theme";

export default function AdminTabs({ isCollapsed, setisCollapsed }) {


  return (
    <AdminTabsStyled>
      <Tab
        Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        className={!isCollapsed ? "is-active" : ""}
        onClick={() => { setisCollapsed((!isCollapsed)) }} />
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
  padding-left: 40px;

  .is-active {
      background: ${theme.colors.background_dark};
      color: ${theme.colors.white};
      border-bottom: ${theme.colors.background_dark};
    }
`;


