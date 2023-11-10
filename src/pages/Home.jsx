import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getProducts } from "../services/product-service";
import { Bars } from "react-loader-spinner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Grid from "../components/Grid";

const MainContainer = styled.div`
  width: 550px;
  height: 100vh;
  margin: auto;
  background-color: #eee;
  display: flex;
  flex-direction: column;
`;

const Grow = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProducts()
      .then((products) => {
        setData(products);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(data));
  }, [data]);

  return (
    <MainContainer>
      <Header>Products Dashboard</Header>
      <Grow>
        {loading ? (
          <Loader>
            <Bars
              height={80}
              width={80}
              color="#fa4a0c"
              ariaLabel="bars-loading"
            />
          </Loader>
        ) : (
          data && (
            <Grid>
              {data.map((p) => (
                <Card key={p.id} product={p} data={data} />
              ))}
            </Grid>
          )
        )}
      </Grow>
      <Footer path="/create">Create Product</Footer>
    </MainContainer>
  );
};
