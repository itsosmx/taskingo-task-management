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
      const board = Object.values(data?.boards).find((x) => x.slug === id);
      setCurrent(board);
    } else setCurrent(null);
  }, [id, data]);

  return (
    <Container>
      <Wrapper>
        {Object.keys(data?.columns).map((key) => (
          <Column key={key} state={data?.columns[key]} data={current} />
        ))}
      </Wrapper>
    </Container>
  );
}
