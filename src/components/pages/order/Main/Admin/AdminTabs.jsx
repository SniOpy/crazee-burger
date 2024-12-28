import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";

export default function AdminTabs() {
  return (
    <AdminTabsStyled><Tab/></AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
  border: 1px solid red;
`;


