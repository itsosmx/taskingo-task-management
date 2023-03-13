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
`;

export const ToastContainer = styled(RawToastContainer)``;
