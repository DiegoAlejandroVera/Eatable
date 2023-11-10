import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
`;

const Button = styled(Link)`
  width: 65%;
  padding: 15px;
  background-color: #fa4a0c;
  border: none;
  border-radius: 20px;
  color: white;
  font-size: 1.7rem;
  font-family: var(--secondary-font);
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #cd3f0b;
  }
`;

const Footer = ({ children, path }) => {
  return (
    <StyledFooter>
      <Button to={path}>{children}</Button>
    </StyledFooter>
  );
};

export default Footer;
