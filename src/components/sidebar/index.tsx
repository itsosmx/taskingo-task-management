import { useProvider, Modal, Avatar } from "..";
import {
  Container,
  Title,
  BoardButton,
  BoardsItems,
  BoardsTitle,
  Wrapper,
  BoardsAddButton,
  BoardsContainer,
  Shadow,
  Input,
  Button,
  ModalContent,
  UserWrapper,
  Actions,
} from "./styled";
import { useSearchParams } from "react-router-dom";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { signOutUser } from "../../services/firebase";

export default function Sidebar() {
  const { data, setDate, user } = useProvider();
  const nameRef = useRef<any>();
  const [searchParams] = useSearchParams();
  const [visible, setVisible] = useState(false);

  function changeModalVisible() {
    setVisible((state) => !state);
  }
  function onSave() {
    if (!nameRef.current.value) return console.log("sda?");
    const slug = nameRef.current.value.toLowerCase().replace(" ", "-");
    const search = data.boards.find((x) => x.slug === slug);
    if (search) return toast.error("Board with this name already exist.");
    setDate((state) => ({
      ...state,
      boards: [
        ...state.boards,
        {
          name: nameRef.current.value,
          slug,
        },
      ],
    }));
    nameRef.current.value = "";
    changeModalVisible();
  }

  console.log(user);

  return (
    <Container>
      <Title>Taskingo</Title>
      <Wrapper>
        <BoardsContainer>
          <BoardsTitle>All Boards ( {data.boards.length} )</BoardsTitle>
          <BoardsAddButton onClick={changeModalVisible}>
            <i className="fa-solid fa-folder-plus"></i>
            <p>Create New Board</p>
          </BoardsAddButton>
          <BoardsItems>
            {data.boards.map((item) => (
              <BoardButton
                className={searchParams.get("board") === item.slug ? "active" : ""}
                to={`?board=${item.slug}`}
                key={item.slug}
              >
                <i className="fa-regular fa-folder"></i>
                <p>{item.name}</p>
              </BoardButton>
            ))}
          </BoardsItems>
        </BoardsContainer>
        <Actions>
          {user && user?.uid && (
            <UserWrapper>
              <Avatar src={user?.photoURL} />
              <span>{user?.displayName ? user?.displayName : "Anonymous"}</span>
              <i onClick={signOutUser} className="fa-solid fa-right-from-bracket"></i>
            </UserWrapper>
          )}
        </Actions>
      </Wrapper>

      <Modal visible={visible} setVisible={setVisible}>
        <ModalContent>
          <h3>Add New Board</h3>
          <Input autoFocus ref={nameRef} placeholder="Board Name" />
          <Button add onClick={onSave}>
            Add
          </Button>
          <Button onClick={changeModalVisible}>Cancel</Button>
        </ModalContent>
      </Modal>
      {/* <Shadow /> */}
    </Container>
  );
}
