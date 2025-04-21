import React from "react"
import styled from "styled-components"
import { theme } from "../../../../../../../theme"
import { BsCloudCheck } from "react-icons/bs";


export default function EditInfoMessage({isUpdated}) {
  return (
    <EditInfoMessageStyled className="sentence">

     {isUpdated ? (
      <span className="edit-information"> <BsCloudCheck /> Modifications enregistrées !</span>
     ) : 
     (
      <>
      Cliquer sur un produit du menu pour le modifier{" "}
      <span className="live-update">en temps réel</span>"
      </>
     )
    }
     
      
    </EditInfoMessageStyled>
  )
}

const EditInfoMessageStyled = styled.span`
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.SM};
  .live-update {
    text-decoration: underline;
  }

  .edit-information{
    
    color: ${theme.colors.blue};

  }
`
