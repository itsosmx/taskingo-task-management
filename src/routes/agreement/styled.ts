import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  p {
    margin-left: 1rem;
    text-indent: 1rem;
  }

  h2 {
    margin: 1rem;
    color: ${(props) => props.theme.secondary};
  }
`;
