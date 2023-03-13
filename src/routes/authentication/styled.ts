import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  position: relative;
`;
export const Background = styled.img``;
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Services = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Button = styled.button`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.primary};
  transition: 500ms;
  border-radius: 1rem;
  i {
    width: 50px;
    font-size: 1.5rem;
    height: 50px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.secondary};
  }
  p {
    padding: 1rem;
  }
  :hover {
    transform: scale(1.1);
    filter: brightness(0.9);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Input = styled.input`
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.primary};
  padding: 0.7rem 2rem;
  color: ${(props) => props.theme.text};
`;
export const Submit = styled.div`
  background-color: ${(props) => props.theme.secondary};
  padding: 0.5rem;
  text-align: center;
  border-radius: 2rem;
`;
