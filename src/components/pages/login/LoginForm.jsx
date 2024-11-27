import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../theme/index';
import { FaUserCircle } from "react-icons/fa";

export default function LoginForm() {
  //! state
  const [username, setUsername] = useState("")
  const navigate = useNavigate()
  //! comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`order/${username}`)
  }

  const handleChange = (event) => {
    setUsername(event.target.value)
  }

  //! render
  return (
    <LoginFormStyled>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <div className="container">
          <FaUserCircle className='fa-circle' />
          <input
            type="text"
            onChange={handleChange}
            placeholder="Entrer votre nom"
            required="required"
          />
          <button type='submit'>Accéder à mon espace</button>
        </div>
      </form>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.div`
  /* background: green; */
  color: #fff;
  font-family: "Amatic SC", cursive;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;

  h1, h2 {
    letter-spacing: 1.5px;;
  }
  h2 {
    font-weight: ${theme.weights.medium};
  }

  hr{
    width: 400px;
    border: 1px solid ${theme.colors.primary_burger};
  }

  .fa-circle {
    position: absolute;
    color:grey;
    padding: 14px;
    min-width: 10px;
  }
  .container {
    display:flex;
    flex-direction: column;
  }
  input {
    width: 300px;
    height: 30px;
    padding: 5px 35px;
    font-family: "Open Sans", cursive;
  }

  input, button {
    border-radius: 5px;
  }

  button {
    background-color: ${theme.colors.primary};
    color: #fff;
    padding: 10px;
    margin-top: 8px;
    font-family: 'Open Sans', cursive;
    transition:0.5s;
  }

  button:hover {
    background-color: #fff;
    color: ${theme.colors.primary};
    cursor: pointer;  
  }
`;
