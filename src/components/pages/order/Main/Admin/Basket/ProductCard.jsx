import styled, { css } from "styled-components";
import { formatPrice } from "../../../../../../utils/maths";
import { theme } from "../../../../../../theme";
const IMAGE_BY_DEFAULT = "/images/coming-soon.png";
import { IoTrashBinSharp } from "react-icons/io5";

export default function ProductCard({ product, onRemove,onClick, isSelected, isClickable}) {
  

  
  return (
    <ProductCardStyled key={product.id}  onClick={onClick} $isClickable={isClickable} $isSelected={isSelected}>
      <div className="left-side">
        <img
          className="image"
          src={product.imageSource ? product.imageSource : IMAGE_BY_DEFAULT}
          alt=""
        />
      </div>
      <div className="right-side">
        <div className="infos">
          <div className="title">{product.title ? product.title : ""}</div>
          <div className="price">
            {product.price ? formatPrice(product.price) : "0.00 €"}
          </div>
        </div>
        <div className="quantity">x {product.quantity}</div>
        <div className="delete-cross" onClick={onRemove}>
          <IoTrashBinSharp />
        </div>
      </div>
    </ProductCardStyled>
  );
}

const ProductCardStyled = styled.div`

  cursor: ${({ $isClickable }) => ($isClickable ? "pointer" : "auto")};
  display: flex;
  height: 70px;
  width: 286px;

  box-shadow: -4px 4px 15px 0px rgba(0, 0, 0, 0.2);
  padding: 8px 16px;
  border-radius: 5px;
  margin-bottom: 20px;

  .left-side {
    display: flex;
    justify-content: center;
    width: 85.8px;

    .image {
      width: 86.5px;
      height: 70px;
      object-fit: contain;
      object-position: center;
    }
  }

  .right-side {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200.2px;
    padding-left: 21px;

    .infos {
      .title {
        min-height: 1em;
        font-family: ${theme.fonts.family.stylish};
        font-size: ${theme.fonts.size.P3};
        font-weight: 700;
        line-height: 32px;
        letter-spacing: 0%;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: left;
        overflow: hidden;
        width: 119.14px;
      }
    }

    .price,
    .quantity {
      font-family: Open Sans;
      font-weight: 400;
      font-size: 15px;
      line-height: 20.43px;
      letter-spacing: 0%;
      color: rgba(255, 160, 27, 1);
    }

    .delete-cross {
      display: none;
    }
  }

  &:hover {
    position: relative;
    transition: all 0.4s ease-out;

    .delete-cross {
      position: absolute;
      right: 0;
      display: block;
      height: 86px;
      width: 76px;

      display: flex;
      justify-content: center;
      align-items: center;

      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      background: #e25549;
      color: white;

      transition: all 0.2s ease-out;
    }
    .quantity {
      display: none;
    }
  }

  &:active {
    .delete-cross {
      color: black;
    }
  }

  ${({ $isClickable, $isSelected }) =>  $isSelected && $isClickable && clickableStyle}
`;

const clickableStyle = css`

background: ${theme.colors.primary};

.right-side {
  .price, .quantity {
    color:  ${theme.colors.white};
}
}

 
`;
