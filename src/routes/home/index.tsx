import { useProvider } from "../../components";
import { Container, Wrapper, NoBoardsWrapper, BoardCard } from "./styled";
import { useRef } from "react";
import { RandomColor } from "../../utils";

export default function Home() {
  const { data } = useProvider();
  const containerRef = useRef<any>();

  const onDragEnd = () => {};

  const _renderBoards = (item: any) => {
    console.log(item);

    return (
      <BoardCard to={`?board=${item.slug}`} key={item.slug}>
        <i style={{ backgroundColor: RandomColor() }} className="fa-regular fa-folder"></i>
        <p>{item.name}</p>
      </BoardCard>
    );
  };

  return (
    <Container onDragEnd={onDragEnd}>
      <Wrapper {...animations} ref={containerRef}>
        <NoBoardsWrapper>{data?.boards && Object.values(data?.boards).map(_renderBoards)}</NoBoardsWrapper>
      </Wrapper>
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
