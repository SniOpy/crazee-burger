import styled from "styled-components";

export default function EmptyMenuClient({ onReset }) {
  return (
    <EmptyMenuClientStyled>
      <span className="first-message">Victime de notre succès ! :D</span>
      <span className="second-message">
        de nouvelles recettes sont en cours de préparation.
      </span>
      <span className="second-message">à très vite !</span>
    </EmptyMenuClientStyled>
  );
}

const EmptyMenuClientStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  .first-message,
  .second-message {
    font-family: "Amatic SC", cursive;
    /* font-weight: 700; */
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
`;
