import styled from "@emotion/styled";
import Input from "./Input";
import { createProduct } from "../services/product-service";
import { useNavigate } from "react-router-dom";

const ContForm = styled.form`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
`;

const Button = styled.button`
  width: 65%;
  padding: 15px;
  background-color: #fa4a0c;
  border: none;
  border-radius: 20px;
  color: white;
  font-size: 1.7rem;
  font-family: var(--secondary-font);
  font-weight: bold;
  margin: 10px auto;
  cursor: pointer;
  &:hover {
    background-color: #cd3f0b;
  }
`;

const InputsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const AreaContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  label {
    font-family: var(--secondary-font);
    font-weight: bold;
    font-size: 1.2rem;
    text-transform: capitalize;
  }
  textarea {
    border: none;
    outline: none;
    border-bottom: 1px solid black;
    resize: none;
    background-color: transparent;
    font-family: var(--main-font);
    font-size: 1.1rem;
    font-style: italic;
  }
`;

export const Form = () => {
  const navigate = useNavigate();
  function handleClick(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const newProduct = {
      name: formElements.name.value,
      price: Number(formElements.price.value),
      description: formElements.description.value,
      category: formElements.category.value,
      picture_url: formElements.picture_url.value,
    };
    createProduct(newProduct);

    navigate("/");
  }

  return (
    <ContForm onSubmit={handleClick}>
      <InputsContainer>
        <Input label="name:" name="name" />
        <Input label="price:" name="price" />
        <AreaContent>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="3"
          ></textarea>
        </AreaContent>
        <Input label="category:" name="category" />
        <Input label="picture URL:" name="picture_url" type="url" />
      </InputsContainer>
      <Button>Create Product</Button>
    </ContForm>
  );
};
