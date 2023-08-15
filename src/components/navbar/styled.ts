import styled from "styled-components";

export const Container = styled.div((props) => ({
  backgroundColor: props.theme.primary,
  borderBottom: `1px ${props.theme.lightPrimary} solid`,
  gridArea: "navbar",
}));

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const DeleteButton = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.secondary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2em;
  color: rgba(0, 0, 0, 0.6);
  transition: 500ms;
  cursor: pointer;

  :hover {
    filter: brightness(0.9);
    transform: scale(1.05);
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Form = styled.form`
  width: 25dvw;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 768px) {
    width: 80dvw;
  }
`;

export const Alert = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  i {
    font-size: 0.6rem;
    text-align: center;
    color: ${(props) => props.theme.blue};
  }
`;
