import React from 'react'
import styled from 'styled-components';

export default function BasketHeader({children}) {
  return (
    <BasketHeaderStyled className="message-react">
         {children}
    </BasketHeaderStyled>
  )
}

const BasketHeaderStyled = styled.div`

`;
