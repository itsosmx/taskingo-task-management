import React from "react";
import { useProvider } from "../../components";
import Column from "./column";
import { Container, Wrapper } from "./styled";
import { useParams } from "react-router-dom";

export default function Board() {
  const { data } = useProvider();
  const [current, setCurrent] = React.useState<any>(null);
  const { id } = useParams();

  React.useEffect(() => {
    if (data?.boards && id) {
      const boardKey = Object.keys(data?.boards).find((key) => data.boards[key].slug === id);
      if (boardKey) setCurrent({ id: boardKey, ...data?.boards[boardKey] });
    } else setCurrent(null);
  }, [id, data]);

  return (
    <Container>
      <Wrapper>
        {Object.keys(data?.columns).reverse().map((key) => (
          <Column boardId={current?.id} key={key} state={data?.columns[key]} data={current} />
        ))}
      </Wrapper>
    </Container>
  );
}
