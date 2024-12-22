import React from 'react'
import styled from 'styled-components';

export default function Admin() {
  return (
    <AdminStyled>
        <div className="adminTabs">
            <div className="tab">1</div>
            <div className="tab">2</div>
        </div>
        <div className="adminPanel">
            <span>panel</span>
        </div>
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
  border:1px solid red;
    padding : 20px;
  .adminTabs {
    border: 1px solid green;
  }
  .adminPanel {
    border: 1px solid green;
  }
`;
