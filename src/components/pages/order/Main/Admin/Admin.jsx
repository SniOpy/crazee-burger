import React, { useState } from 'react'
import styled from 'styled-components';
import AdminTabs from './AdminTabs';
import AdminPanel from './AdminPanel';
import { theme } from '../../../../theme';

export default function Admin() {

  const [isCollapsed, setisCollapsed] = useState(false);
  const [isEditTab, setIsEditTab] = useState(false)
  const [isAddTab, setIsAddTab] = useState(false)
  return (
    <AdminStyled>
      <AdminTabs isCollapsed={isCollapsed} setisCollapsed={setisCollapsed} isEditTab={isEditTab} setIsEditTab={setIsEditTab} isAddTab={isAddTab} setIsAddTab={setIsAddTab} />
      {isCollapsed && <AdminPanel isEditTab={isEditTab} isAddTab={isAddTab} />}
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
    position: absolute;
    bottom:0;
    left: 0;
    right:0;

    
`;
