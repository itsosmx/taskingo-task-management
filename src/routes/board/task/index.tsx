import { useState } from "react";
import { Button, Container, Wrapper, Title, Description, Actions } from "./styled";
import { remove } from "../../../services/database";
export default function Task({ boardId, id, color, item, ...props }: any) {
  const [state, setState] = useState(false);

  async function onChangeStatus(status: string) {
    switch (status) {
      case "default_todo":
        console.log("default_todo");
        break;
      case "default_doing":
        console.log("default_doing");
        break;
      case "default_done":
        console.log("default_done");
        break;
      default:
        await remove(`boards/${boardId?.id}/tasks/${id}`);
    }
  }

  return (
    <Container onClick={() => setState(!state)} style={{ backgroundColor: color }} {...props}>
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
