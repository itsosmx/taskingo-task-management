import { motion } from "framer-motion";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

interface ModalProps extends PropsWithChildren {
  visible?: boolean;
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ visible, setVisible, ...props }: ModalProps) {
  return (
    <Container
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: [0, 0.5, 1],
      }}
      transition={{
        duration: 0.5,
      }}
      className={visible ? "active" : ""}
    >
      <Touchable onClick={() => setVisible && setVisible(false)} />
      <Wrapper>{props.children}</Wrapper>
    </Container>
  );
}

const Container = styled(motion.div)`
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  &.active {
    display: flex;
  }

  
`;

const Wrapper = styled.div`
  background: ${(props) => props.theme.primary};
  padding: 1rem;
  border-radius: 1rem;
  position: relative;
`;
const Touchable = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
