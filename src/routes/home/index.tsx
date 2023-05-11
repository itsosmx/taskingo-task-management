import { useSearchParams } from "react-router-dom";
import { Modal, Navbar, Sidebar, useProvider } from "../../components";
import { Container, Wrapper, Body, ModalContainer, Button, Input } from "./styled";
import { useEffect, useState, useRef } from "react";
import { AppProviderPropsBoards } from "../../constants/types";
import { toast } from "react-toastify";
import { NormalizeObject } from "../../utils";
import Column from "./column";

export default function Home() {
  const { data, addColumn, user } = useProvider();
  const containerRef = useRef<any>();
  const form = useRef<HTMLInputElement | any>();
  const [searchParams] = useSearchParams();
  const [current, setCurrent] = useState<AppProviderPropsBoards | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!data?.boards) return;
    const obj = NormalizeObject(data?.boards);
    const target = Object.values(obj)?.find((x) => x.slug === searchParams.get("board"));
    if (!target) return setCurrent(null);
    setCurrent(target);
  }, [searchParams, data]);

  function handleAddingNewColumn() {
    if (!user?.uid) return toast.error("You have to Sign In first!");
    //@ts-ignore
    if (!data?.boards.length || !current) return toast.error("You have to create a board first!");
    setVisible((state) => !state);
  }

  function handleSubmit(event: any) {
    if (!form.current.value) return;
    addColumn({
      title: form.current.value,
      id: form.current.value?.toLowerCase().replace(" ", "-"),
      //@ts-ignore
      boardSlug: current.slug,
    });
  }

  //@ts-ignore
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
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

  const onDragEnd = () => {};

  return (
    <Container onDragEnd={onDragEnd}>
      <Wrapper>
        <Navbar />
        <Sidebar />
        <Body onWheel={handleWheel} ref={containerRef}>
          {Object.keys(data?.columns).map((key) => (
            <Column key={key} state={data?.columns[key]} data={current} />
          ))}
        </Body>
      </Wrapper>

      {/* <Modal visible={visible} setVisible={setVisible}>
        <ModalContainer onSubmit={handleSubmit} onKeyDown={handleKeyPress}>
          <p>Add New Column</p>
          <Input ref={form} placeholder="Column Title" />
          <Button onClick={handleSubmit} add>
            Add
          </Button>
          <Button onClick={handleAddingNewColumn}>Cancel</Button>
        </ModalContainer>
      </Modal> */}
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
