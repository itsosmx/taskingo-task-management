import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.primary};
  padding: 1rem;
  border-radius: 1rem;
  transition: 200ms;
  overflow: hidden;
  position: relative;
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

export const Actions = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 100%;
  overflow: hidden;
  background-color: ${(props) => props.theme.secondary};
  transition: 500ms;
  display: flex;
  align-items: center;
  justify-content: space-around;

  font-size: 0.7rem;

  &.show {
    width: 100%;
  }
`;

export const Button = styled.button`
  all: unset;
  background-color: rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-weight: bold;
  transition: 500ms;

  :hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
