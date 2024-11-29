import LoginForm from './LoginForm';
import Logo from '../../reusable-ui/Logo';
import styled from 'styled-components';

export default function LoginPage() {

  //! render
  return (
    <LoginPageStyled>
      <Logo className={"logo-img"} />
      <LoginForm />
    </LoginPageStyled>
  )
}


const LoginPageStyled = styled.div`
  // background-color: red;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;

  &::before {
    content: "";
    background:url("/images/burger-background.jpg") rgba(0, 0, 0, 0.75);
    /* background-color: #000; */
    background-size : cover;
    background-position: center;
    background-blend-mode: darken;
   

    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:-1; // permet de poser des éléments sur d'autres
  }
  .logo-img {
        transform: scale(2.5);
    }
  
`;
