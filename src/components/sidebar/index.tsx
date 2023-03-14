import { useProvider, Modal } from "..";
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
  Avatar,
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

  return (
    <Container>
      <Wrapper>
        <Title>Taskingo</Title>
        <BoardsContainer>
          <BoardsTitle>All Boards ( {data.boards.length} )</BoardsTitle>
          <BoardsItems className="scrollbar">
            <BoardsAddButton onClick={changeModalVisible}>
              <i className="fa-solid fa-folder-plus"></i>
              <p>Create New Board</p>
            </BoardsAddButton>
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
        {user && user?.uid && (
          <Actions>
            <UserWrapper>
              {user?.photoURL && (
                <Avatar>
                  <img src={user?.photoURL} alt="avatar" />
                </Avatar>
              )}
              <span>{user?.displayName}</span>
              <i onClick={signOutUser} className="fa-solid fa-right-from-bracket"></i>
            </UserWrapper>
          </Actions>
        )}
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
