import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Switch from "react-switch";

export const Container = styled.div`
  background-color: ${(props) => props.theme.primary};
  border-right: 1px ${(props) => props.theme.lightPrimary} solid;
  position: relative;
  grid-area: sidebar;
  max-height: 100dvh;
`;
export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: min-content 3fr 1fr;
  height: 100%;
  max-height: 100%;
`;
export const Shadow = styled.div`
  /* background-color: red; */
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-image: linear-gradient(to top, ${(props) => props.theme.primary} 30%, transparent);
`;

export const Title = styled(Link)`
  line-height: ${(props) => props.theme.navbarHeight};
  color: ${(props) => props.theme.secondary};
  text-align: center;
`;

export const BoardsContainer = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 4px;
    background-color: ${(props) => props.theme.secondary};
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
export const BoardsTitle = styled.p`
  text-transform: uppercase;
  color: ${(props) => props.theme.primaryText};
  font-weight: bold;
  margin-left: 2rem;
`;
export const BoardsItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
const RawButton = css`
  display: flex;
  align-items: center;
  padding: 0.7rem;
  margin-right: 2rem;
  border-radius: 0 2rem 2rem 0;
  i {
    margin-right: 1rem;
  }
  padding-left: 2rem;
  cursor: pointer;

  transition: 500ms;
  :hover {
    filter: brightness(0.7);
  }
  &.active {
    background-color: ${(props) => props.theme.secondary};
  }
`;
export const BoardButton = styled(Link)`
  ${RawButton}
`;
export const BoardsAddButton = styled.div`
  ${RawButton}
  color: ${(props) => props.theme.secondary};
`;
export const Input = styled.input`
  background-color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.lightPrimary};
  padding: 1rem 3rem;
  border-radius: 1rem;
  color: ${(props) => props.theme.text};
  outline: none;
`;
export const Button = styled.button<{ submit?: boolean }>`
  background-color: ${(props) => (props?.submit ? props.theme.secondary : props.theme.red)};
  color: ${(props) => props.theme.text};
  text-align: center;
  padding: 0.5rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: 500ms;
  :hover {
    filter: brightness(0.8);
  }
`;

export const Actions = styled.div`
  padding: 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
export const UserWrapper = styled.div`
  background-color: ${(props) => props.theme.darkPrimary};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  i {
    font-size: 1.2em;
    color: ${(props) => props.theme.red};
    cursor: pointer;
    :hover {
      filter: brightness(0.9);
    }
  }
`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ThemeSwitch = styled(Switch)``;
export const Theme = styled.div`
  background-color: ${(props) => props.theme.darkPrimary};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem;
`;
