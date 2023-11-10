import styled from "@emotion/styled";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Form } from "../components/Form";

const MainContainer = styled.div`
  width: 550px;
  height: 100vh;
  margin: auto;
  background-color: #eee;
  display: flex;
  flex-direction: column;
`;

const FormContainer = styled.div`
  flex-grow: 1;
  margin-top: 70px;
`;

const CreateForm = () => {
  return (
    <MainContainer>
      <Header>Create Product</Header>
      <FormContainer>
        <Form />
      </FormContainer>
      <Footer path="/">Create</Footer>
    </MainContainer>
  );
};

export default CreateForm;
