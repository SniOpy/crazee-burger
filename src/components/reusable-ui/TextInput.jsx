import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import styled from 'styled-components'
import ButtonPrimary from './ButtonPrimary';
import { FaChevronRight } from "react-icons/fa";
import { theme } from '../theme';

export default function TextInput({ value, onChange, ...restProps }) {

  return (
    <TextInputStyled>
      <FaUserCircle className='fa-circle' />
      <input
        value={value}
        onChange={onChange}
        {...restProps}
      />
      <ButtonPrimary
        label={"Accéder à mon espace"}
        icon={<FaChevronRight className='icon' />} />

    </TextInputStyled>
  )
}

const TextInputStyled = styled.div`
    display:flex;
    flex-direction: column;

  input {
    width: 300px;
    height: 30px;
    padding: 5px 35px;
    border-radius: 5px;
    font-family: "Open Sans", cursive;

    &::placeholder {
      color: ${theme.colors.greyMedium}
    }
  }

  
  .fa-circle {
    position: absolute;
    color:grey;
    padding: 14px;
    min-width: 10px;
  }

  .icon {
      margin-left: 10px;
  }
`;

