//@ts-nocheck

import { useSearchParams } from "react-router-dom";
import { Modal, Navbar, Sidebar, TextInput, useHorizontalScroll, useProvider } from "../../components";
import {
  Container,
  Wrapper,
  Body,
  Column,
  Row,
  ColumnHeader,
  Task,
  TaskTitle,
  TaskDescription,
  HeaderColor,
  TaskBody,
  SubTitle,
  Subtasks,
  SubtaskCard,
  SubtaskCheckbox,
  NewColumn,
  ModalContainer,
  Button,
  Input,
} from "./styled";
import { useEffect, useState, useRef } from "react";
import { AppProviderPropsBoards } from "../../constants/types";
import { toast } from "react-toastify";

export default function Home() {
  const { data, addColumn, user } = useProvider();
  const ref = useHorizontalScroll();
  const form = useRef<HTMLInputElement | any>();
  const [searchParams] = useSearchParams();
  const [current, setCurrent] = useState<AppProviderPropsBoards>();
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = Object.values(data?.boards)?.find((x) => x.slug === searchParams.get("board"));
    setCurrent(target);
  }, [searchParams, data]);

  function onActiveTask(id: string) {
    if (active === id) return setActive("");
    setActive(id);
  }

  function onAddColumn() {
    if (!user?.uid) return toast.error("You have to Sign In first!");
    if (!data?.boards.length || !current) return toast.error("You have to create a board first!");
    setVisible((state) => !state);
  }

  function handleSubmit(event: any) {
    if (!form.current.value) return;
    addColumn({
      title: form.current.value,
      id: form.current.value?.toLowerCase().replace(" ", "-"),
      boardSlug: current.slug,
    });
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  }

  function _renderTask(task) {
    return (
      <Task onClick={() => onActiveTask(task.id)} key={task.id}>
        <TaskTitle>{task.title}</TaskTitle>
        <SubTitle>
          {task.subtasks?.length
            ? `${task.subtasks?.filter((x) => x.status).length} of ${task.subtasks?.length} subtasks`
            : "No subtasks"}
        </SubTitle>
        {
          <TaskBody className={task.id === active ? "active" : ""}>
            <TaskDescription>{task.description}</TaskDescription>
            <Subtasks>
              {task.subtasks?.map((subtask) => (
                <SubtaskCard checked={subtask.status} key={subtask.id}>
                  <p>{subtask.content}</p>
                  <SubtaskCheckbox type="checkbox" name="" id="" checked={subtask.status} />
                  <span>{new Date(subtask.updateAt).toUTCString()}</span>
                </SubtaskCard>
              ))}
            </Subtasks>
          </TaskBody>
        }
      </Task>
    );
  }
  function _renderColumn(item) {
    return (
      <Column {...animations} key={data?.columns[item].id}>
        <ColumnHeader>
          <HeaderColor />
          <p>{data?.columns[item].title}</p>
        </ColumnHeader>
        <Row>
          {current?.tasks &&
            current?.tasks.length !== 0 &&
            current?.tasks.filter((x) => x.status === data?.columns[item].id).map(_renderTask)}
        </Row>
      </Column>
    );
  }

  return (
    <Container>
      <Wrapper>
        <Navbar />
        <Sidebar />
        <Body ref={ref}>
          {current && data?.columns && Object.keys(data?.columns).map(_renderColumn)}
          <NewColumn onClick={onAddColumn}>
            <i className="fa-solid fa-plus"></i>
            <p>Add New Column</p>
          </NewColumn>
        </Body>
      </Wrapper>
      <Modal visible={visible} setVisible={setVisible}>
        <ModalContainer onSubmit={handleSubmit} onKeyDown={handleKeyPress}>
          <p>Add New Column</p>
          <Input ref={form} placeholder="Column Title" />
          <Button onClick={handleSubmit} add>
            Add
          </Button>
          <Button onClick={onAddColumn}>Cancel</Button>
        </ModalContainer>
      </Modal>
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
