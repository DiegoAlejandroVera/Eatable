import styled from "@emotion/styled";

const CardGrid = styled.div`
  padding: 25px;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
`;

const Grid = ({ children }) => {
  return <CardGrid>{children}</CardGrid>;
};

export default Grid;
