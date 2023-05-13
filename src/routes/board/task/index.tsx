import { useState } from "react";
import { Button, Container, Wrapper, Title, Description, Actions } from "./styled";
import { remove, updateData } from "../../../services/database";
export default function Task({ boardId, id, color, item, ...props }: any) {
  const [state, setState] = useState(false);

  async function onChangeStatus(status: string) {
    if (status !== "remove") {
      await updateData(`/boards/${boardId}/tasks/${id}`, {
        status,
      });
    } else {
      await remove(`boards/${boardId}/tasks/${id}`, console.log);
    }
  }

  return (
    <Container
      whileHover={{ scale: 1.04 }}
      whileInView={{ opacity: [0, 0.5, 1] }}
      onClick={() => setState(!state)}
      initial={{ opacity: 0 }}
      style={{ backgroundColor: color }}
      {...props}
    >
      <Wrapper>
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
      </Wrapper>
      <Actions className={state ? "show" : "hide"}>
        <Button onClick={() => onChangeStatus("default_todo")}>TODO</Button>
        <Button onClick={() => onChangeStatus("default_doing")}>DOING</Button>
        <Button onClick={() => onChangeStatus("default_done")}>DONE</Button>
        <Button onClick={() => onChangeStatus("remove")}>
          <i className="fa-solid fa-trash"></i>
        </Button>
      </Actions>
    </Container>
  );
}
