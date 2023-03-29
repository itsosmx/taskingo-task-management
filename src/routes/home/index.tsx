//@ts-nocheck

import { useSearchParams } from "react-router-dom";
import { Modal, Navbar, Sidebar, useHorizontalScroll, useProvider } from "../../components";
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
  NoBoards,
  Board,
} from "./styled";
import { useEffect, useState, useRef } from "react";
import { AppProviderPropsBoards } from "../../constants/types";
import { toast } from "react-toastify";
import { RandomColor } from "../../utils";

export default function Home() {
  const { data, addColumn, user } = useProvider();
  const containerRef = useRef();
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

  function handleAddingNewColumn() {
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
      <Column {...animations} key={item.id}>
        <ColumnHeader>
          <HeaderColor />
          <p>{item.title}</p>
        </ColumnHeader>
        <Row>
          {current?.tasks &&
            Object.values(current?.tasks)
              .filter((x) => x.status === item.id)
              .map(_renderTask)}
        </Row>
      </Column>
    );
  }
  function _renderBoards(item: AppProviderPropsBoards) {
    return (
      <Board to={`?board=${item.slug}`}>
        <i style={{ color: RandomColor() }} className="fa-regular fa-folder"></i>
        <p>{item.name}</p>
      </Board>
    );
  }

  const handleWheel = (event) => {
    const container = containerRef.current;
    const containerScrollPosition = container.scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + event.deltaY,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Wrapper>
        <Navbar />
        <Sidebar />
        <Body onWheel={handleWheel} ref={containerRef}>
          {current ? (
            <>
              {data?.columns && Object.values(data?.columns).map(_renderColumn)}
              <NewColumn onClick={handleAddingNewColumn}>
                <i className="fa-solid fa-plus"></i>
                <p>Add New Column</p>
              </NewColumn>
            </>
          ) : (
            <NoBoards>{data?.boards ? Object.values(data?.boards).map(_renderBoards) : <>No</>}</NoBoards>
          )}
        </Body>
      </Wrapper>
      <Modal visible={visible} setVisible={setVisible}>
        <ModalContainer onSubmit={handleSubmit} onKeyDown={handleKeyPress}>
          <p>Add New Column</p>
          <Input ref={form} placeholder="Column Title" />
          <Button onClick={handleSubmit} add>
            Add
          </Button>
          <Button onClick={handleAddingNewColumn}>Cancel</Button>
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
