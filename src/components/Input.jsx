import styled from "@emotion/styled";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

const Label = styled.label`
  text-transform: capitalize;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: var(--secondary-font);
`;

const InputContent = styled.input`
  padding: 5px;
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  outline: none;
  font-size: 1.1rem;
  font-family: var(--main-font);
  font-style: italic;
`;

const Input = ({
  label,
  value,
  name,
  type = "text",
  id,
  placeholder = "",
  onchange,
}) => {
  return (
    <InputContainer>
      <Label htmlFor={name || id}>{label}</Label>
      <InputContent type={type} name={name} id={id} placeholder={placeholder} />
    </InputContainer>
  );
};

export default Input;
