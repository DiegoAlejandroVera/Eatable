import { RiDeleteBin2Fill } from "react-icons/ri";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useState } from "react";
import { deleteProduct } from "../services/product-service";
import Modal from "./Modal";
import PropTypes from "prop-types";

const Main = styled.div`
  width: 190px;
  height: 350px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 0px 15px;
  box-shadow: 0px 30px 60px 0px #3939391a;
`;

const StyledImg = styled.img`
  width: 190px;
  height: 200px;
  border-radius: 50%;
`;

const Title = styled.p`
  font-family: var(--main-font);
  font-weight: bold;
  font-size: 1.3rem;
  text-align: center;
  letter-spacing: 1px;
  text-transform: capitalize;
`;

const Description = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px 15px;
`;

const Price = styled.p`
  font-family: var(--main-font);
  color: #fa4a0c;
  font-weight: bold;
  font-size: 1.3rem;
`;

const Icons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Card = ({ product, data, setData }) => {
  const [isModalOpen, setIsModalOpen] = useState({});

  function handleClick(id) {
    if (isModalOpen[id]) {
      deleteProduct(id).then(() => {
        const updatedProducts = data.filter((prod) => prod.id !== id);
        setData(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
      });
      setIsModalOpen((prevState) => ({
        ...prevState,
        [id]: false,
      }));
    }
  }

  function openModal(id) {
    setIsModalOpen((prevState) => ({
      ...prevState,
      [id]: true,
    }));
  }

  function closeModal(id) {
    setIsModalOpen((prevState) => ({
      ...prevState,
      [id]: false,
    }));
  }

  return (
    <Main>
      <Link to={`/details/${product.id}`} product={product}>
        <StyledImg src={product.picture_url} alt={product.name} />
      </Link>
      <Description>
        <Title>{product.name}</Title>
        <Price>$ {product.price}</Price>
        <Icons>
          <div style={{ cursor: "pointer" }}>
            <Link to={`/update/${product.id}`}>
              <BiSolidMessageSquareEdit size={25} color="#fa4a0c" />
            </Link>
          </div>
          <div style={{ cursor: "pointer" }}>
            <button
              onClick={() => openModal(product.id)}
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <RiDeleteBin2Fill size={25} color="#fa4a0c" />
            </button>
            <Modal
              isOpen={isModalOpen[product.id]}
              onClose={() => closeModal(product.id)}
              onClick={() => handleClick(product.id)}
            >
              <p style={{ fontSize: "22px", color: "#333333" }}>
                Are you sure?
              </p>
            </Modal>
          </div>
        </Icons>
      </Description>
    </Main>
  );
};

export default Card;

Card.propTypes = {
  product: PropTypes.object,
  data: PropTypes.array,
};
