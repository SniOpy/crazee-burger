import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../theme';

export default function Admin() {
  return (
    <AdminStyled>
          Admin
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
  
    background: ${theme.colors.background_white};
    border: 1px solid ${theme.colors.greyLight};;
    box-shadow: ${theme.shadows.subtle};
    position: absolute;
    height: 250px;
    bottom:0;
    left: 0;
    right:0;
`;
