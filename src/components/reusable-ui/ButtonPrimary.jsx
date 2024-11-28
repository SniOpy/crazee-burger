import React from 'react'
import styled from 'styled-components';
import { theme } from '../theme';


export default function ButtonPrimary({ label, icon }) {
  return (
    <ButtonPrimaryStyled>
      {label}
      {icon}
    </ ButtonPrimaryStyled>
  )
}

const ButtonPrimaryStyled = styled.button`

            background-color: ${theme.colors.primary};
            color: #fff;
            padding: 10px;
            margin-top: 8px;
            font-family: 'Open Sans', cursive;
            transition:0.3s;
            border-radius: 5px;
            display:flex;
            justify-content: center;
            align-items: center;

            &:hover {
              background-color: #fff;
              color: ${theme.colors.primary};
              cursor: pointer;  
            }

           

`;
