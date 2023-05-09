import React from "react";
import { Container, Wrapper, Title, Description } from "./styled";

export default function Task({ item, ...props }: any) {
  return (
    <Container {...props}>
      <Wrapper>
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
      </Wrapper>
    </Container>
  );
}
