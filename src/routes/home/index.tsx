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
  const { data, addColumn } = useProvider();
  const ref = useHorizontalScroll();
  const form = useRef<HTMLInputElement | any>();
  const [searchParams] = useSearchParams();
  const [current, setCurrent] = useState<AppProviderPropsBoards>();
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = data?.boards?.find((x) => x.slug === searchParams.get("board"));
    setCurrent(target);
  }, [searchParams, data]);

  function onActiveTask(id: string) {
    if (active === id) return setActive("");
    setActive(id);
  }

  function onAddColumn() {
    setVisible((state) => !state);
  }

  function onSave() {
    if (!data?.boards.length || !current) return toast.error("You have to create a board first!");
    if (!form.current.value) return;
    addColumn({
      title: form.current.value,
      id: form.current.value?.toLowerCase().replace(" ", "-"),
    });
  }
  console.log(data);

  return (
    <Container>
      <Wrapper>
        <Navbar />
        <Sidebar />
        <Body ref={ref}>
          {data.columns.map((item) => (
            <Column key={item.id}>
              <ColumnHeader>
                <HeaderColor />
                <p>{item.title}</p>
              </ColumnHeader>
              <Row>
                {current?.tasks &&
                  current?.tasks.length !== 0 &&
                  current?.tasks
                    .filter((x) => x.status === item.id)
                    .map((task) => (
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
                    ))}
              </Row>
            </Column>
          ))}
          <NewColumn onClick={onAddColumn}>
            <i className="fa-solid fa-plus"></i>
            <p>Add New Column</p>
          </NewColumn>
        </Body>
      </Wrapper>
      <Modal visible={visible} setVisible={setVisible}>
        <ModalContainer>
          <p>Add New Column</p>
          <Input ref={form} placeholder="Column Title" />
          <Button onClick={onSave} add>
            Add
          </Button>
          <Button onClick={onAddColumn}>Cancel</Button>
        </ModalContainer>
      </Modal>
    </Container>
  );
}
