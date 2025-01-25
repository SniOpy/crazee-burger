import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export const  getInputTextConfig = (newProduct) => [
    {
      id: "0",
      name: "title",
      placeholder: "Nom du produit (ex: Super Burger)",
      value: newProduct.title,
      Icon: <FaHamburger />,
      version: "minimalist",
    },
    {
      id: "1",
      name: "imageSource",
      placeholder:
        "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
      value: newProduct.imageSource,
      Icon: <BsFillCameraFill />,
      version: "minimalist",
    },
    {
      id: "2",
      name: "price",
      placeholder: '"Ex: "2119,56", et "2119.56"',
      value: newProduct.price ? newProduct.price : "",
      Icon: <MdOutlineEuro />,
      version: "minimalist",
    },
];