import styled from "@emotion/styled";

const ModalCard = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: rgba(255, 255, 255, 0.7); */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const Button = styled.button`
  background: #efb60e;
  color: white;
  border: none;
  padding: 10px;
  width: 200px;
  cursor: pointer;
  border-radius: 25px;
  &:hover {
    background-color: #f4c22e;
  }
`;

const BlurredBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(
    1px
  ); /* Ajusta el valor de desenfoque según tus preferencias */
  z-index: -1;
`;

const AcceptButton = styled.button`
  background-color: #fa4a0c;
  color: white;
  padding: 10px;
  width: 200px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    background-color: #f95f26;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

const Modal = ({ isOpen, onClose, children, onClick }) => {
  if (!isOpen) return null;
  return (
    <ModalCard>
      <BlurredBackground />
      <ModalContent>
        {children}
        <ButtonContainer>
          <AcceptButton onClick={onClick}>Yes, delete it!</AcceptButton>
          <Button onClick={onClose}>No, cancel!</Button>
        </ButtonContainer>
      </ModalContent>
    </ModalCard>
  );
};

export default Modal;
