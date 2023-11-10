import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";
import Input from "./Input";
import { updateProduct } from "../services/product-service";
import { useState } from "react";

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

const UpdateForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const localProducts = JSON.parse(localStorage.getItem("products"));
  const product = localProducts.find((p) => p.id === +id);

  const [initialProduct, setInitialProduct] = useState({
    name: product.name,
    price: product.price,
    description: product.description,
    category: product.category,
    picture_url: product.picture_url,
  });

  function handleClick(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const updatedProduct = {
      name: formElements.name.value,
      price: Number(formElements.price.value),
      description: formElements.description.value,
      category: formElements.category.value,
      picture_url: formElements.picture_url.value,
    };

    updateProduct(updatedProduct, Number(id));
    navigate("/");
  }

  return (
    <ContForm onSubmit={handleClick}>
      <InputsContainer>
        <Input
          label="name:"
          name="name"
          value={initialProduct.name}
          onChange={(e) =>
            setInitialProduct({ ...initialProduct, name: e.target.value })
          }
        />
        <Input
          label="price:"
          name="price"
          value={initialProduct.price}
          onChange={(e) =>
            setInitialProduct({ ...initialProduct, price: e.target.value })
          }
        />
        <AreaContent>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="3"
            value={initialProduct.description}
            onChange={(e) =>
              setInitialProduct({
                ...initialProduct,
                description: e.target.value,
              })
            }
          ></textarea>
        </AreaContent>
        <Input
          label="category:"
          name="category"
          value={initialProduct.category}
          onChange={(e) =>
            setInitialProduct({ ...initialProduct, category: e.target.value })
          }
        />
        <Input
          label="picture URL:"
          name="picture_url"
          type="url"
          value={initialProduct.picture_url}
          onChange={(e) =>
            setInitialProduct({
              ...initialProduct,
              picture_url: e.target.value,
            })
          }
        />
      </InputsContainer>
      <Button>Update Product</Button>
    </ContForm>
  );
};

export default UpdateForm;
