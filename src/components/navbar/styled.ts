import styled from "styled-components";

export const Container = styled.div((props) => ({
  backgroundColor: props.theme.primary,
  borderBottom: `1px ${props.theme.lightPrimary} solid`,
  gridArea: "navbar",
}));
