import React, { useState } from 'react'
import styled from 'styled-components';
import AdminTabs from './AdminTabs';
import AdminPanel from './AdminPanel';
import { theme } from '../../../../theme';

export default function Admin() {

  const [isCollapsed, setisCollapsed] = useState(false);
  return (
    <AdminStyled>
      <AdminTabs isCollapsed={isCollapsed} setisCollapsed={setisCollapsed} />
      {isCollapsed && <AdminPanel />}
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
    position: absolute;
    bottom:0;
    left: 0;
    right:0;

    
`;
