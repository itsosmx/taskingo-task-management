import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";

export const Container = styled(DragDropContext)`
  height: 100dvh;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: 80px calc(50vh - 80px) calc(50vh);
  grid-template-areas:
    "sidebar sidebar navbar navbar navbar navbar navbar navbar navbar"
    "sidebar sidebar main main main main main main main"
    "sidebar sidebar main main main main main main main";
`;
export const Body = styled(motion.div)`
  grid-area: main;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    height: 0.5rem;
    width: 0.5rem;
    background-color: ${(props) => props.theme.primary};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.secondary};
  }
`;

export const ModalContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const Button = styled.div<{ add?: boolean }>`
  background-color: ${(props) => (props?.add ? props.theme.secondary : props.theme.red)};
  text-align: center;
  padding: 0.4rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: 500ms;
  :hover {
    filter: brightness(0.8);
  }
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.lightPrimary};
  padding: 1rem 3rem;
  border-radius: 1rem;
  color: ${(props) => props.theme.text};
  outline: none;
`;

export const NoBoards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 1rem;
`;
export const Board = styled(Link)`
  width: 250px;
  height: 150px;
  background-color: ${(props) => props.theme.primary};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  transition: 500ms;
  border: 2px solid ${(props) => props.theme.lightPrimary};
  border-radius: 1rem;

  :hover {
    filter: brightness(0.9);
    transform: scale(1.05);
  }

  i {
    padding: 1rem;
    background-color: ${(props) => props.theme.darkPrimary};
    border-radius: 50%;
  }
  p {
    color: ${(props) => props.theme.text};
  }
`;
