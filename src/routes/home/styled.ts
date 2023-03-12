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
    background-color: ${(props) => props.theme.primary};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.secondary};
    border-radius: 1rem;
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
export const SubTasks = styled.div`
  color: ${(props) => props.theme.primaryText};
  font-size: 0.8rem;
`;
export const TaskBody = styled.div`
  +
`;
export const TaskDescription = styled.div``;
