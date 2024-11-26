import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
      <br />
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Entrer votre nom"
          required="required"
        />
        <button type='submit'>Accéder à mon espace</button>
      </form>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.div`
  background: green;
`;
