import React from "react";
import { useSearchParams } from "react-router-dom";
import { signOutUser } from "../../services/firebase";
import Authentication from "../authentication";
import useProvider from "../hooks/useProvider";
import Modal from "../Modal";
import { Button, Container, Title, Wrapper, Actions, SignIn, SignOut } from "./styled";

export default function Navbar() {
  const { data, user } = useProvider();
  const [searchParams] = useSearchParams();
  const [current, setCurrent] = React.useState<any>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (!data?.boards) return;
    const target = Object.values(data?.boards).find((x) => x.slug === searchParams.get("board"));
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
          {user ? (
            <SignOut onClick={signOutUser} className="fa-solid fa-right-from-bracket" />
          ) : (
            <SignIn onClick={() => setVisible(!visible)}>Sign In</SignIn>
          )}
        </Actions>
      </Wrapper>
      <Modal visible={!user && visible} setVisible={setVisible}>
        <Authentication />
      </Modal>
    </Container>
  );
}
