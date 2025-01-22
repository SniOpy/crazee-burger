import styled from "styled-components";

export default function EmptyMenuAdmin({ onReset }) {
  return (
    <EmptyMenuAdminStyled>
      <span className="first-message">Le menu est vide ?</span>
      <span className="second-message">
        Cliquez ci-dessous pour le réinitialiser
      </span>
      <button onClick={onReset}>Générer de nouveaux produits</button>
    </EmptyMenuAdminStyled>
  );
}

const EmptyMenuAdminStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  .first-message,
  .second-message {
    font-family: "Amatic SC", cursive;
    font-size: 36px;
    color: rgba(116, 123, 145, 1);
    text-transform: uppercase;
  }

  .first-message {
    font-weight: 700;
  }

  .second-message {
    font-weight: 400;
  }

  button {
    background-color: rgba(255, 159, 27, 1);
    color: #fff;
    border-radius: 5px;
    border: 1px solid rgba(255, 159, 27, 1);
    padding: 19px 25px;
    cursor: pointer;
    font-family: "Arial";
    font-weight: 700;

    :hover {
      background-color: #29231a;
      color: #fff;
    }
  }
`;
