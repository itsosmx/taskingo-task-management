import { Container, Wrapper, Title, Description } from "./styled";

export default function Task({ color, item, ...props }: any) {
  return (
    <Container style={{ backgroundColor: color }} {...props}>
      <Wrapper>
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
      </Wrapper>
    </Container>
  );
}
