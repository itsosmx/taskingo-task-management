import { Container, Wrapper, Title, Content } from "./styled";
import Task from "../task";

export default function Column({ data, state, ...props }: { data: any; state: any }) {
  return (
    <Container {...animations} {...props}>
      <Wrapper>
        <Title>{state.title}</Title>
      </Wrapper>
      <Content>
        {data?.tasks &&
          Object.keys(data?.tasks)
            .filter((x) => data?.tasks[x]?.status === state.id)
            .map((task) => <Task item={data?.tasks[task]} key={task} />)}
      </Content>
    </Container>
  );
}

const animations = {
  whileInView: {
    opacity: [0, 0, 1],
  },
  initial: {
    opacity: 0,
  },
  transition: {
    duration: 1,
  },
};
