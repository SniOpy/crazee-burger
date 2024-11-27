import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import styled from 'styled-components'
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
      <button type='submit'>Accéder à mon espace  </button>
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
  }

  
  .fa-circle {
    position: absolute;
    color:grey;
    padding: 14px;
    min-width: 10px;
  }
  
  button {
    background-color: ${theme.colors.primary};
    color: #fff;
    padding: 10px;
    margin-top: 8px;
    font-family: 'Open Sans', cursive;
    transition:0.3s;
    border-radius: 5px;
  }

  button:hover {
    background-color: #fff;
    color: ${theme.colors.primary};
    /* border: 1px solid ${theme.colors.primary}; */
    cursor: pointer;  
  }
`;

