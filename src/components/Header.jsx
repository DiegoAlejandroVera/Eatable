import styled from "@emotion/styled";

const Heading = styled.header`
  width: 100%;
  padding: 20px 0px;
  text-align: center;
  h2 {
    font-family: var(--main-font);
    font-size: 1.7rem;
  }
`;

const Header = ({ children }) => {
  return (
    <Heading>
      <h2>{children}</h2>
    </Heading>
  );
};

export default Header;
