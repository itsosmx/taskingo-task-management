import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Modal as CustomModal } from "..";

export const Container = styled.div((props) => ({
  backgroundColor: props.theme.primary,
  borderRight: `1px ${props.theme.lightPrimary} solid`,
  gridArea: "sidebar",
  position: "relative",
}));

export const Wrapper = styled.div``;
export const Shadow = styled.div`
  /* background-color: red; */
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-image: linear-gradient(to top, ${(props) => props.theme.primary} 30%, transparent);
`;
// ${(props) => props.theme.primary}
export const Title = styled.h1((props) => ({
  lineHeight: props.theme.navbarHeight,
  textAlign: "center",
  color: props.theme.secondary,
}));
export const BoardsContainer = styled.div``;
export const BoardsTitle = styled.p((props) => ({
  textTransform: "uppercase",
  color: props.theme.primaryText,
  fontWeight: "bold",
  marginLeft: "2rem",
}));
export const BoardsItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-top: 1rem;
  height: calc(100vh - ${(props) => props.theme.navbarHeight} - 100px);
  overflow-y: scroll;
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
interface Props {
  add?: boolean;
}
export const Button = styled.div<Props>`
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
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
