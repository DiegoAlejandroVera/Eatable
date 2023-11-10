import styled from "@emotion/styled";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const MainContainer = styled.div`
  width: 550px;
  height: 100vh;
  margin: auto;
  background-color: #eee;
  display: flex;
  flex-direction: column;
`;

const Detail = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  gap: 15px;
  align-items: center;
  h2 {
    font-size: 1.6rem;
    font-family: var(--main-font);
  }

  p {
    font-family: var(--main-font);
  }
`;

const Details = () => {
  const { id } = useParams();
  const localProducts = JSON.parse(localStorage.getItem("products"));
  const product = localProducts.find((p) => p.id === +id);

  return (
    <MainContainer>
      <Detail>
        <div>
          <Image src={product.picture_url} alt="" />
        </div>
        <Description>
          <h2>{product.name.toUpperCase()}</h2>
          <p
            style={{ color: "#fa4a0c", fontSize: "1.5rem", fontWeight: "bold" }}
          >
            $ {product.price}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              width: "80%",
            }}
          >
            <p style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              Description
            </p>
            <p>{product.description}</p>
          </div>
        </Description>
      </Detail>
      <Footer path="/">Go Back</Footer>
    </MainContainer>
  );
};

export default Details;
