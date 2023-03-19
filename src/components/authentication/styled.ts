import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 2rem 4rem;
`;
export const Background = styled.img``;
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  flex-direction: column;
  gap: 1rem;
  width: 25vw;
  position: relative;
  .or {
    margin-inline: 2rem;
  }
`;
export const Title = styled.span`
  text-align: center;
`;
export const Services = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Button = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.darkPrimary};
  transition: 500ms;
  border-radius: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  height: 50px;
  font-size: 0.9rem;
  cursor: pointer;
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

export const Terms = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.6rem;
  text-align: center;
  gap: 0.4rem;
  a {
    color: ${(props) => props.theme.secondary};
  }
`;
