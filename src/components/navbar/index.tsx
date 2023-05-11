import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Authentication from "../authentication";
import useProvider from "../hooks/useProvider";
import Modal from "../Modal";
import { TextArea, TextInput, Select, Button } from "..";
import { Container, Wrapper, Actions, Form, Header, DeleteButton, Alert } from "./styled";
import { remove } from "../../services/database";

export default function Navbar() {
  const { data, user, addTask } = useProvider();
  const location = useLocation();
  const [current, setCurrent] = React.useState<any>(null);
  const [visible, setVisible] = React.useState(false);
  const [visibleTask, setVisibleTask] = React.useState(false);
  const [visibleAlert, setVisibleAlert] = React.useState(false);

  const handleShowTask = () => {
    setVisibleTask((state) => !state);
  };

  React.useMemo(() => {
    if (!data) return;
    const id = location.pathname.split("/").pop();
    if (!id) return setCurrent(null);

    for (const key in data.boards) {
      if (data.boards[key].slug === id) {
        setCurrent({ id: key, ...data.boards[key] });
        break;
      }
    }
  }, [location.pathname, data]);

  // console.log("current", current);

  function onSubmit(e: any) {
    e.preventDefault();
    addTask(current.id, {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
    });
    handleShowTask();
  }

  async function onDeleteBoard() {
    await remove(`boards/${current.id}`);
    setVisibleAlert(false);
    setCurrent(null);
  }

  return (
    <Container>
      <Wrapper>
        <Header>
          <h2>{current ? current.name : "No Board Selected."}</h2>
          {current && <DeleteButton onClick={() => setVisibleAlert(true)} className="fa-solid fa-trash"></DeleteButton>}
        </Header>
        <Actions>
          <Button disabled={!current} onClick={handleShowTask}>
            <i className="fa-solid fa-plus"></i>
            <p>Add New Task</p>
          </Button>
          {!user && <Button onClick={() => setVisible(!visible)}>Sign In</Button>}
        </Actions>
      </Wrapper>

      <Modal visible={!user && visible} setVisible={setVisible}>
        <Authentication />
      </Modal>
      <Modal visible={visibleTask} setVisible={setVisibleTask}>
        <Form onSubmit={onSubmit}>
          <h4>Add New Task</h4>
          <TextInput required name="title" label="Title" placeholder="e.g. Take coffee break" />
          <TextArea
            required
            label="Description"
            name="description"
            rows={7}
            placeholder="e.g. it's always good to take a break. This 15 minute break will recharge the batteries a little"
          />
          <Select name="status" label="Status">
            {data?.columns &&
              Object.values(data?.columns).map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
          </Select>
          <Button type="submit">Create Task</Button>
          <Button onClick={handleShowTask} type="reset" background="red">
            Cancel
          </Button>
        </Form>
      </Modal>
      <Modal visible={visibleAlert}>
        <Alert>
          <p>Are you sure you want to delete this board?</p>
          <span>
            <Button onClick={onDeleteBoard}>Confirm</Button>
            <Button background="red" onClick={() => setVisibleAlert(false)}>
              Cancel
            </Button>
          </span>
          <i>taking any action here can not be undone later.</i>
        </Alert>
      </Modal>
    </Container>
  );
}
