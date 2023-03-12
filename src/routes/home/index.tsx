import { useSearchParams } from "react-router-dom";
import { Navbar, Sidebar, useHorizontalScroll, useProvider } from "../../components";
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
} from "./styled";
import { useEffect, useState } from "react";
import { AppProviderPropsBoards } from "../../constants/types";

export default function Home() {
  const { data } = useProvider();
  const ref = useHorizontalScroll();
  const [searchParams] = useSearchParams();
  const [current, setCurrent] = useState<AppProviderPropsBoards>();
  const [active, setActive] = useState("");

  useEffect(() => {
    const target = data?.boards?.find((x) => x.slug === searchParams.get("board"));
    setCurrent(target);
  }, [searchParams, data]);
  console.log(active);

  function onActiveTask(id: string) {
    if (active === id) return setActive("");
    setActive(id);
  }

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
        </Body>
      </Wrapper>
    </Container>
  );
}
