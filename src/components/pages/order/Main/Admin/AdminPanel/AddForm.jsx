import styled from "styled-components";

export default function AddForm() {
  return (
    <AddFormStyled>
      <div className="image-preview">Image Preview</div>
      <div className="input-fields">
        <input type="text" placeholder="Nom"/>
        <input type="text" placeholder="Lien"/>
        <input type="text" placeholder="Prix"/>
      </div>
      <div className="button-submit">
         <button>Button</button>
      </div>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
  border: 2px solid black;
  padding: 30px 5%;
  display: grid;
  height: 100%;
  width: 70%;
  grid-template-rows: repeat(4,1fr);
  grid-template-columns: 1fr 3fr;


  .image-preview{
    background:red;
    grid-area: 1 / 1 / 3 / 2;
  }
  .input-fields{
    background:blue;
    grid-area: 1 / 2 / 3 / 3;
    display:grid;

  }
  .button-submit{
    background:green;
    grid-area: 3 / 2 / 3 / -1;
    display:grid;
    width:50%;

  }
`;


