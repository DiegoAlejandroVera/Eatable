import styled from "@emotion/styled";
import Input from "./Input";

const ContForm = styled.form`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Form = () => {
  return (
    <ContForm>
      <Input label="name:" name="name" />
      <Input label="price:" name="price" />
      <Input label="category:" name="category" />
      <Input label="picture URL:" name="picture_url" />
    </ContForm>
  );
};
