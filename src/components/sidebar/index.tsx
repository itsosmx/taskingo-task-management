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
  Input,
  Button,
  ModalContent,
  UserWrapper,
  Actions,
  ThemeSwitch,
  Theme,
} from "./styled";
import { useSearchParams } from "react-router-dom";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { signOutUser } from "../../services/firebase";
import { useTheme } from "styled-components";

export default function Sidebar() {
  const { data, setDate, user, settings, setSettings } = useProvider();
  const nameRef = useRef<any>();
  const [searchParams] = useSearchParams();
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  function changeModalVisible() {
    if (!user?.uid) return toast.error("You have to Sign In first!");
    setVisible((state) => !state);
  }
  function onSave() {
    if (!nameRef.current.value) return console.log("sda?");
    const slug = nameRef.current.value.toLowerCase().replace(" ", "-");
    const search = data?.boards ? Object.values(data?.boards).find((x) => x.slug === slug) : false;
    if (search) return toast.error("Board with this name already exist.");
    nameRef.current.value = "";
    changeModalVisible();
  }

  return (
    <Container>
      <Wrapper>
        <div>
          <Title>Taskingo</Title>
          <BoardsTitle>All Boards ( {data?.boards ? Object.keys(data?.boards).length : 0} )</BoardsTitle>
          <BoardsAddButton onClick={changeModalVisible}>
            <i className="fa-solid fa-folder-plus"></i>
            <p>Create New Board</p>
          </BoardsAddButton>
        </div>
        <BoardsContainer>
          <BoardsItems>
            {data?.boards &&
              Object.values(data?.boards).map((item) => (
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
          <Theme>
            <i className="fa-solid fa-sun"></i>
            <ThemeSwitch
              checkedIcon={false}
              uncheckedIcon={false}
              onChange={(value) => setSettings((state) => ({ ...state, isDarkTheme: value }))}
              checked={settings.isDarkTheme}
              //@ts-ignore
              onColor={theme?.secondary}
              //@ts-ignore
              offColor={theme?.darkPrimary}
            />
            <i className="fa-solid fa-moon"></i>
          </Theme>
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
