//@ts-nocheck
import { useSearchParams } from "react-router-dom";
import { Modal, Navbar, Sidebar, useProvider } from "../../components";
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
import { NormalizeObject, RandomColor } from "../../utils";
import Draggable from "react-draggable";

export default function Home() {
  const { data, addColumn, user, updateTask } = useProvider();
  const containerRef = useRef<any>();
  const form = useRef<HTMLInputElement | any>();
  const [searchParams] = useSearchParams();
  const [current, setCurrent] = useState<AppProviderPropsBoards>();
  const [visible, setVisible] = useState(false);
  const [dragging, setDragging] = useState({
    id: "",
    state: "",
  });

  useEffect(() => {
    if (!data?.boards) return;
    const obj = NormalizeObject(data?.boards);
    const target = Object.values(obj)?.find((x) => x.slug === searchParams.get("board"));
    if (!target) return setCurrent(null);
    setCurrent({
      ...target,
      tasks: NormalizeObject(target.tasks),
    });
  }, [searchParams, data]);

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

  console.log(dragging);

  function _renderColumn(item: any) {
    return (
      <Column
        onMouseOver={() => dragging.id && setDragging((state) => ({ ...state, state: item.id }))}
        {...animations}
        key={item.id}
        className={dragging.id && "dragging"}
      >
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

  function _renderTask(task) {
    return (
      <Draggable
        key={task._id}
        onStart={() => setDragging((state) => ({ ...state, id: task._id }))}
        onStop={async () => {
          await updateTask(current?._id, dragging.id, {
            status: dragging.state,
          });
          setDragging((state) => ({ ...state, id: null }));
        }}
      >
        <Task>
          <TaskTitle>{task.title}</TaskTitle>
          <TaskDescription>{task.description}</TaskDescription>
        </Task>
      </Draggable>
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
  const handleWheel = (event: any) => {
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
