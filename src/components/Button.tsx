import React from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  background?: "primary" | "secondary" | string;
  labelColor?: "white" | "primary" | "secondary" | string;
}

export default function Button({ labelColor, background, ...props }: ButtonProps) {
  return (
    <Container labelColor={labelColor} background={background} {...props}>
      {props.children}
    </Container>
  );
}

const Container = styled.button<{ background?: string; labelColor?: string }>`
  all: unset;
  background-color: ${(props) => props.theme[props.background || "secondary"]};
  color: ${(props) => props.theme[props.labelColor || "white"]};
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  transition: 500ms;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  :not([disabled]):hover {
    transform: scale(1.05);
    filter: brightness(0.9);
  }
  :not([disabled]):active {
    transform: scale(0.95);
  }

  :disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
