import { RiDeleteBin2Fill } from "react-icons/ri";
import { BiPointer, BiSolidMessageSquareEdit } from "react-icons/bi";
import styled from "@emotion/styled";

const Main = styled.div`
  width: 210px;
  height: 350px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 0px 10px;
  box-shadow: 0px 30px 60px 0px #3939391a;
`;

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const Title = styled.p`
  font-family: var(--main-font);
  font-weight: bold;
  font-size: 1.4rem;
  text-align: center;
  letter-spacing: 1px;
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

const Card = ({ product }) => {
  return (
    <Main>
      <div>
        <StyledImg src={product.picture_url} alt={product.name} />
      </div>
      <Description>
        <Title>{product.name}</Title>
        <Price>$ {product.price}</Price>
        <Icons>
          <div style={{ cursor: "pointer" }}>
            <BiSolidMessageSquareEdit size={25} color="#fa4a0c" />
          </div>
          <div style={{ cursor: "pointer" }}>
            <RiDeleteBin2Fill size={25} color="#fa4a0c" />
          </div>
        </Icons>
      </Description>
    </Main>
  );
};

export default Card;
