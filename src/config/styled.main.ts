import styled from "styled-components";
import { ToastContainer as RawToastContainer } from "react-toastify";

// export const GlobalStyle = createGlobalStyle`
//   :root {
//     --primary: ${(props) => props.theme?.primary};
//   }
// `;
export const Main = styled.main`
  background: ${(props) => props.theme.darkPrimary};
  color: ${(props) => props.theme.text};
  position: relative;
  display: grid;
  grid-template-columns: 1fr 4.5fr;
  grid-template-rows: 80px calc(50vh - 80px) 50vh;
  grid-template-areas:
    "sidebar navbar"
    "sidebar main"
    "sidebar main";

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: max-content 80px max-content;
    grid-template-areas:
      "sidebar"
      "navbar"
      "main";
  }
`;

export const Body = styled.div`
  grid-area: main;
  height: calc(100dvh - 80px);
  overflow-y: auto;
  
  ::-webkit-scrollbar {
    height: 0.5rem;
    width: 0.5rem;
    background: ${(props) => props.theme.lightPrimary};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.secondary};
    border-radius: 1rem;
  }

  @media (max-width: 768px) {
    height: max-content;
  }
`;
export const ToastContainer = styled(RawToastContainer)``;
