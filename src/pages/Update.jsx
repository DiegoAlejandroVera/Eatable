import styled from "@emotion/styled";
import Header from "../components/Header";
import UpdateForm from "../components/UpdateForm";

const MainContainer = styled.div`
  width: 550px;
  height: 100vh;
  margin: auto;
  background-color: #eee;
  display: flex;
  flex-direction: column;
`;

const Update = () => {
  return (
    <MainContainer>
      <Header>Update Product</Header>
      <UpdateForm />
    </MainContainer>
  );
};

export default Update;
