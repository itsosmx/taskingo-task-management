import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  border: 2px dashed transparent;
  min-width: 350px;
  max-width: 350px;
  position: relative;
  padding: 1rem;

  &.dragging {
    ::after {
      content: "drop here";
      background-color: rgba(0, 0, 0, 0.1);
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px dashed ${(props) => props.theme.lightPrimary};
    }
  }
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const Title = styled.div`
  text-transform: uppercase;
  color: ${(props) => props.theme.primaryText};
  font-weight: bold;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Color = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
`;
