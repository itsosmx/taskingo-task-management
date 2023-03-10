import styled from "styled-components";

export const Container = styled.div((props) => ({
  height: "80px",
  backgroundColor: props.theme.primary,
  borderBottom: `1px ${props.theme.lightPrimary} solid`,
}));
