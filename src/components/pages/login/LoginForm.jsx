import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../theme/index';
import TextInput from '../../reusable-ui/TextInput';

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
        <TextInput
          value={username}
          onChange={handleChange}
          type="text"
          placeholder='Entrer votre prénom'
          required
        />
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
    font-weight: ${theme.fonts.weights.medium};
  }

  hr{
    width: 400px;
    border: 1px solid ${theme.colors.primary_burger};
  }
`;
