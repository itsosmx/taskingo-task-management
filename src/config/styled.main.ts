import styled from "styled-components";
import { ToastContainer as RawToastContainer } from "react-toastify";

export const Main = styled.main((props) => ({
  backgroundColor: props.theme.darkPrimary,
  color: props.theme.text,
}));

export const ToastContainer = styled(RawToastContainer)``;
