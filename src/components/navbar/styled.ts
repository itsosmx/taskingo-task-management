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
export const Title = styled.h2``;
export const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${(props) => props.theme.secondary};
  padding: 0.5rem 1.5rem;
  border-radius: 1rem;
  margin-inline: 1rem;
  cursor: pointer;
  :hover {
    filter: brightness(0.9);
  }
`;
export const Actions = styled.div`
  display: flex;
  align-items: center;
`;
export const Menu = styled.i`
  cursor: pointer;
  font-size: 1.2rem;
  padding: 1rem;
  :hover {
    filter: brightness(0.9);
  }
`;
