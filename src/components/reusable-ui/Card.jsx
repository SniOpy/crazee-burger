import styled, { css } from "styled-components";
import { theme } from "../../theme";
import Button from "./Button";
import { TiDelete } from "react-icons/ti";
import React, { useContext, useState } from "react";
import { deepClone } from "../../utils/array";
import { EMPTY_PRODUCT } from "../../enums/product";
import OrderContext from "../../context/OrderContext";

export default function Card({
  title,
  imageSource,
  leftDescription,
  onDelete,
  hasDeleteButton,
  className,
  onClick,
  isHoverable,
  isSelected,
}) {
  const [basket, setBasket] = useState([]);

  const { productClicked } = useContext(OrderContext);

  //! comportements
  const addProductToCart = async (productToCart) => {
    const copyBasket = [...basket];

    const updateCopyBasket = [productToCart, ...copyBasket];

    await setBasket(updateCopyBasket);

    console.log(basket);
  };

  return (
    <CardStyled
      className={className}
      onClick={onClick}
      $isHoverable={isHoverable}
      $isSelected={isSelected}
    >
      <div className="card">
        {hasDeleteButton && (
          <button
            className="delete-button"
            aria-label="delete-button"
            onClick={onDelete}
          >
            <TiDelete className="icon" />
          </button>
        )}

        <div className="image">
          <img src={imageSource} alt={title} />
        </div>

        <div className="text-info">
          <div className="title">{title}</div>
          <div className="description">
            <div className="left-description">
              <span className="price">{leftDescription}</span>
            </div>
            <div className="right-description">
              <Button
                className="primary-button"
                label={"Ajouter"}
                onClick={() => addProductToCart(productClicked)}
              />
            </div>
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  ${({ $isHoverable }) => $isHoverable && hoverableStyle}

  transition: all 0.4s ease-out;
  border-radius: ${theme.borderRadius.extraRound};
  height: 330px;

  .card {
    background: ${theme.colors.white};
    box-sizing: border-box;
    width: 240px;
    height: 330px;
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px;
    padding-bottom: 10px;
    box-shadow: ${theme.shadows.medium};
    border-radius: ${theme.borderRadius.extraRound};
    position: relative;

    .delete-button {
      /* border: 1px solid red; */
      position: absolute;
      right: 15px;
      top: 15px;
      width: 30px;
      height: 30px;
      color: ${theme.colors.primary};
      cursor: pointer;
      z-index: 2;
      border: none;
      padding: 0;
      background: none;

      .icon {
        height: 100%;
        width: 100%;
      }
      :hover {
        color: ${theme.colors.red};
      }

      :active {
        color: ${theme.colors.primary};
      }
    }
    .image {
      width: 100%;
      height: auto;
      margin-top: 30px;
      margin-bottom: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .text-info {
      display: grid;
      grid-template-rows: 30% 70%;
      padding: 5px;

      .title {
        margin: auto 0;
        font-size: ${theme.fonts.size.P4};
        position: relative;
        bottom: 10px;
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.dark};
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        font-family: "Amatic SC", cursive;
      }

      .description {
        display: grid;
        grid-template-columns: 1fr 1fr;

        .left-description {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-weight: ${theme.fonts.weights.medium};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: ${theme.fonts.weights.medium};
          color: ${theme.colors.primary};
        }

        .right-description {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          font-size: ${theme.fonts.size.P1};

          .primary-button {
            font-size: ${theme.fonts.size.XS};
            cursor: pointer;
            padding: 12px;
          }
        }
      }
    }

    ${({ $isHoverable, $isSelected }) =>
      $isHoverable && $isSelected && selectedStyle}
  }
`;

const hoverableStyle = css`
  &:hover {
    transform: scale(1.05);
    box-shadow: ${theme.shadows.orangeHighLight};
    cursor: pointer;
  }
`;

const selectedStyle = css`
  background: ${theme.colors.primary};

  .delete-button {
    color: ${theme.colors.white};
    &:hover {
      color: ${theme.colors.red};
    }
    &:active {
      color: ${theme.colors.white};
    }
  }

  .price {
    color: white;
  }

  .primary-button {
    background: ${theme.colors.white};
    color: ${theme.colors.primary};

    &:hover {
      border: 1px solid ${theme.colors.white};
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
    }
  }
`;
