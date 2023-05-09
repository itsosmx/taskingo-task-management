import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.primary};
  padding: 1rem;
  border-radius: 1rem;
  transition: 200ms;
  :hover {
    filter: brightness(0.95);
    cursor: pointer;
  }
`;
export const Wrapper = styled.div``;
export const Title = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
`;
export const Description = styled.div`
  color: ${(props) => props.theme.text};
  border-radius: 0.4rem;
  font-size: 0.7rem;
  margin-top: 0.5rem;
`;
