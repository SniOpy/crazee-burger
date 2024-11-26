import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { theme } from '../../themes';
import logo from '../../../assets/logo-orange.png';
import backgroundImage from '../../../assets/burger-background.jpg'

export default function LoginForm() {
  //! state
  const [username, setUsername] = useState("");
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

    <div id="container" style={{ backgroundImage: `url(${backgroundImage}) no-repeat center center fixed`, backgroundSize: `cover` }}>
      <section id="loginPage">
        <section id="loginPage--form">
          <LoginFormStyled
            action="submit"
            onSubmit={handleSubmit}>
            <section id="loginPage--form-title">
              <h1>
                Crazee
                <span>
                  <img
                    className="logo-brand"
                    src={logo}
                    alt="logo crazee burger" />
                </span>
                Burger
              </h1>
              <h2>Bienvenue chez nous !</h2>
            </section>
            <hr />
            <h3>Connectez-vous</h3>
            <input
              type="text"
              onChange={handleChange}
              placeholder="Entrer votre nom"
              required="required"
            />
            <button type='submit'>Accéder à mon espace</button>
          </LoginFormStyled>
        </section>
      </section>
    </div >

  )
}

const LoginFormStyled = styled.form`  

    h1{
    font-family: 'Amatic SC'; 
    color : ${theme.colors.primary};
    font-size: ${theme.fonts.P6};
    }

    .loginPage--form-title {
      display:flex;
      flex-direction:row;
    }

`
