import styled from "styled-components";

export const Container = styled.div((props) => ({
  height: "100vh",
}));
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: 80px calc(50vh - 80px) calc(50vh);
  grid-template-areas:
    "sidebar sidebar navbar navbar navbar navbar navbar navbar navbar"
    "sidebar sidebar main main main main main main main"
    "sidebar sidebar main main main main main main main";
`;
export const Body = styled.div`
  grid-area: main;
  padding: 1rem;
  display: flex;
  overflow-x: auto;
  ::-webkit-scrollbar {
    height: 0.5rem;
    width: 0.5rem;
    background-color: ${(props) => props.theme.primary};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.secondary};
  }
`;
export const NewColumn = styled.div`
  min-width: 350px;
  max-width: 350px;
  padding: 1rem;
  border: 2px dashed ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primaryText};
  gap: 0.5rem;
  cursor: pointer;
  transition: 500ms;

  :hover {
    filter: brightness(1.1);
    border-color: ${(props) => props.theme.secondary};
  }
`;
export const Column = styled.div`
  min-width: 350px;
  max-width: 350px;
  padding: 1rem;
`;
export const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.primaryText};

  p {
    font-weight: bold;
  }
`;
export const HeaderColor = styled.div`
  background-color: ${(props) => props.theme.secondary};
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Task = styled.div`
  background-color: ${(props) => props.theme.primary};
  padding: 1rem;
  border-radius: 1rem;
  transition: 200ms;
  :hover {
    filter: brightness(0.95);
    cursor: pointer;
  }
`;
export const TaskTitle = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
`;
export const SubTitle = styled.div`
  color: ${(props) => props.theme.primaryText};
  font-size: 0.8rem;
`;
export const TaskBody = styled.div`
  overflow: auto;
  resize: vertical;
  height: 0;
  overflow: hidden;
  padding: 0;
  transition: height 500ms;
  &.active {
    height: 200px;
    min-height: 200px;
  }
`;
export const TaskDescription = styled.div`
  background-color: rgba(0, 0, 0, 0.07);
  color: ${(props) => props.theme.text};
  border-radius: 0.4rem;
  font-size: 0.8rem;
  padding: 0.5rem;
  margin-top: 0.5rem;
`;
export const Subtasks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;
export const SubtaskCard = styled.div<any>`
  background-color: ${(props) => props.theme.darkPrimary};
  color: ${(props) => props.theme.text};
  border-radius: 0.4rem;
  font-size: 0.8rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  position: relative;

  p {
    text-decoration: ${(props) => props.checked && "line-through"};
  }
  span {
    color: ${(props) => props.theme.primaryText};
    font-size: 0.6rem;
    position: absolute;
    top: -0.5rem;
    right: 0;
  }
`;
export const SubtaskCheckbox = styled.input`
  font-size: 1rem;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
`;

export const ModalContainer = styled.div`
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