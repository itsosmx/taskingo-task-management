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
  SubTasks,
  HeaderColor,
  TaskBody,
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
                      <Task onClick={() => setActive(task.id)} key={task.id}>
                        <TaskTitle>{task.title}</TaskTitle>
                        <TaskDescription></TaskDescription>
                        {task.subtasks?.length ? (
                          <SubTasks>
                            {task.subtasks?.filter((x) => x.status).length} of {task.subtasks?.length} subtasks
                          </SubTasks>
                        ) : (
                          <SubTasks>no subtasks</SubTasks>
                        )}
                        {<TaskBody className={task.id === active ? "active" : ""}>sad</TaskBody>}
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
