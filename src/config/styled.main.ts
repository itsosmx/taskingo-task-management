import styled from "styled-components";
import { ToastContainer as RawToastContainer } from "react-toastify";

// export const GlobalStyle = createGlobalStyle`
//   :root {
//     --primary: ${(props) => props.theme?.primary};
//   }
// `;
export const Main = styled.main`
  background-color: ${(props) => props.theme.darkPrimary};
  color: ${(props) => props.theme.text};
  position: relative;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: 80px calc(50vh - 80px) 50vh;
  grid-template-areas:
    "sidebar sidebar navbar navbar navbar navbar navbar navbar navbar"
    "sidebar sidebar main main main main main main main"
    "sidebar sidebar main main main main main main main";
`;

export const Body = styled.div`
  grid-area: main;
  height: calc(100dvh - 80px);
  overflow-y: auto;

  ::-webkit-scrollbar {
    height: 0.5rem;
    width: 0.5rem;
    background-color: ${(props) => props.theme.lightPrimary};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.secondary};
    border-radius: 1rem;
  }
`;
export const ToastContainer = styled(RawToastContainer)``;
