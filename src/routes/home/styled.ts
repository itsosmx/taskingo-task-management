import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100%;
`;

export const Wrapper = styled(motion.div)`
  padding: 1rem;
  display: flex;
  gap: 1rem;
  ::-webkit-scrollbar {
    height: 0.5rem;
    width: 0.5rem;
    background-color: ${(props) => props.theme.primary};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.secondary};
  }
`;

export const NoBoardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  align-items: baseline;
`;
export const BoardCard = styled(Link)`
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-basis: 1;
  flex-grow: 1;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  width: 200px;
  background-color: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => props.theme.lightPrimary};
  :hover {
    filter: brightness(0.9);
  }

  p {
    font-weight: bold;
  }
  i {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: rgba(0, 0, 0, 0.3);
  }
`;
