import styled from "styled-components";

export const Container = styled.div((props) => ({
  height: "calc(100vh - 80px)",
  backgroundColor: props.theme.primary,
  width: "20vw",
  borderRight: `1px ${props.theme.lightPrimary} solid`,
}));
