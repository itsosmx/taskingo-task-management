import React from "react";
import { Container, Wrapper, Title, Description } from "./styled";
import { RandomColor } from "../../../utils";

export default function Task({ item, ...props }: any) {
  return (
    <Container style={{ backgroundColor: RandomColor() }} {...props}>
      <Wrapper>
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
      </Wrapper>
    </Container>
  );
}
