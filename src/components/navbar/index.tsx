import React from "react";
import { useSearchParams } from "react-router-dom";
import Authentication from "../authentication";
import useProvider from "../hooks/useProvider";
import Modal from "../Modal";
import { Button, Container, Menu, Title, Wrapper, Actions } from "./styled";

export default function Navbar() {
  const { data } = useProvider();
  const [searchParams] = useSearchParams();
  const [current, setCurrent] = React.useState<any>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const target = data?.boards?.find((x) => x.slug === searchParams.get("board"));
    setCurrent(target);
  }, [searchParams, data]);

  return (
    <Container>
      <Wrapper>
        <Title>{current ? current.name : "No Board Selected."}</Title>
        <Actions>
          <Button disabled={!current}>
            <i className="fa-solid fa-plus"></i>
            <p>Add New Task</p>
          </Button>
          <Menu onClick={() => setVisible(!visible)} className="fa-solid fa-ellipsis-vertical"></Menu>
        </Actions>
      </Wrapper>
      <Modal visible={visible} setVisible={setVisible}>
        <Authentication />
      </Modal>
    </Container>
  );
}
