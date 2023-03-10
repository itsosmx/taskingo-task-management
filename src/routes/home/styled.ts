import styled from "styled-components";

export const Container = styled.div((props) => ({
  height: "100vh",
}));
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: 80px calc(50vh - 80px) calc(50vh);
  grid-template-areas:
    "sidebar sidebar navbar navbar navbar navbar navbar navbar navbar"
    "sidebar sidebar main main main main main main main"
    "sidebar sidebar main main main main main main main";
`;
export const Body = styled.div`
  grid-area: main;
  padding: 1rem;
`;
