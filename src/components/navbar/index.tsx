import React from "react";
import { useSearchParams } from "react-router-dom";
import { signOutUser } from "../../services/firebase";
import Authentication from "../authentication";
import useProvider from "../hooks/useProvider";
import Modal from "../Modal";
import { TextArea, TextInput, Select, Button } from "..";
import { Container, Title, Wrapper, Actions, SignIn, SignOut, Form, AddButton } from "./styled";
import { v4 as uuidV4 } from "uuid";

export default function Navbar() {
  const { data, user, addTask } = useProvider();
  const [searchParams] = useSearchParams();
  const [current, setCurrent] = React.useState<any>(null);
  const [visible, setVisible] = React.useState(false);
  const [visibleTask, setVisibleTask] = React.useState(false);

  const handleShowTask = () => {
    setVisibleTask((state) => !state);
  };

  React.useEffect(() => {
    if (!data?.boards) return;

    for (const id in data.boards) {
      if (data.boards[id].slug === searchParams.get("board")) {
        setCurrent({ id, ...data.boards[id] });
        break;
      }
    }
  }, [searchParams, data]);

  function onSubmit(e: any) {
    e.preventDefault();
    const payload = {
      id: uuidV4(),
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
    };
    addTask(current.id, payload);
    handleShowTask();
  }

  return (
    <Container>
      <Wrapper>
        <Title>{current ? current.name : "No Board Selected."}</Title>
        <Actions>
          <AddButton disabled={!current} onClick={handleShowTask}>
            <i className="fa-solid fa-plus"></i>
            <p>Add New Task</p>
          </AddButton>
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
      <Modal visible={visibleTask} setVisible={setVisibleTask}>
        <Form onSubmit={onSubmit}>
          <h4>Add New Task</h4>
          <TextInput name="title" label="Title" placeholder="e.g. Take coffee break" />
          <TextArea
            label="Description"
            name="description"
            rows={7}
            placeholder="e.g. it's always good to take a break. This 15 minute break will recharge the batteries a little"
          />
          <Select name="status">
            {data?.columns &&
              Object.values(data?.columns).map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
          </Select>
          <Button type="submit">Create Task</Button>
          <Button type="reset" background="red">
            Cancel
          </Button>
        </Form>
      </Modal>
    </Container>
  );
}
